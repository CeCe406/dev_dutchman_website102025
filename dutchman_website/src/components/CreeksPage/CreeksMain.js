import { useState } from "react";
import "./CreeksMain.css";
import Map from "../map_components/creeks_page_map"

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Main() {
    const [selectedCreekInfo, setSelectedCreekInfo] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const handleCreekClick = ({ info, photos }) => {
        setSelectedCreekInfo({ info, photos });
    };

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
                                                onClick={() => setLightboxOpen(true)}
                                            />
                                        ))}
                                    </div>
                                )}
                                <Lightbox
                                    open={lightboxOpen}
                                    close={() => setLightboxOpen(false)}
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