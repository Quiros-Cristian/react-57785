import React, { useEffect, useState } from "react";
import data from "../data/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import category from "../data/categorias.json"

const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [titulo, setTitulo] = useState("productos");
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
        if (categoryId) {
          setTitulo(category.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod)=> prod.categoria.id === categoryId));
        }else {
          setTitulo("productos");
          setProductos(res);
        }
      })

  },[categoryId])

  return (
    <div>
      <h1>{titulo}</h1>
      <ItemList  productos={productos}/>
    </div>
  );
};

export default ItemListContainer;
