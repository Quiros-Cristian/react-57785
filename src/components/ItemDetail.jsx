import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {

    const { agregarAlCarrito } = useContext(CartContext);

    return (
        <div className='divDetail'>
                <div className="productosDetail">
                  <div className='imgdivDetail'>
                    <img className='imagenDetail' src={producto.imagen} />
                  </div>
                    <h3>{producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                    <div className='divBotonesCards'>
                    <button className='botonCardsItem' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail