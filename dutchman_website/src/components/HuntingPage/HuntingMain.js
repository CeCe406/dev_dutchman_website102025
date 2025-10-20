import "./HuntingMain.css";

export default function Main() {
    return(
        <div className='hunting-main-container'>
            <div className='hunting-title-container'>
                <div className='hunting-main-title'>
                    Hunting & Fishing
                </div>
                <div className='hunting-main-subtitle'>
                    The Dutchman Wetlands provides significant opportunities for hunting and fishing enthusiasts and hobbyists.
                </div>
            </div>
            <div className='hunting-images-container'>
                <div className='hunting-image-1'></div>
                <div className='hunting-image-2'></div>
                <div className='hunting-image-3'></div>
            </div>
            <div className='hunting-body'>
                The Dutchman Wetlands is part of Montana Fish, Wildlife & Parks (Montana FWP) Block Management Access Program.
                <br></br><br></br>
                Therefore, hunters can enjoy both archery and rifle hunting within the Dutchman Wetlands. Big game species observed onsite include Elk, Mule Deer, Whitetail Deer, and Moose. Additionally, waterfowl and upland game bird can be pursued, with the majority of migratory waterfowl species utilizing ponds and streams in and around the area. Upland game bird opportunities are limited, but ring-necked pheasant and Hungarian partridge have sporadically been observed at the site.
                <br></br><br></br>
                Please visit the Montana FWP’s website for additional information regarding season dates, closures, and general regulations regarding hunting information. Links to important information on Montana FWP’s hunting page is provided here:
                <br></br>
                <a href='https://fwp.mt.gov/hunt'>Hunt In Montana | Montana FWP</a>
                <br></br>
                <a href='https://fwp.mt.gov/gis/maps/huntPlanner/?species=muledeer&showOwn=true&showRef=true'>MT FWP Hunt Planner</a>
                <br></br>
                <a href='https://fwp.mt.gov/binaries/content/assets/fwp/gisresources/hunting/hunteraccess/blockman/region2/maps/49_ueland_ranch_arco_2025.pdf'>MT FWP BMA Rules</a>
            </div>
            <div className='hunting-images-container'>
                <div className='fishing-image-1'></div>
                <div className='fishing-image-2'></div>
                <div className='fishing-image-3'></div>
            </div>
            <div className='fishing-body'>
                Both Lost Creek and Dutchman Creek are home to Montana’s State Fish, the Westslope Cutthroat Trout.
                <br></br><br></br>
                Lost Creek and Warm Springs Creek are also home to several other kinds of common Montana fish species including; brook trout, brown trout, suckers, mountain whitefish, red side shiner, and slimy sculpin. In addition to these, Warm Springs Creek can be habitat for rainbow trout and bull trout.
                <br></br><br></br>
                Please be sure to check all appropriate regulations with Montana Fish, Wildlife and Parks (Montana FWP) prior to Fishing onsite at the Dutchman. Montana State Fishing rules and regulations can be found here:
                <br></br>
                <a href='https://fwp.mt.gov/fish'>FishMT | Montana FWP</a>
                <br></br>
                <a href='https://myfwp.mt.gov/fishMT/explore'>MT FWP Fishing Planner</a>
                <br></br>
                <a href='https://fwp.mt.gov/fish/regulations'>MT FWP Fishing Regulations</a>
            </div>
        </div>
    )
}