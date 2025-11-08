import { useState, useEffect } from "react";
import "./MediaGallery.css";

import img23 from "../../photos/OverheadDrone/250630_233431_634.jpg"
import img24 from "../../photos/OverheadDrone/250630_233436_766.jpg"
import img25 from "../../photos/OverheadDrone/250630_233439_748.jpg"
import img26 from "../../photos/OverheadDrone/250630_233443_271.jpg"
import img27 from "../../photos/OverheadDrone/250630_233446_255.jpg"
import img28 from "../../photos/OverheadDrone/250630_233449_307.jpg"
import img29 from "../../photos/OverheadDrone/250630_233453_919.jpg"
import img30 from "../../photos/OverheadDrone/250630_233458_175.jpg"
import img31 from "../../photos/OverheadDrone/250630_233502_014.jpg"
import img32 from "../../photos/OverheadDrone/250630_233506_103.jpg"
import img33 from "../../photos/OverheadDrone/250630_233510_588.jpg"
import img34 from "../../photos/OverheadDrone/250630_233514_367.jpg"
import img35 from "../../photos/OverheadDrone/250630_233517_406.jpg"
import img36 from "../../photos/OverheadDrone/250630_233521_836.jpg"

export default function Gallery() {
    const images = [
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36
    ];
    return <GalleryBase images={images} />;
}
