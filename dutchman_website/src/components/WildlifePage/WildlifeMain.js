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
                        In 2015, Atlantic Richfield began completing annual wildlife and avian monitoring surveys for the Dutchman Wetlands to take inventory of wildlife that are actively utilizing the site.
                        <br></br><br></br>
                        The goal of wildlife data collection is to add to annual datasets for mammal species and their subsequent habitat that will continue to be used for tracking populations, identifying migratory corridors, and informing future management decisions for the Dutchman.
                        <br></br><br></br>
                        Game cameras have also be deployed for monitoring purposes and may be encountered at the site.
                    </p>
                    <h1 className='birds-title'>
                        Birds
                    </h1>
                    <p className='birds-content'>
                        Atlantic Richfield conducts annual, migratory bird surveys each spring at various locations through the Dutchman Wetlands. A total of 160 out of the 433 known bird species in Montana have been observed at the Dutchman Wetlands.
                        <br></br><br></br>
                        Many of these species also breed on-site, including numerous songbirds, waterfowl, and shorebird species. Rare species have also been observed, such as long and short-eared owls, sandhill cranes, and sora. Informational kiosks are present at the Dutchman Pond and Highway 48 access points include a bird-species checklist that is available at the kiosks to recreational users.
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