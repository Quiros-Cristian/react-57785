import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import category from "../data/categorias.json"

const NavBar = () => {

  console.log(category)

  return (
      <nav className='nav'>
        <ul className='navmenu'>
          <li>
            <NavLink to="/" activeclassname="active" className='nav-link '>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/productos" activeclassname="active" className='nav-link'>Productos</NavLink>
          </li>
          {
            category.map((category)=>{
              return(
              <li key={category.id}>
                <NavLink to={`/category/${category.id}`} activeclassname="active" className='nav-link'>{category.nombre}</NavLink>
              </li>
              )
            })
          }
        </ul>
      </nav>
  )
}

export default NavBar