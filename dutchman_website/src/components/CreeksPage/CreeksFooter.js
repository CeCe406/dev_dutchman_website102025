import { Link } from 'react-router-dom';
import "./CreeksFooter.css";

export default function Main() {
    return (
        <div className='footer-container'>
            <div className='divider'></div>
            <div className='container'>
                <h1 className='site-name'>The Dutchman Wetlands</h1>
                <div className='footer-nav'>
                    <Link to='/'>
                        <p className='footer-nav-items'>Home</p>
                    </Link>
                    <Link to='/Wildlife'>
                        <p className='footer-nav-items'>Wildlife</p>
                    </Link>
                    <Link to='/Creeks'>
                        <p className='footer-nav-items'>Creeks</p>
                    </Link>
                    <Link to='/Hunting'>
                        <p className='footer-nav-items'>Hunting and Fishing</p>
                    </Link>
                    <Link to='/Media'>
                        <p className='footer-nav-items'>Media Collection</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}