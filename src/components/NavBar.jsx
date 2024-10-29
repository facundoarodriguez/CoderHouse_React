// src/components/NavBar.jsx
import './NavBar.css'; // Importa el archivo CSS para NavBar
import CartWidget from './CartWidget';

function NavBar({TotalCarrito}) {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Market</a>
                </li>
            </ul>
            <CartWidget TotalCarrito={TotalCarrito}/>
        </nav>
    );
}

export default NavBar;
