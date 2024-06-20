import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState();

    const { agregarAlCarrito} = useContext(CartContext);
    
    useEffect(() => {

      const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
        .then(res => {
          setProducto({ ...res.data(), id: doc.id })
        })

    }, [itemId]);
  
    return (
      <div className='divdetail'>
        {producto ?
      <div>
      <img src={producto.imagen} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
      </div>
      : 'cargando...'}
      </div>
    );
  }

export default ItemDetailContainer