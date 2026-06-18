import React from "react";
import SiteHeader from "../siteHeader";
import bgImage from "../../photos/Wildlife/AR_29 08.26.24.jpg";

export default function Header() {
    return (
        <SiteHeader

            title="The Dutchman Wetlands"
            backgroundImage=`url(${bgImage})`
    pageTitle = "Wildlife of the Wetlands"
    subtitle = "The Dutchman Wetlands are home to a variety of wildlife including moose, deer, coyote, and numerous bird species."
    navItems = {
        [
        { label: "Home", to: "/" },
        { label: "Wildlife", to: "/Wildlife" },
        { label: "Creeks", to: "/Creeks" },
        { label: "Hunting & Fishing", to: "/Hunting" },
        { label: "Media Collection", to: "/Media" },

            ]}

        />
    );
}
// <div className='wildlife-header'>
//     <div className='wildlife-dimmer'>
//         <div className='wildlife-top'>
//             <h1 className='wildlife-site-title'>
//                 The Dutchman Wetlands
//             </h1>
//             <div className='wildlife-nav'>
//                 <Link to='/'>
//                     <p className='wildlife-nav-items'>Home</p>
//                 </Link>
//                 <Link to='/Wildlife'>
//                     <p className='wildlife-nav-items'>Wildlife</p>
//                 </Link>
//                 <Link to='/Creeks'>
//                     <p className='wildlife-nav-items'>Creeks</p>
//                 </Link>
//                 <Link to='/Hunting'>
//                     <p className='wildlife-nav-items'>Hunting & Fishing</p>
//                 </Link>
//                 <Link to='/Media'>
//                     <p className='wildlife-nav-items'>Media Collection</p>
//                 </Link>
//             </div>
//         </div>

//         <div className='wildlife-page-title-container'>
//             <h1 className='wildlife-page-title'>
//                 Wildlife of the Wetlands
//             </h1>
//             <p className='wildlife-subtitle'>
//                 The Dutchman Wetlands are home to a variety of wildlife including moose, deer, coyote, and numerous bird species.
//             </p>
//         </div>
//     </div>
// </div>
