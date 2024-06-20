import './css/main.css'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import NotFound from './components/NotFound';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { useState } from 'react';
import { CartContext, CartProvider } from './context/CartContext';

function App() {

  

  return (
    <main>
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </main>
  )
}



export default App
