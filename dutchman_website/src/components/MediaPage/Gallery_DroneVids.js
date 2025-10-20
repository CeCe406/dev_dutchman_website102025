// import { useState, useEffect } from "react";
import "./MediaGallery.css";

// import vid1 from "../../photos/Media (43).jpg"

export default function Gallery() {

    // const images = [
    //     vid1
    // ];

    // const [selectedIndex, setSelectedIndex] = useState(0);

    // // Keyboard navigation
    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         if (e.key === "ArrowRight") {
    //             setSelectedIndex((prev) => (prev + 1) % images.length);
    //         } else if (e.key === "ArrowLeft") {
    //             setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    //         }
    //     };
    //     window.addEventListener("keydown", handleKeyDown);
    //     return () => window.removeEventListener("keydown", handleKeyDown);
    // }, [images.length]);

    // // Auto-advance
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSelectedIndex((prev) => (prev + 1) % images.length);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [images.length]);

    return (
        <div className="media-gallery-wrapper">
            <div className="media-gallery-page">
                {/* Gallery */}
                <div className="media-gallery-container">
                    {/* Main image + nav */}
                    <div className="media-main-image-container">
                        {/* <img src={images[selectedIndex]} alt="Selected" className="media-main-image" /> */}
                        <iframe className="media-main-video" src='https://www.youtube.com/embed/tD7R-8IuYyU' title="Dutchman Drone Flyover"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
