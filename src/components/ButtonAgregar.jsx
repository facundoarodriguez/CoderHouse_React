import React from 'react';

const ButtonAgregar = ({ text, fn, item }) => {
    return (
        <button onClick={() => fn(item)}>
            {text}
        </button>
    );
};

export default ButtonAgregar;