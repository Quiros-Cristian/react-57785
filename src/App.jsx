import './css/main.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import NotFound from './components/NotFound';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  

  return (
    <main>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </main>
  )
}



export default App
