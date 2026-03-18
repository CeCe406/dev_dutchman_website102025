import { useState, useEffect } from "react";
import "./MediaGallery.css";

import img6 from "../../photos/951DE5F0-69BC-4B81-8AF5-668B6A986574.JPG";
import img7 from "../../photos/20201020_114546.jpg";
import img8 from "../../photos/Media (39).jpg";
import img9 from "../../photos/Media (40).jpg";
import img10 from "../../photos/Media (42).jpg";
import img11 from "../../photos/Media (43).jpg";
import img12 from "../../photos/Media (49).jpg";
import img13 from "../../photos/Media (50).jpg"
import img14 from "../../photos/Media (51).jpg"
import img15 from "../../photos/Media (52).jpg"
import img16 from "../../photos/Media (54).jpg"
import img17 from "../../photos/Media (55).jpg"
import img18 from "../../photos/Picture1.jpg"
import img19 from "../../photos/Picture2.jpg"
import img20 from "../../photos/Picture3.jpg"
import img21 from "../../photos/Picture4.jpg"
import img22 from "../../photos/Picture5.jpg"

export default function Gallery() {
    const images = [
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22
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
                            ⬅
                        </button>

                        <img src={images[selectedIndex]} alt="Selected" className="media-main-image" />

                        <button
                            className="media-nav-button right"
                            onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
                        >
                            ➡
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}
