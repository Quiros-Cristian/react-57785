import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {

    const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div className='divdetail'>
            <div>
                <img src={producto.imagen} />
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
                <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail