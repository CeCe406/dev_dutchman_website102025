import { useState, useEffect } from "react";
import "./MediaGallery.css";

export default function GalleryBase({ images }) {
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
                <div className="media-gallery-container">
                    <div className="media-main-image-container">

                        {/* Left Arrow */}
                        <button
                            className="media-nav-button left"
                            onClick={() =>
                                setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
                            }
                            aria-label="Previous image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        <img
                            src={images[selectedIndex]}
                            alt="Gallery item"
                            className="media-main-image"
                        />

                        {/* Right Arrow */}
                        <button
                            className="media-nav-button right"
                            onClick={() =>
                                setSelectedIndex((selectedIndex + 1) % images.length)
                            }
                            aria-label="Next image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}