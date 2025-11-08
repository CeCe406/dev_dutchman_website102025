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

    return <GalleryBase images={images} />;
}
