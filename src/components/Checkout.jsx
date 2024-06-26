import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from "../firebase/config";
import { Link } from 'react-router-dom';
import Logo from "../assets/img/Luxila.png";

const Checkout = () => {

    const {carrito, calcularTotal, vaciarCarrito } = useContext(CartContext)
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("")

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id)
                vaciarCarrito();
            })
    }

    if (docId) {
        return(
            <div className="pedidoRealizado">
                <h1>Muchas gracias por tu compra</h1>
                <img className='imagenDeCompra' src={Logo} alt="" />
                <p>Para hacer el seguimiento de tu pedido, identificador es: {docId}</p>
                <button className='botonVolver'><Link to={'/'}>Volver a inicio</Link></button>
            </div>
        )
    }

  return (
    <div className='mainCheckout'>
        <form className='formCheckout' onSubmit={handleSubmit(comprar)}>
            <h4>Ingrese sus datos personales</h4>
            <input type="text" placeholder='Ingrese su nombre' {...register("nombre")} />
            <input type='email' placeholder='Ingrese su email' {...register("email")} />
            <div><button type='submit'>Comprar</button></div>
        </form>
    </div>
  )
}

export default Checkout