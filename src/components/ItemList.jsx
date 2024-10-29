import React from 'react'
import Item from './Item'

const ItemList = ({products, fn, TotalCarrito}) => {

    return (
        <div>
            {products.map((e) => {
                return(
                    <Item e={e} fn={fn} TotalCarrito={TotalCarrito}/>
                )
            })}
        </div>
    )
}

export default ItemList