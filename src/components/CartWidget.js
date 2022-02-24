import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import cartImg from '../img/cart.png'
import  './CartWidget.css'

function CartWidget() {
    const {cart} = useContext(CartContext)
    return(
        <div className='widget'>
                <img className='cart' src={cartImg} alt="carro"></img> 
                <p>{cart.length}</p>
        </div>
    )
}

export default CartWidget