import './ButtonAgregar.css';

const ButtonAgregar = ({ text, fn, TotalCarrito }) => {
    const sumar = () => {
        const nuevoTotal = TotalCarrito + 1;
        fn(nuevoTotal);
    };

    return (
        <button onClick={sumar} className="boton1">
        {text}
        </button>
    );
};

export default ButtonAgregar;


