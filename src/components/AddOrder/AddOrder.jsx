import { useState } from "react";
import { sendOrder } from "../firebase"; // Asegúrate de importar la función

export default function AddOrders() {
    const [orderId, setOrderId] = useState(null);
    const [buyerInfo, setBuyerInfo] = useState({ email: "", name: "" });
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    // Esta función sería la que se activa cuando el usuario haga clic en "Enviar"
    const handleClick = () => {
        const newOrder = {
            buyer: buyerInfo,
            items: items, // Aquí puedes agregar los productos seleccionados del carrito
            total: total, // El total de la compra
        };

        sendOrder(newOrder)
            .then((id) => {
                setOrderId(id); // Establece el ID de la orden cuando se haya creado correctamente
                alert("¡Orden realizada con éxito! ID de la orden: " + id);
            })
            .catch((error) => {
                console.error("Error al realizar la orden: ", error);
            });
    };

    return (
        <div>
            <h2>Formulario de Compra</h2>
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={buyerInfo.name}
                    onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={buyerInfo.email}
                    onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })}
                />
            </div>

            {/* Aquí deberías tener alguna forma de agregar los productos al carrito */}
            <div>
                <button onClick={handleClick}>Enviar Orden</button>
            </div>

            {orderId && <p>ID de la orden: {orderId}</p>}
        </div>
    );
}