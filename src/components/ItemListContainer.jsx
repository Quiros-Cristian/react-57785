import React, { useEffect, useState } from "react";
import data from "../data/productos.json"
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {

  let [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(()=> {
    pedirProductos()
      .then((res) => {
        setProductos(res);
      })

  })

  return (
    <div className="productos-container">
      <div className="productos-grilla">
        {
          productos.length > 0 ?
              productos.map( producto =>{
                return <Link className="link-texto" key={producto.id} to={`/productos/${producto.nombre}`}>
                <div className="producto">
                  <img src={producto.imagen} />
                  <h2>{producto.nombre}</h2>
                  <p>${producto.precio}</p>
                  <p>{producto.descripcion}</p>
                </div>
            
                </Link>
                })
            : "No hay productos"
        }

      </div>
    </div>
  );
};

export default ItemListContainer;
