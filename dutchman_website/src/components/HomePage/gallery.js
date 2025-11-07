import { useState, useEffect } from "react";
import "./Gallery.css";

import img1 from "../../photos/Wildlife/AR_29 08.23.24.jpg";
import img2 from "../../photos/Wildlife/AR_29 08.24.24.jpg";
import img3 from "../../photos/Wildlife/AR_29 08.26.24.jpg";
import img4 from "../../photos/Wildlife/AR_29 09.06.24.jpg";
import img5 from "../../photos/Wildlife/AR_29 09.07.24.jpg";
import img6 from "../../photos/951DE5F0-69BC-4B81-8AF5-668B6A986574.JPG";
import img8 from "../../photos/20201020_114546.jpg";
import img9 from "../../photos/Media (39).jpg";
import img10 from "../../photos/Media (40).jpg";
import img11 from "../../photos/Media (42).jpg";
import img12 from "../../photos/Media (43).jpg";
import img13 from "../../photos/Media (49).jpg";

export default function Gallery() {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") {
                setSelectedIndex((prev) => (prev + 1) % images.length);
            } else if (e.key === "ArrowLeft") {
                setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [images.length]);

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (

        <div className="gallery-wrapper">
            <div className="gallery-page">
                {/* Gallery */}
                <div className="gallery-container">
                    {/* Main image + nav */}
                    <div className="main-image-container">
                        <img src={images[selectedIndex]} alt="Selected" className="main-image" />

                        <div className="arrow-controls">
                            <button
                                className="nav-button left"
                                onClick={() =>
                                    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
                                }
                            >
                                &#11013;
                            </button>

                            <button
                                className="nav-button right"
                                onClick={() =>
                                    setSelectedIndex((selectedIndex + 1) % images.length)
                                }
                            >
                                &#11157;
                            </button>
                        </div>
                    </div>


                    {/* Thumbnails */}
                    <div className="thumbnails">
                        {images.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Thumbnail ${i}`}
                                onClick={() => setSelectedIndex(i)}
                                className={`thumbnail ${i === selectedIndex ? "active" : ""}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='gallery-intro'>
                The Dutchman is the largest remaining contiguous wetlands site within the Upper Clark Fork River Basin.
                <br></br><br></br>
                Several retention dams located across the site also create ponds for wildlife habitat and contribute to the wetland habitat. Wetlands provide many benefits for soil, plants, animals, and vegetation and foster biodiversity.
                <br></br><br></br>
                Every year the United States loses about 60,000 acres of wetlands due to land development, non-native/invasive species, and industrial/agriculture runoff, and therefore the Dutchman Wetlands site includes property covenants to restrict future development and manage site use to preserve sensitive wetland habitat on the site.
                <br></br><br></br>
                Plants that can be observed within these wetlands areas include various species of rushes, sedges, cattails, willows, aspen, and other wetland-type plant species. Drier areas of the site include upland grasses, wildflowers and shrubbery.
            </div>
        </div>
    );
}
