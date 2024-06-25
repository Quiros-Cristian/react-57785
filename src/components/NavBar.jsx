import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import category from "../data/categorias.json"
import Logo from "../assets/img/Luxila.png"
import CartWidget from './header/CartWidget'

const NavBar = () => {


  return (

      <nav class="navbar navbar-expand-lg bg-body-tertiary nav">
        <div class="container-fluid">
        <NavLink to={'/'} className={'link-texto'} ><h1 className="logoTexto"><img className="logo" src={Logo} />LucilaTejidos</h1></NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navmenu">
              <li>
                <NavLink to="/" activeclassname="active" className='nav-link '>Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/productos" activeclassname="active" className='nav-link'>Productos</NavLink>
              </li>
              {
                category.map((category) => {
                  return (
                    <li key={category.id}>
                      <NavLink to={`/category/${category.id}`} activeclassname="active" className='nav-link'>{category.nombre}</NavLink>
                    </li>
                  )
                })
              }
            <CartWidget />
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar