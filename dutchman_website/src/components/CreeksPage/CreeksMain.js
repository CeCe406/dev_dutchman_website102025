import { useEffect, useState, useRef } from "react";
import "./CreeksMain.css";
import Map from "../map_components/creeks_page_map"

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function Main() {
    const [selectedCreekInfo, setSelectedCreekInfo] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const lightboxRef = useRef(null);
    const scrollPos = useRef(0);

    const handleCreekClick = ({ info, photos }) => {
        setSelectedCreekInfo({ info, photos });
    };

    const openLightbox = (index) => {
        scrollPos.current = window.scrollY;
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        window.scrollTo(0, scrollPos.current);
    };

    // keep scroll position when user closes lighboxes of creek photos
    useEffect(() => {
        const target = lightboxRef.current;
        if (lightboxOpen && target) disableBodyScroll(target);
        else if (target) enableBodyScroll(target);
        return () => {
            if (target) enableBodyScroll(target);
        };
    }, [lightboxOpen]);

    return (
        <div className='creeks-main-container'>
            <div className='creeks-content'>
                <div className='creeks-left-column'>
                    <Map onCreekClick={handleCreekClick} />
                </div>

                <div className='creeks-right-column'>
                    <h1 className='creeks-overview-title'>Creek Information</h1>
                    <div className='creeks-container'>
                        {selectedCreekInfo ? (
                            <div className='creek-info'>
                                <p>{selectedCreekInfo.info}</p>

                                {selectedCreekInfo.photos?.length > 0 && (
                                    <div className="creek-photos-thumbs">
                                        {selectedCreekInfo.photos.map((photo, i) => (
                                            <img
                                                key={i}
                                                src={`${process.env.PUBLIC_URL}/creek_photos/${photo}`}
                                                alt={`Creek ${i + 1}`}
                                                onClick={() => openLightbox(i)}
                                            />
                                        ))}
                                    </div>
                                )}

                                <Lightbox
                                    ref={lightboxRef}
                                    open={lightboxOpen}
                                    close={closeLightbox}
                                    index={lightboxIndex}
                                    slides={
                                        selectedCreekInfo.photos?.map((p) => ({ src: `${process.env.PUBLIC_URL}/creek_photos/${p}` })) || []
                                    }
                                />
                            </div>
                        ) : (
                            <p>Click a creek on the map to read more information.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}