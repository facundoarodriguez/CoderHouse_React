// src/components/NavBar.jsx
import './NavBar.css'; // Importa el archivo CSS para NavBar
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar({TotalCarrito}) {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/market" className="nav-link">Market</Link>
                </li>
            </ul>
            <h2 className='title'>TIENDA STAR</h2>
            <CartWidget TotalCarrito={TotalCarrito}/>
        </nav>
    );
}

export default NavBar;
