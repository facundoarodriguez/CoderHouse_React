import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext/CartContext';
import QuantitySelector from '../../components/Cantidad/Cantidad';
import Swal from 'sweetalert2';
import './CartPage.css';
import BuyerInfoModal from '../../components/BuyerModal/BuyerModal';
import { sendOrder } from '../../firebase/firebase';

const CartPage = () => {
    const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
    console.log(cart);

    const [isModalOpen, setModalOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);

    const handleCheckout = () => {
        console.log(isModalOpen);
        if (cart.length !== 0) {
            setModalOpen(true);
        } else {
            Swal.fire({
                title: '¡No hay nada que pagar!',
                text: 'Debes seleccionar al menos un producto',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    const handleBuyerInfoSubmit = (buyerInfo) => {
        const order = {
            buyer: buyerInfo,
            items: cart.map((item) => ({
                id: item.id,
                model: item.model,
                quantity: item.quantity,
                price: item.price,
            })),
            total: cartTotal,
            date: new Date().toISOString(),
        };

        sendOrder(order)
            .then((orderId) => {
                setOrderDetails({
                    id: orderId,
                    buyer: buyerInfo,
                    items: order.items,
                    total: order.total,
                });
                clearCart();
            })
            .catch((error) => {
                console.error('Error al guardar la orden:', error);
            });

        setModalOpen(false);
    };

    return (
        <div className="cart-page">
            <h1>Tu Carrito</h1>
            {orderDetails ? (
                <div className="order-summary">
                    <h2>Tu compra ha sido realizada con éxito!</h2>
                    <h3> A continuación verás los detalles de tu orden:</h3>
                    <p><strong>ID de Orden:</strong> {orderDetails.id}</p>
                    <p><strong>Comprador:</strong> {orderDetails.buyer.name} ({orderDetails.buyer.email})</p>
                    <h3>Productos:</h3>
                    <ul>
                        {orderDetails.items.map((item, index) => (
                            <li key={index}>
                                {item.model} - Cantidad: {item.quantity} - Precio Unitario: ${item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${orderDetails.total}</h3>
                    <button className="back-button">
                        <Link to="/">Volver al inicio</Link>
                    </button>
                    <p>Gracias por confiar en Star Guitars!</p>
                </div>
            ) : (
                <>
                    {cart.length === 0 ? (
                        <p>Aún no tienes productos en tu carrito.</p>
                    ) : (
                        <div>
                            {cart.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <img src={item.img} alt={item.model} />
                                    <div className="resume">
                                        <p>{item.model}</p>
                                        <p>Precio unitario: ${item.price}</p>
                                        <p>Subtotal: ${item.price * item.quantity}</p>
                                        <QuantitySelector
                                            quantity={item.quantity}
                                            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                                            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                                        />
                                        <button className="delete-button" onClick={() => removeFromCart(item.id)}>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-total">
                                <h3>Total: usd${cartTotal}</h3>
                            </div>
                        </div>
                    )}
                    <button className="checkout-button" onClick={handleCheckout}>
                        Proceder a la compra
                    </button>
                    <button className="back-button">
                        <Link to="/">Volver al inicio</Link>
                    </button>
                </>
            )}

            {isModalOpen && (
                <BuyerInfoModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleBuyerInfoSubmit}
                />
            )}
        </div>
    );
};

export default CartPage;