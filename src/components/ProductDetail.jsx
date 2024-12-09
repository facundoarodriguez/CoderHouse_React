// ProductDetail.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../data/backend";
import ButtonAgregar from "./ButtonAgregar";
import './ProductDetail.css';


const ProductDetailData = ({ item, fn, TotalCarrito }) => {
    return (
        <div className="main">
            <div>
                <img src={item.img} width={"400px"} height={"400px"} alt="" />
            </div>
            <div>
                <h1>Modelo {item.model}</h1>
                <p>ID: {item.id}</p>
                <p>Descripción: {item.description}</p>
                <p>Precio: ${item.price}</p>
                <button className="button-volver">
                    <Link to="/market">Volver a la tienda</Link>
                </button>
                <ButtonAgregar text="Agregar al carrito" fn={fn} TotalCarrito={TotalCarrito} />
            </div>
        </div>
    );
};


function ProductDetail({ fn, TotalCarrito }) {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(getProduct(id));
    }, [id]);

    return (
        <>
            {Object.keys(item).length > 0 ? (
                <ProductDetailData item={item} fn={fn} TotalCarrito={TotalCarrito} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </>
    );
}

export default ProductDetail;
