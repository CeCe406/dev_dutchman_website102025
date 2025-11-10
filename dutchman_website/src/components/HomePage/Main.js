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
                        The Dutchman Wetlands is one of the largest, uninterrupted, wetland/riparian habitats in the Upper Clark Fork River Basin.
                        <br></br><br></br>
                        The Dutchman Wetlands contains multiple springs and seeps, and also includes three major surface water streams: Lost Creek, Dutchman Creek, and portions of Warm Springs Creek.
                    </p>
                    <div className='left-image'></div>
                    <p className='hobbies'>
                        <b>Hobbies</b>
                        Non-motorized, recreational access to the Dutchman Wetlands is available for hunters, hikers, fisherman, and general outdoor enthusiasts.
                        <br></br><br></br>
                        Public access is permitted from the following access points: Highway 48 Trailhead (turnout off MT Hwy 48); Dutchman Pond Trailhead (north side), and the Montana FWP Warm Springs Trailhead (located on the east side of the property just west of the Warm Springs Hospital facility).
                    </p>
                </div>
                <div className='right-column'>
                    <div className='right-image'></div>
                    <p className='history'>
                        <b>History</b>
                        The site covers about 3,447 acres and is part of the greater Anaconda Smelter Superfund Site.
                        <br></br><br></br>
                        Although the Dutchman is part of the Anaconda Smelter Superfund Site, no historical mining, smelting, or milling activities have ever occurred within the Dutchman boundary.
                        <br></br><br></br>
                        Historically, the site has been utilized as additional pasture for cattle grazing and source of irrigation and stock water. Surface water was captured using a variety of structures, the most prominent being the pump-house structure, near Warm Springs Creek, and the Dutchman Pond located on the north part of the property.
                        <br></br><br></br>
                        Atlantic Richfield Company acquired the Dutchman Property in 2004 and has since implemented various strategies to protect the existing wetlands habitat and allow public access for recreational activities.
                    </p>
                </div>
            </div>
        </div>
    )
}