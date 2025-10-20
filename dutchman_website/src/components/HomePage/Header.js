import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
    return (
        <div className='header'>
            <h1 className='title'>
                The Dutchman Wetlands
            </h1>
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
                    <p className='nav-items'>Hunting & Fishing</p>
                </Link>
                <Link to='/Media'>
                    <p className='nav-items'>Media Collection</p>
                </Link>
            </div>
        </div>
    )
}