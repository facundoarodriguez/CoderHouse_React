import React, { useEffect, useState } from 'react';
import { getProducts } from '../data/backend';
import ItemList from './ItemList';

const ItemListContainer = ({ mensaje, fn, TotalCarrito }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(resolve => setProducts(resolve))
        .catch(reject => console.error(reject))
        .finally(console.log("Promesa resuelta"))
    }, [] )
    
    return (
    <>
        <div>{mensaje}</div>
        {<ItemList products={products} fn={fn} TotalCarrito={TotalCarrito}/>}
    </>
    );
};

export default ItemListContainer;
