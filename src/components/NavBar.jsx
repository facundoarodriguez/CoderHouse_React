import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/telecaster" className="nav-link">Telecaster</Link>
                </li>
                <li className="nav-item">
                    <Link to="/stratocaster" className="nav-link">Stratocaster</Link>
                </li>
                <li className="nav-item">
                    <Link to="/jazzmaster" className="nav-link">Jazzmaster</Link>
                </li>
            </ul>
            <h2 className='title'>STAR GUITARS</h2>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;
