import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import QuantitySelector from './Cantidad';
import Swal from 'sweetalert2';
import './CartPage.css';

const CartPage = () => {
    const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

    const handleCheckout = () => {
        if (cart.length !== 0) {
            Swal.fire({
                title: '¡Compra realizada!',
                text: 'Gracias por tu compra. Te enviaremos un mail a la brevedad con el número de órden de compra.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                clearCart();
        }); }
        else {
            Swal.fire({
                title: '¡No hay nada que pagar!',
                text: 'Debes seleccionar al menos un producto',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    };

    return (
        <div className="cart-page">
            <h1>Tu Carrito de Compras</h1>
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
            <button className="checkout-button" onClick={handleCheckout}>Proceder a la compra</button>
            <button className="back-button"><Link to="/">Volver al inicio</Link></button>
        </div>
    );
};

export default CartPage;