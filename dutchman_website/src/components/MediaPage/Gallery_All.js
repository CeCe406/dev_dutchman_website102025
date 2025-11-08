import GalleryBase from "./Gallery_Base";

import img1 from "../../photos/Wildlife/AR_29 08.23.24.jpg";
import img2 from "../../photos/Wildlife/AR_29 08.24.24.jpg";
import img3 from "../../photos/Wildlife/AR_29 08.26.24.jpg";
import img4 from "../../photos/Wildlife/AR_29 09.06.24.jpg";
import img5 from "../../photos/Wildlife/AR_29 09.07.24.jpg";
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
        img1,
        img2,
        img3,
        img4,
        img5,
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
        img22,
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

