import React, { useContext } from 'react'
import { CartCheck } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext)

  return (
    <Link  to="/carrito">
      <CartCheck color="red" />{calcularCantidad()}
    </Link>
  )
}

export default CartWidget