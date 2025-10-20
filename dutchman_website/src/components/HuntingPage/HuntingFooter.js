import { Link } from 'react-router-dom';
import "./HuntingFooter.css";

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='divider'></div>
            <div className='container'>
                <h1 className='site-name'>The Dutchman Wetlands</h1>
                <div className='nav'>
                    <Link to='/'>
                        <p className='nav-items'>Home</p>
                    </Link>
                    <Link to='/Wildlife'>
                        <p className='nav-items'>Wildlife</p>
                    </Link>
                    <Link to='/Creeks'>
                        <p className='nav-items'>Creeks</p>
                    </Link>
                    <Link to='/Hunting'>
                        <p className='nav-items'>Hunting and Fishing</p>
                    </Link>
                    <Link to='/Media'>
                        <p className='nav-items'>Media Collection</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}