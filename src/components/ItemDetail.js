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


              <div className='col'>
                <div className="card" style={{width: "18rem"}}>
                <img src={item.imgUrl}  className="card-img-top" alt='Imagen Procuto'/>
                <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Precio ${item.price}</p>
                <p className="card-text">{item.description}</p>


                {
                !itemCount ?
                  <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}/>
                  :
                  <Link to="/cart"><button className='btn btn-success'>Ir al carrito </button></Link>
              }
                </div>
                </div>
                </div>



            </div>
      )
}

export default ItemDetail