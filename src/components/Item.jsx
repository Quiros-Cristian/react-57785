import React, { useEffect, useState } from 'react'
import { Link,} from 'react-router-dom'

const Item = ( { producto } ) => {


  return (
        <div className='productos-container'>
                <div className="producto">
                    <img className='imagenProductos' src={producto.imagen} />
                    <h2>{producto.nombre}</h2>
                    <p>${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                    <Link to={`/item/${producto.id}`}>Ver mas</Link>
                </div>
        </div>
  )
}

export default Item