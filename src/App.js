import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {
  return (
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
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
