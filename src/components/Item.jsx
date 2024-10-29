import React from 'react'
import ButtonAgregar from './ButtonAgregar'
import './Item.css'

const Item = ({e, fn, TotalCarrito}) => {
    return (
        <div className='TarjetaProductos'>
            <img src={e.img} width={"400px"} height={"400px"}/>
            <p>
                {e.id}
            </p>
            <p>
                {e.model}
            </p>
            <p>
                ${e.price}
            </p>
            <ButtonAgregar text="Agregar al carrito" fn={fn} TotalCarrito={TotalCarrito} />
        </div>
    )
}

export default Item