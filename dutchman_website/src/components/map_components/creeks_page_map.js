// info came from: https://leafletjs.com

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

const projectBounds = L.latLngBounds([46.0, -113.2], [46.5, -112.4]);

const CreeksLeafletComponent = ({ onCreekClick }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // make map if map doesn't exist yet
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        maxBounds: projectBounds,
        maxBoundsViscosity: 1.0,
      }).setView([46.168839, -112.851112], 12);

      const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapRef.current);

      const imageryLayer = L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
        {
          attribution: "© Stadia Maps | © OSM",
          ext: "jpg",
          bounds: projectBounds,
          noWrap: true,
        }
      ).addTo(mapRef.current);

      const baseLayers = {
        "Open Street Map": osmLayer,
        "Imagery Layer": imageryLayer,
      };

      L.control.layers(baseLayers).addTo(mapRef.current);

      // --- Locate button ---
      const locateButton = L.control({ position: "topright" });
      locateButton.onAdd = function (map) {
        const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");
        div.innerHTML = `<a href="#" title="Zoom to My Location" style="display:block;padding:5px;">📍</a>`;
        div.onclick = function (e) {
          e.preventDefault();
          map.locate({ setView: true, maxZoom: 16 });
        };
        return div;
      };
      locateButton.addTo(mapRef.current);

      // Location events
      mapRef.current.on("locationfound", function (e) {
        const radius = e.accuracy / 2;
        L.circle(e.latlng, radius).addTo(mapRef.current);
      });

      mapRef.current.on("locationerror", function () {
        alert("Unable to determine location. Please make sure location services are enabled.");
      });

      // --- Load streams layer ---
      const loadLayers = async () => {
        try {
          const response = await fetch(
            `${process.env.PUBLIC_URL}/geojsons/streams_in_dutchman.geojson`
          );
          const data = await response.json();

          const onEachFeature = (feature, layer) => {
            if (!feature.properties) return;
            let popupContent = `<div>${feature.properties.Info || "No info available."}</div>`;

            if (feature.properties.PHOTOS?.length > 0) {
              popupContent += `<div style="margin-top: 8px;">`;
              feature.properties.PHOTOS.forEach((file) => {
                popupContent += `
                  <img 
                    src="${process.env.PUBLIC_URL}/creek_photos/${file}"
                    alt="Creek photo"
                    data-photo="${file}"
                    style="width: 60px; height: auto; margin: 5px; cursor: pointer; border-radius: 4px;"
                  />`;
              });
              popupContent += `</div>`;
            }

            layer.bindPopup(popupContent);

            layer.on({
              click: () => {
                const info = feature.properties?.Info || "No info available.";
                const photos = feature.properties?.PHOTOS || [];
                onCreekClick({ info, photos });
              },
              mouseover: () => {
                layer.setStyle({ color: "#0400ffff", weight: 6 });
              },
              mouseout: () => {
                layer.setStyle({ color: "#1a5ae4", weight: 4 });
              },
            });

            const attachHandlers = () => {
              const popupEl = layer.getPopup()?.getElement();
              if (!popupEl) return;

              const imgs = popupEl.querySelectorAll("img[data-photo]");
              imgs.forEach((img) => {
                img.addEventListener("click", () => {
                  window.open(img.src, "_blank");
                });
              });
            };

            const cleanupHandlers = () => {
              const popupEl = layer.getPopup()?.getElement();
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

          // Invisible buffer for UI
          L.geoJSON(data, {
            style: { color: "#000000", opacity: 0, weight: 15 },
            onEachFeature,
            interactive: true,
          }).addTo(mapRef.current);

          // Visible creek lines
          L.geoJSON(data, {
            style: { color: "#1a5ae4", weight: 4 },
            onEachFeature,
          }).addTo(mapRef.current);
        } catch (err) {
          console.error("Error loading streams layer:", err);
        }
      };

      loadLayers();
    }

    // --- Cleanup ---
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [onCreekClick]);

  return <div className="child-map-container" ref={mapContainerRef}></div>;
};

export default CreeksLeafletComponent;
