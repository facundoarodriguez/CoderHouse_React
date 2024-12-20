import React from "react";
import "./Cantidad.css";

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="quantity-selector">
            <button onClick={onDecrease} disabled={quantity <= 1}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={onIncrease}>+</button>
        </div>
    );
};

export default QuantitySelector;