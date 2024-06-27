import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto])

            const productoExistente = carrito.find(prod => prod.id === producto.id);
        
            if (productoExistente) {
                const nuevoCarrito = carrito.map(prod =>
                    prod.id === producto.id ? { ...prod, quantity: prod.quantity + 1 } : prod
                );
                setCarrito(nuevoCarrito);
                
            } else {
                setCarrito([...carrito, { ...producto, quantity: 1 }]);
            }
   
    }

    const calcularCantidad = () => {
        return carrito.length;
    }


    const calcularTotal = () => {
        let total = 0;
        carrito.forEach((prod) => {
          total += prod.precio * prod.quantity;
        });
        return total;
      };

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const eliminarProducto = (producto) => {
       const productoEncontrado = carrito.find(prod => prod.id === producto.id)
       const indice = carrito.indexOf(productoEncontrado);
       
       const nuevoCarrito = [...carrito]
       nuevoCarrito.splice(indice, 1)
       setCarrito(nuevoCarrito)
    }

    return(
        <CartContext.Provider value={ { carrito, setCarrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto } }>
            {children}
        </CartContext.Provider>
    )
}