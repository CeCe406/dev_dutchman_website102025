import { Link } from 'react-router-dom';
import "./CreeksHeader.css";

export default function Header() {
    return (
        <div className='creeks-header'>
            <div className='creeks-dimmer'>
                <div className='creeks-top'>
                    <h1 className='creeks-site-title'>
                        The Dutchman Wetlands
                    </h1>
                    <div className='creeks-nav'>
                        <Link to='/'>
                            <p className='creeks-nav-items'>Home</p>
                        </Link>
                        <Link to='/Wildlife'>
                            <p className='creeks-nav-items'>Wildlife</p>
                        </Link>
                        <Link to='/Creeks'>
                            <p className='creeks-nav-items'>Creeks</p>
                        </Link>
                        <Link to='/Hunting'>
                            <p className='creeks-nav-items'>Hunting & Fishing</p>
                        </Link>
                        <Link to='/Media'>
                            <p className='creeks-nav-items'>Media Collection</p>
                        </Link>
                    </div>
                </div>

                <div className='creeks-page-title-container'>
                    <h1 className='creeks-page-title'>
                        Creeks In the Dutchman Wetlands
                    </h1>
                    <p className='creeks-subtitle'>
                        Dutchman Creek, Warm Springs Creek, and Lost Creek
                    </p>
                </div>
            </div>
        </div>
    )
}