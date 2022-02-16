import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
function ItemDetail({item}) {
  const [itemCount, setItemCount] = useState()
  function onAddItem(nuevoContador){
    setItemCount(nuevoContador)
  }
    return (
        <div>
          <img src={item.imgUrl} alt="Imagen del producto" />
              <p>{item.title}</p>
              <p className='price'>$ {item.price}</p>
              <p className='description'>{item.description}</p>
              {
                !itemCount ?
                  <ItemCount stock={10} initial={1} onAdd={onAddItem}/>
                  :
                  <Link to="/cart">Terminar Compra</Link>
              }
            </div>
      )
}

export default ItemDetail