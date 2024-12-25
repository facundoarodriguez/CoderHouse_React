import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css";

const Item = ({ e }) => {
    return (
        <div className='TarjetaProductos'>
            <img src={e.img} width={"400px"} height={"400px"} alt={e.model} />
            <p>{e.model}</p>
            <p>${e.price}</p>
            <button className='button-detalles'>
                <Link to={`/product/${e.id}`}>Más detalles</Link>
            </button>
        </div>
    );
};

export default Item;