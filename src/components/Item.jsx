import React, { useContext, useEffect, useState } from 'react'
import { Link,} from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Item = ( { producto } ) => {

  const { agregarAlCarrito } = useContext(CartContext)

  return (
        <div className='productos-container'>
                <div className="producto">
                  <div className='imdiv'>
                    <img className='imagenProductos' src={producto.imagen} />
                  </div>
                    <h3>{producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                    <div className='divBotonesCards'>
                    <button className='botonVerMas'><Link to={`/item/${producto.id}`}>Ver mas</Link></button>
                    <button className='botonCardsItem' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                    </div>
                </div>
        </div>
  )
}

export default Item