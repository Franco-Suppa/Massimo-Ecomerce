import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
function ItemDetail({item}) {
  const [itemCount, setItemCount] = useState()
  const {addToCart} = useContext(CartContext)
  function onAddItem(nuevoContador){
    setItemCount(nuevoContador)
    addToCart(nuevoContador, item)
  }
    return (
        <div>
          <img src={item.imgUrl} alt="Imagen del producto" />
              <p>{item.title}</p>
              <p className='price'>$ {item.price}</p>
              <p className='description'>{item.description}</p>
              {
                !itemCount ?
                  <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}/>
                  :
                  <Link to="/cart">Terminar Compra</Link>
              }
            </div>
      )
}

export default ItemDetail