import React, { useEffect, useRef, useState } from 'react'
import data from "../data/productos.json"
import { Link, useParams } from 'react-router-dom';

const ProductLIst = () => {

  let [producto, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  pedirProductos()
    .then((res) => {
      setProductos(res);
      console.log(producto);
    })
            
  return (
    <div>
      {
        producto ?
    <div>
      {producto.map( producto =>{
        return <Link key={producto.id} to={`/productos/${producto.nombre}`}>
    
        </Link>
        })}
          
              
    </div>
    : 'cargando...'
      }
        

    </div>
  )
}

export default ProductLIst