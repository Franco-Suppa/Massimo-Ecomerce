import cart from '../img/cart.png'
import  './CartWidget.css'

function CartWidget() {
    return(
        <div className='widget'>
                <img className='cart' src={cart} alt="carro"></img> 
                <p>4</p>
        </div>
    )
}

export default CartWidget