import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'

const Cart = () =>{
    const {cart, vaciarCarrito, deleteItem, suma} = useContext(CartContext)
    return(
        <>
        {cart.map((producto)=>(
            <div key={producto.id}>
                <h2>{producto.title}</h2>
                <h2>cantidad: {producto.cantidad}</h2>
                <h2>Precio ${producto.price}</h2>
                <button onClick={()=> deleteItem(producto.id)}>X</button>
            </div>
        ))}
        {cart.length>0 && <p>Precio Total:$ {suma()} </p>}
        {cart.length>0 && <button onClick={vaciarCarrito}>Vaciar Carrito</button> }
        {cart.length==0 && <Link to="/">Volver al Inicio</Link>}
        
        
        </>
    )
}

export default Cart