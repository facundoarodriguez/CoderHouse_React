import React, { useState, useEffect } from 'react';
import './DolarApi.css';

function DolarApi() {
    const [Dolar, setDolar] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch('https://dolarapi.com/v1/dolares/blue');
                if (!response.ok) {
                    throw new Error('No se pudo traer la información');
                }
                const data = await response.json();
                setDolar(data);
            } catch (error) {
                setError(error.message);
            }
        };
        obtenerDatos();
    }, []);

    return (
        <div className="dolar-api">
            <h1 className="dolar-title">Cotización Dólar Blue</h1>
            {error && <p className="error-message">Error: {error}</p>}
            {Dolar && (
                <div className="producto-item">
                    <h2>Valor de Compra: ${Dolar.compra}</h2>
                    <h2>Valor de Venta: ${Dolar.venta}</h2>
                </div>
            )}
        </div>
    );
}

export default DolarApi;


