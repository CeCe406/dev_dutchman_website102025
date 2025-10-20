import { Link } from 'react-router-dom';
import "./HuntingHeader.css";

export default function Header() {
    return (
        <div className='hunting-header'>
            <h1 className='hunting-title'>
                The Dutchman Wetlands
            </h1>
            <div className='hunting-nav'>
                <Link to='/'>
                    <p className='hunting-nav-items'>Home</p>
                </Link>
                <Link to='/Wildlife'>
                    <p className='hunting-nav-items'>Wildlife</p>
                </Link>
                <Link to='/Creeks'>
                    <p className='hunting-nav-items'>Creeks</p>
                </Link>
                <Link to='/Hunting'>
                    <p className='hunting-nav-items'>Hunting & Fishing</p>
                </Link>
                <Link to='/Media'>
                    <p className='hunting-nav-items'>Media Collection</p>
                </Link>
            </div>
        </div>
    )
}