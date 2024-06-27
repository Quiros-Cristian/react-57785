import React, { Fragment, useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

  const {carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext)
  
  

  return (
    <div className='carrito'>{carrito.map((prod) => {


      return(
        <div className='contenedorProdCarrito' key={prod.id}>
        <img className='imgCarrito' src={prod.imagen} />
        <h1 className='textCart'>{prod.nombre}:${prod.precio * prod.quantity}</h1>
        <p className='contadorProductos'>{prod.quantity}</p>
        <button className='botonCart' onClick={() => {eliminarProducto(prod)}}>Eliminar Producto</button>
        </div>
      )
    })}
      {
        carrito.length > 0 ? 
        <>
        <h2>Total: ${calcularTotal()}</h2>
        <button className='botonCart' onClick={vaciarCarrito}>Vaciar Carrito</button>
        <button className='botonCart' ><Link to={'/finalizar-compra'}>Finalizar compra</Link></button>
        </>
        : <h2>Carrito vacio</h2>
      }
    </div>
  )
}

export default Carrito