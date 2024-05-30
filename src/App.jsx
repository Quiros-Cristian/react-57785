import './css/main.css'
import Header from './components/Header'
import ItemLIstContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ProductLIst from './components/ProductLIst';

function App() {
  const numerito = 2;

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<ProductLIst />} />
          <Route path='/productos' element={<ItemLIstContainer />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}



export default App
