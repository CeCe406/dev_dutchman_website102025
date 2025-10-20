import GalleryWildlife from "./Gallery_Wildlife";
import GalleryCreeks from "./Gallery_Creeks";
import GalleryDronePics from "./Gallery_DronePics";
import GalleryDroneVids from "./Gallery_DroneVids";
import GalleryAll from "./Gallery_All";
import "./MediaMain.css";

export default function Main() {
    return(
        <div className='media-main-container'>
            <div className='media-title-container'>
                <h1 className='media-main-title'>Media</h1>
                <p className='media-main-subtitle'>
                     The collection of images and videos related to the Dutchman Wetlands
                </p>
            </div>
            {/* <div className='media-divider'></div> */}
            <div className='media-wildlife-container'>
                <h1 className='media-main-title'>Wildlife</h1>
                <div className='media-gallery-parent-container'>
                    <GalleryWildlife />
                </div>
            </div>
            <div className='media-divider'></div>
            <div className='media-creeks-container'>
                <h1 className='media-main-title'>Creeks</h1>
                <div className='media-gallery-parent-container'>
                    <GalleryCreeks />
                </div>
            </div>
            <div className='media-divider'></div>
            <div className='media-dronepics-container'>
                <h1 className='media-main-title'>Drone Overhead View - Pictures</h1>
                <div className='media-gallery-parent-container'>
                    <GalleryDronePics />
                </div>
            </div>
            <div className='media-divider'></div>
            <div className='media-dronevids-container'>
                <h1 className='media-main-title'>Drone Overhead View - Video</h1>
                <div className='media-gallery-parent-container'>
                    <GalleryDroneVids />
                </div>
            </div>
            <div className='media-divider'></div>
            <div className='media-all-container'>
                <h1 className='media-main-title'>All Media</h1>
                <div className='media-gallery-parent-container'>
                    <GalleryAll />
                </div>
            </div>
        </div>
    )
}