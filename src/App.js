import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Pagina404 from './components/Pagina404';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
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
      element={<ItemListContainer/>}
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
      <Route path='*'
      element={<Pagina404/>}
      />
      </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
