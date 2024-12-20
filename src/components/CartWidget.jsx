import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useCart } from './CartContext';

const CartWidget = () => {
    const { cart } = useCart();

    return (
        <Link to="/cart">
            <div className="cartWidget"><p>Tu carrito</p><MdOutlineShoppingBag />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </div>
        </Link>
    );
};

export default CartWidget;