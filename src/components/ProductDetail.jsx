import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { getSingleProduct } from "../firebase/firebase";
import QuantitySelector from "./Cantidad";
import "./ProductDetail.css";

const ProductDetailData = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(item, quantity);
    };

    return (
        <div className="main">
            <div>
                <img src={item.img} width={"400px"} height={"400px"} alt={item.model} />
            </div>
            <div>
                <h1>{item.model}</h1>
                <p>Descripción: {item.description}</p>
                <p>Precio unitario: usd${item.price}</p>
                <p>Subtotal: usd${item.price * quantity}</p>
                <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => setQuantity(quantity + 1)}
                    onDecrease={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
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
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await getSingleProduct(id);
                if (product) {
                    setItem(product);
                } else {
                    console.error("Producto no encontrado en Firestore.");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <p>Cargando producto...</p>;
    }

    return (
        <>
            {item ? (
                <ProductDetailData item={item} addToCart={addToCart} />
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </>
    );
}

export default ProductDetail;