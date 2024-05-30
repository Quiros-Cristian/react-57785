import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className='nav'>
        <ul className='navmenu'>
          <li>
            <NavLink to="/" activeclassname="active" className='nav-link '>inicio</NavLink>
          </li>
          <li>
            <NavLink to="/productos" activeclassname="active" className='nav-link'>Amigurumis</NavLink>
          </li>
          <li>
            <NavLink to="/sonajeros" activeclassname="active" className='nav-link'>Sonajeros</NavLink>
          </li>
          <li>
            <NavLink to="/portachupetes" activeclassname="active" className='nav-link'>Portachupetes</NavLink>    
          </li>
        </ul>
      </nav>
  )
}

export default NavBar