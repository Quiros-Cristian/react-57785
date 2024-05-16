import React from 'react'
import Carrito from './Carrito'

const NavBar = () => {
  return (
    <header className='header'>
        <h1>Lucila Tejidos</h1>
        <nav className='nav'>
            <ul className='navmenu'>
                <li><a className='nav-link' href="#">Muñecos</a></li>
                <li><a className='nav-link' href="#">Portachupetes</a></li>
                <li><a className='nav-link' href="#">Sonajeros</a></li>
                <li><a className='nav-link' href="#">Carteras</a></li>
            </ul>
        </nav>
        <Carrito />
    </header>
  )
}

export default NavBar