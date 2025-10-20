import "./Main.css";

export default function Main() {
    return(
        <div className='main-container'>
            <h1 className='background-title'>
                Background
            </h1>
            <div className='content'>
                <div className='left-column'>
                    <p className='habitats'>
                        <b>Habitats</b>
                        The Dutchman Wetlands represents one of the largest, uninterrupted, wetland/riparian habitats in the Upper Clark Fork River Basin.
                        <br></br><br></br>
                        The Dutchman Wetlands contains multiple springs and seeps, and also includes three major surface water streams: Lost Creek, Dutchman Creek, and portions of Warm Springs Creek.
                    </p>
                    <div className='left-image'></div>
                    <p className='hobbies'>
                        <b>Hobbies</b>
                        Non-motorized, recreational access to the Dutchman Wetlands is available for hunters, hikers, fisherman, and general outdoor enthusiasts.
                        <br></br><br></br>
                        Public access is permitted from the following access points; Highway 48 Trailhead (located on Atlantic Richfield property at an existing turnout on Highway 48- south side), Dutchman Pond Trailhead (north side), Montana FWP Warm Springs Trailhead located on the east side of the property just west of the Warm Springs Hospital facility.
                    </p>
                </div>
                <div className='right-column'>
                    <div className='right-image'></div>
                    <p className='history'>
                        <b>History</b>
                        The site covers about 3,447 acres and is part of the greater Anaconda Smelter National Priorities List (NPL) Site.
                        <br></br><br></br>
                        Although the Dutchman is part of the Anaconda Smelter NPL Site, no historical mining, smelting, or milling activities has ever occurred within the Dutchman boundary.
                        <br></br><br></br>
                        Historically, the site has been utilized as additional pasture for cattle grazing and source of irrigation and stock water. Surface water was captured using a variety of structures, the most prominent being the pump-house structure, near Warm Springs Creek, and the Dutchman Pond located on the north part of the property.
                        <br></br><br></br>
                        Atlantic Richfield acquired the Dutchman Property in 2004 and has since implemented various management strategies to protect the existing wetlands habitat within the site, including the removal of routine cattle grazing.
                    </p>
                </div>
            </div>
        </div>
    )
}