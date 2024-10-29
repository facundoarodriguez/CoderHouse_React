import './ButtonVaciar.css';

const ButtonVaciar = ({ text, fn2 }) => {
    const vaciar = () => {
        fn2(0); // Restablece TotalCarrito a 0
    };

    return (
        <button onClick={vaciar} className="boton2">
        {text}
        </button>
    );
};

export default ButtonVaciar;
