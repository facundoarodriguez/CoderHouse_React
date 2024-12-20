import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.id === id ? { ...item, quantity } : item
            );
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        setCartTotal(0);
    };

    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
    };

    React.useEffect(() => {
        calculateTotal();
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, cartTotal, addToCart, updateQuantity, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
