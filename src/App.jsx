import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ButtonVaciar from './components/ButtonVaciar';
import DolarApi from './components/DolarApi';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Banner from './components/Banner';
import ProductDetail from './components/ProductDetail'

function App() {
  const [TotalCarrito, setTotalCarrito] = useState(0);

  return (
    <>
      <NavBar TotalCarrito={TotalCarrito} />
      <div className="header-container">
        <ButtonVaciar text="Vaciar carrito" fn2={setTotalCarrito} />
      </div>

      <Routes>
        <Route 
          exact path='/' element={
            <>
              <DolarApi />
              <Banner />
              <Home/>
            </> }
        />
        <Route 
          exact path='/market' element={
          <ItemListContainer fn={setTotalCarrito} TotalCarrito={TotalCarrito} />}
        />
        <Route 
          exact path='/contact' element={
          <h1>Página en mantenimiento...</h1>}
        />
        <Route exact path='/product/:id' element={<ProductDetail fn={setTotalCarrito} TotalCarrito={TotalCarrito}/>}/>
        <Route exact path='*' element={
          <h1>404: Página no encontrada</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
