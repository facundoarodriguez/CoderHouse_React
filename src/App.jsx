import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import DolarApi from './components/DolarApi/DolarApi';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Banner from './components/Banner/Banner';
import ProductDetail from './screens/ProductDetail/ProductDetail'
import CartPage from './screens/CartPage/CartPage';

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
        <Route exact path="/telecaster" element={<ItemListContainer category="telecaster" />} />
        <Route exact path="/stratocaster" element={<ItemListContainer category="stratocaster" />} />
        <Route exact path="/jazzmaster" element={<ItemListContainer category="jazzmaster" />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;