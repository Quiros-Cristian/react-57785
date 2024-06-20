import React from 'react'
import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li className='links-redes'>
          <a href="https://www.facebook.com/profile.php?id=100094113379082" target='blank'><Facebook /></a>
          </li>
        <li className='links-redes'>
          <a href="https://www.instagram.com/lucila.tejidos_/" target='blank'><Instagram /></a>
          </li>
        <li className='links-redes'>
          <a href="#" target='blank'><Whatsapp /></a>
          </li>
      </ul>
      <div>
        <h3>Todos los derechos reserados@</h3>
      </div>
    </footer>
  )
}

export default Footer