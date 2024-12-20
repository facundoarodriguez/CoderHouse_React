import React, { useEffect, useState } from 'react';
import { getProducts } from '../data/backend';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(resolve => {
                const filteredProducts = category 
                    ? resolve.filter(product => product.category === category) 
                    : resolve;
                setProducts(filteredProducts);
            })
            .catch(error => console.error("Error al obtener productos:", error))
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <>
            <div className='body'>
                <div>
                    <h1>{category ? `${category}` : "Todos nuestros productos"}</h1>
                </div>
                {products.length > 0 ? (
                    <ItemList products={products} />
                ) : (
                    <p>No hay productos disponibles para esta categoría.</p>
                )}
            </div>
        </>
    );
};

export default ItemListContainer;