import React, { useState } from 'react';
import ButtonAgregar from './ButtonAgregar';
import './Item.css';

const Item = ({ e, fn, TotalCarrito }) => {
    // Estado para controlar la visibilidad de los detalles
    const [showDetails, setShowDetails] = useState(false);

    // Función para alternar la visibilidad
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className='TarjetaProductos'>
            <img src={e.img} width={"400px"} height={"400px"} alt={e.model} />
            <p>{e.id}</p>
            <p>{e.model}</p>
            <p>${e.price}</p>
            <ButtonAgregar text="Agregar al carrito" fn={fn} TotalCarrito={TotalCarrito} />

            {/* Botón para alternar detalles */}
            <button className="view-details-btn" onClick={toggleDetails}>
                {showDetails ? "Cerrar detalles" : "Ver detalles"}
            </button>

            {/* Sección de detalles desplegable */}
            <div className={`details-section ${showDetails ? 'show' : ''}`}>
                <p>Descripción: {e.description}</p>
                <p>Color: {e.color}</p>
                <p>Cuerpo: {e.cuerpo}</p>
                <p>Mastil: {e.mastil}</p>
                <p>Diapasón: {e.diapason}</p>
                <p>Cejuela: {e.cejuela}</p>
                <p>Puente: {e.puente}</p>
                <p>Tuners: {e.tuners}</p>
            </div>
        </div>
    );
};

export default Item;
