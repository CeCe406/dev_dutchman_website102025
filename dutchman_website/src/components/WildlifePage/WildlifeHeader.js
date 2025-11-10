import { Link } from 'react-router-dom';
import "./WildlifeHeader.css";

export default function Header() {
    return (
        <div className='wildlife-header'>
            <div className='wildlife-dimmer'>
                <div className='wildlife-top'>
                    <h1 className='wildlife-site-title'>
                        The Dutchman Website
                    </h1>
                    <div className='wildlife-nav'>
                        <Link to='/'>
                            <p className='wildlife-nav-items'>Home</p>
                        </Link>
                        <Link to='/Wildlife'>
                            <p className='wildlife-nav-items'>Wildlife</p>
                        </Link>
                        <Link to='/Creeks'>
                            <p className='wildlife-nav-items'>Creeks</p>
                        </Link>
                        <Link to='/Hunting'>
                            <p className='wildlife-nav-items'>Hunting & Fishing</p>
                        </Link>
                        <Link to='/Media'>
                            <p className='wildlife-nav-items'>Media Collection</p>
                        </Link>
                    </div>
                </div>

                <div className='wildlife-page-title-container'>
                    <h1 className='wildlife-page-title'>
                        Wildlife of the Wetlands
                    </h1>
                    <p className='wildlife-subtitle'>
                        The Dutchman Wetlands are home to a variety of wildlife including moose, deer, coyote, and numerous bird species.
                    </p>
                </div>
            </div>
        </div>
    )
}