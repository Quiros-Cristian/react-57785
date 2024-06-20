import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

  const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

  return (
    <div className='carrito'>
      {carrito.map((prod, index) => <h2 key={index}>{prod.nombre}:${prod.precio}</h2>)}
      {
        carrito.length > 0 ? 
        <>
        <h2>Total: ${calcularTotal()}</h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
        : <h2>Carrito vacio</h2>
      }
    </div>
  )
}

export default Carrito