import React from 'react'
import Logo from "../assets/img/Luxila.png"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
      <img className='logoNotFound' src={Logo} />
      <h1>404</h1>
      <p>pagina no encontrada</p>
      <button className='botonVolver'><Link to={'/'}>Volver a inicio</Link></button>
    </div>
  )
}

export default NotFound