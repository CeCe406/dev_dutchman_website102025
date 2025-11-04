import { useState, useEffect } from "react";
import "./MediaGallery.css";

import img1 from "../../photos/Wildlife/AR_29 08.23.24.jpg";
import img2 from "../../photos/Wildlife/AR_29 08.24.24.jpg";
import img3 from "../../photos/Wildlife/AR_29 08.26.24.jpg";
import img4 from "../../photos/Wildlife/AR_29 09.06.24.jpg";
import img5 from "../../photos/Wildlife/AR_29 09.07.24.jpg";

export default function Gallery() {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5
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

        <div className="media-gallery-wrapper">
            <div className="media-gallery-page">
                {/* Gallery */}
                <div className="media-gallery-container">
                    {/* Main image + nav */}
                    <div className="media-main-image-container">
                        <button
                            className="media-nav-button left"
                            onClick={() =>
                                setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
                            }
                        >
                            &#11013;
                        </button>

                        <img src={images[selectedIndex]} alt="Selected" className="media-main-image" />

                        <button
                            className="media-nav-button right"
                            onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
                        >
                            &#11157;
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}
