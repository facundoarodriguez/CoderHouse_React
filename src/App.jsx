import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import DolarApi from './components/DolarApi';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Banner from './components/Banner';
import ProductDetail from './components/ProductDetail'
import CartPage from './components/CartPage';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<>
          <DolarApi/>
          <Banner/>
          <Home/>
          <ItemListContainer category={null} />
          </>}
        />
        <Route exact path="/telecaster" element={<ItemListContainer category="Telecaster" />} />
        <Route exact path="/stratocaster" element={<ItemListContainer category="Stratocaster" />} />
        <Route exact path="/jazzmaster" element={<ItemListContainer category="Jazzmaster" />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;