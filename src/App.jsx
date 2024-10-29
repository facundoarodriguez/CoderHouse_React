import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ButtonVaciar from './components/ButtonVaciar';

function App() {
  const [TotalCarrito, setTotalCarrito] = useState(0);

  return (
    <>
      <NavBar TotalCarrito={TotalCarrito} />
      <div className="header-container">
        <ButtonVaciar text="Vaciar carrito" fn2={setTotalCarrito} />
      </div>
      <div className="body">
        <div>
          <h1>Tienda de guitarras</h1>
        </div>
        <ItemListContainer mensaje="Nuestros productos" fn={setTotalCarrito} TotalCarrito={TotalCarrito} />
      </div>
    </>
  );
}

export default App;
