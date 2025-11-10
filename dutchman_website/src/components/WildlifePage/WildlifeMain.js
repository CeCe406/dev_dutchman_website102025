import "./WildlifeMain.css";

export default function Main() {
    return (
        <div className='wildlife-main-container'>
            <h1 className='wildlife-overview-title'>
                Overview
            </h1>
            <div className='wildlife-content'>
                <div className='wildlife-left-column'>
                    <p className='wildlife-overview'>
                        Wildlife and avian monitoring surveys for the Dutchman Wetlands began in 2015 and continue on an annual basis. These surveys are conducted to inventory wildlife that are actively utilizing the site.
                        <br></br><br></br>
                        Data collected from these monitoring events is added to annual datasets for species diversity tracking and habitat monitoring. Data is also used for tracking populations, identifying migratory corridors, and informing future management decisions for the Dutchman.
                        <br></br><br></br>
                        Game cameras have also been deployed for monitoring purposes and may be encountered at the site.
                    </p>
                    <h1 className='birds-title'>
                        Birds
                    </h1>
                    <p className='birds-content'>
                        Migratory bird surveys are conducted each spring at various locations throughout the Dutchman Wetlands. A total of 160 of the 433 known bird species in Montana have been observed at the Dutchman Wetlands.
                        <br></br><br></br>
                        Many of these species also breed on-site, including songbirds, waterfowl, and shorebirds. Rare species have also been observed, such as long and short-eared owls, sandhill cranes, and sora. Informational kiosks located at the Dutchman Pond and Highway 48 access points include a bird-species checklist which is available to recreational users.
                        <br></br><br></br>
                        Target areas for bird watching onsite would include the Dutchman Pond, Warm Springs Creek, and any of the wetland/shrubland areas.
                    </p>
                </div>
                <div className='wildlife-right-column'>
                    <div className='mammals-container'>
                        <h1 className='mammals-title'>
                            Mammals
                        </h1>
                        <ul className='mammals-list'>
                            <li>White Tailed Deer</li>
                            <li>Rocky Mountain Elk</li>
                            <li>Moose</li>
                            <li>Mule Deer</li>
                            <li>Otter</li>
                            <li>Beaver</li>
                            <li>Cottontail Rabbits</li>
                            <li>Marmots</li>
                            <li>Ground Squirrel</li>
                        </ul>
                    </div>
                    <div className='wildlife-right-image'></div>
                </div>
            </div>
            <div className='wildlife-sightings'>
                <h1 className='wildlife-sightings-title'>Bird Observations</h1>

            </div>
        </div>
    )
}