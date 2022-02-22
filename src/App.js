import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import { CartContext } from './context/CartContext';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div>
      <NavBar /> 
      <Routes>
      <Route path='/' 
      element={<ItemListContainer greeting="PRODUCTOS" />}
      /> 
      
      <Route path='/category/:categoryName' 
      element={<ItemListContainer/>} 
      />

      <Route path='/producto/:itemId' 
      element={<ItemDetailContainer />}
      />
      <Route path='/cart'
      element={<Cart/>}
      />
      </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
