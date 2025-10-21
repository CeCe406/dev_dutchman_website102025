// info came from: https://leafletjs.com

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./map.css";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


// custom access point icon
var accessIcon = L.icon({
  iconUrl: `${process.env.PUBLIC_URL}/dutchman_website/geojsons/access_icon.png`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [-3, -18]
})

//custom block managment point icon
var blockIcon = L.icon({
  iconUrl: `${process.env.PUBLIC_URL}/dutchman_website/geojsons/block_icon.png`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [-3, -12]
})

const LeafletComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxSlides, setLightboxSlides] = React.useState([]);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);


  const projectBounds = L.latLngBounds(
    [46.0, -113.2],
    [46.5, -112.4]
  );

  useEffect(() => {
    // make map if map doesn't exist yet
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        maxBounds: projectBounds,
        maxBoundsViscosity: 1.0
      }).setView([46.168839, -112.851112], 12);

      const osmLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { attribution: "© OpenStreetMap contributors" }
      ).addTo(mapRef.current);

      const imageryLayer = L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
        {
          attribution:
            '© Stadia Maps | © OSM',
          ext: "jpg",
          bounds: projectBounds,
          noWrap: true
        }
      ).addTo(mapRef.current);

      const baseLayers = {
        "Open Street Map": osmLayer,
        "Imagery Layer": imageryLayer
      };

      L.control.layers(baseLayers).addTo(mapRef.current);
    }

    // Add user location button for location capabilities
    const locateButton = L.control({ position: "topleft" })

    locateButton.onAdd = function (map) {
      const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");
      div.innerHTML = `<a href="#" title="Zoom to My Location" style="display:block;padding:5px;">📍</a>`;

      div.onclick = function (e) {
        e.preventDefault();
        map.locate({ setView: true, maxZoom: 16 });
      };
      return div
    };

    locateButton.addTo(mapRef.current);

    // show pin at user location
    mapRef.current.on("locationfound", function (e) {
      const radius = e.accuracy / 2;
      L.circle(e.latlng, radius).addTo(mapRef.current);
    });

    mapRef.current.on("locationerror", function () {
      alert("Unable to determine location. Please make sure location services are enabled.");
    });


    // Create panes to force specific layer render order
    ["wetlandPane", "boundaryPane", "linesPane", "signinPointsPane", "accessPointsPane"].forEach((paneName, idx) => {
      mapRef.current.createPane(paneName);
      mapRef.current.getPane(paneName).style.zIndex = 400 + idx * 100;
    });

    // fucntion for pop ups in map
    const onEachFeature = (feature, layer) => {
      if (!feature.properties) return;

      let popupContent = `<div>${feature.properties.PopupInfo || feature.properties.name || "No info available"}</div>`;


      if (feature.properties.photo?.length > 0) {
        popupContent += `<div style="margin-top: 8px;">`;
        feature.properties.photo.forEach((file) => {
          popupContent += `
      <img 
        src="${process.env.PUBLIC_URL}/dutchman_website/access_point_photos/${file}"
        alt="popup photo" 
        data-photo="${file}" 
        style="width: 60px; height: auto; margin: 5px; cursor: pointer; border-radius: 4px;" 
      />`;
        });
        popupContent += `</div>`;
      }

      layer.bindPopup(popupContent);

      // Handle clicks / touch on popup images
      const attachHandlers = () => {
        const popupEl = layer.getPopup().getElement();
        if (!popupEl) return;

        const imgs = popupEl.querySelectorAll("img[data-photo]");
        imgs.forEach((img, idx) => {
          const handler = () => {
            const slides = feature.properties.photo.map((file) => ({
              src: `${process.env.PUBLIC_URL}/dutchman_website/access_point_photos/${file}`,
            }));
            setLightboxSlides(slides);
            setLightboxOpen(true);
            setLightboxIndex(idx);
          };
          img.addEventListener("click", handler);
          img.addEventListener("touchstart", handler);
          img._handler = handler;
        });
      };

      const cleanupHandlers = () => {
        const popupEl = layer.getPopup().getElement();
        if (!popupEl) return;

        const imgs = popupEl.querySelectorAll("img[data-photo]");
        imgs.forEach((img) => {
          if (img._handler) {
            img.removeEventListener("click", img._handler);
            img.removeEventListener("touchstart", img._handler);
            delete img._handler;
          }
        });
      };

      layer.on("popupopen", attachHandlers);
      layer.on("popupclose", cleanupHandlers);
    };

    // Load layers
    const loadLayers = async () => {
      try {
        const [wetlandRes, boundaryRes, linesRes, pointsRes, accessRes] = await Promise.all([
          fetch(`${process.env.PUBLIC_URL}/dutchman_website/geojsons/Wetland_Boundaries.geojson`),
          fetch(`${process.env.PUBLIC_URL}/dutchman_website/geojsons/Dutchman_Boundary.geojson`),
          fetch(`${process.env.PUBLIC_URL}/dutchman_website/geojsons/access_roads.geojson`),
          fetch(`${process.env.PUBLIC_URL}/dutchman_website/geojsons/sign_in_points.geojson`),
          fetch(`${process.env.PUBLIC_URL}/dutchman_website/geojsons/access_points.geojson`),
        ]);

        const [wetlandData, boundaryData, linesData, pointsData, accessData] = await Promise.all([
          wetlandRes.json(),
          boundaryRes.json(),
          linesRes.json(),
          pointsRes.json(),
          accessRes.json(),
        ]);
        // create and addd legend to map
        const legend = L.control({ position: "bottomright" });

        legend.onAdd = function (map) {
          const div = L.DomUtil.create("div", "info legend");
          div.innerHTML = `
              <div class="legend-toggle">🗺️ Legend</div>
              <div class="legend-content" style="display: none;">
              <h4>Map Legend</h4>
              <div><span style="background:#6df7f0ff; border:3px solid#003561ff;"></span> Wetland Boundary</div>
              <div><span style=" border:3px solid #64e77a;"></span> Dutchman Property Boundary</div>
              <div><span style="background:#ffe8b7; border:1px solid #000;"></span> Access Roads</div>
              <div><img src="` + process.env.PUBLIC_URL + `/dutchman_website/access_point_photos/access_icon.png" style="width:18px;height:18px;vertical-align:middle;margin-right:4px;"> Access Points</div>
              <div><img src="` + process.env.PUBLIC_URL + `/dutchman_website/access_point_photos/block_icon.png" style="width:14px;height:14px;vertical-align:middle;margin-right:6px;"> Sign-In Points</div>
            `;

          div.querySelector(".legend-toggle").onclick = function () {
            const content = div.querySelector(".legend-content");
            const isHidden = content.style.display === "none";
            content.style.display = isHidden ? "block" : "none";
          };

          return div;
        };
        legend.addTo(mapRef.current);


        L.geoJSON(wetlandData, { style: { color: "#003561ff", fillColor: "#6df7f0ff", weight: 1, fillOpacity: 0.25, }, pane: "wetlandPane" }).addTo(mapRef.current);
        L.geoJSON(boundaryData, { style: { color: "#64e77aff", fillOpacity: 0 }, pane: "boundaryPane" }).addTo(mapRef.current);
        L.geoJSON(linesData, { style: { color: "#ffe8b7ff", weight: 3, dashArray: "15, 10" }, pane: "linesPane" }).addTo(mapRef.current);

        L.geoJSON(pointsData, {
          pointToLayer: (f, latlng) => L.marker(latlng, { icon: blockIcon, pane: "signinPointsPane" }),
          onEachFeature,
        }).addTo(mapRef.current);

        L.geoJSON(accessData, {
          pointToLayer: (f, latlng) => L.marker(latlng, { icon: accessIcon, pane: "accessPointsPane" }),
          onEachFeature,
        }).addTo(mapRef.current);
      } catch (err) {
        console.error("Error loading layers:", err);
      }
    };

    loadLayers();

    // cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="child-map-container" ref={mapContainerRef}>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />
    </div>
  );
};

export default LeafletComponent;

