import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { getProduct } from "../data/backend";
import QuantitySelector from "./Cantidad";
import './ProductDetail.css';

const ProductDetailData = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(item, quantity);
    };

    return (
        <div className="main">
            <div>
                <img src={item.img} width={"400px"} height={"400px"} alt="" />
            </div>
            <div>
                <h1>{item.model}</h1>
                <p>Descripción: {item.description}</p>
                <p>Precio unitario: usd${item.price}</p>
                <p>Subtotal: usd${item.price * quantity}</p>
                <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => setQuantity(quantity + 1)}
                    onDecrease={() => setQuantity(quantity - 1)}
                />
                <button className="button-detalles" onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
                <button className="button-volver-tienda">
                    <Link to="/">Volver a la tienda</Link>
                </button>
            </div>
        </div>
    );
};

function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [item, setItem] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(id);
            setItem(product);
        };

        fetchProduct();
    }, [id]);

    return (
        <>
            {Object.keys(item).length > 0 ? (
                <ProductDetailData item={item} addToCart={addToCart} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </>
    );
}

export default ProductDetail;