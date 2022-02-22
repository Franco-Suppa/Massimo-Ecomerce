import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () =>{
    const {cart, vaciarCarrito, deleteItem} = useContext(CartContext)
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
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
    )
}

export default Cart