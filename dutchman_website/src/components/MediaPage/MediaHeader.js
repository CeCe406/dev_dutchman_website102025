import { Link } from 'react-router-dom';
import "./MediaHeader.css";

export default function Header() {
    return (
        <div className='media-header'>
            <h1 className='media-title'>
                The Dutchman Wetlands
            </h1>
            <div className='media-nav'>
                <Link to='/'>
                    <p className='media-nav-items'>Home</p>
                </Link>
                <Link to='/Wildlife'>
                    <p className='media-nav-items'>Wildlife</p>
                </Link>
                <Link to='/Creeks'>
                    <p className='media-nav-items'>Creeks</p>
                </Link>
                <Link to='/Hunting'>
                    <p className='media-nav-items'>Hunting & Fishing</p>
                </Link>
                <Link to='/Media'>
                    <p className='media-nav-items'>Media Collection</p>
                </Link>
            </div>
        </div>
    )
}