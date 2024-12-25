import React, { useState } from 'react';
import './BuyerModal.css';

const BuyerInfoModal = ({ onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, email });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Ingrese sus datos</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-name'>
                        <label htmlFor="name">Nombre: </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Correo: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button className='submit' type="submit">Enviar y Comprar</button>
                </form>
            </div>
        </div>
    );
};

export default BuyerInfoModal;