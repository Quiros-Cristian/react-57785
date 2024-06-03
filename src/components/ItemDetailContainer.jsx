import React, { useEffect, useState } from 'react'
import data from "../data/productos.json"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState();
  
    useEffect(() => {
      setProducto(data.find((prod) => prod.id === itemId))
    }, [itemId]);
  
    return (
      <div className='divdetail'>
        {producto ?
      <div>
      <img src={producto.imagen} />
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
      <p>{producto.descripcion}</p>
      </div>
      : 'cargando...'}
      </div>
    );
  }

export default ItemDetailContainer