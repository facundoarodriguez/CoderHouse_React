import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map((e) => {
                return (
                    <div key={e.id} className="product">
                        <Item e={e} />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;