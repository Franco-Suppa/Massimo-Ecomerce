import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore, } from "firebase/firestore";

const Cart = () =>{
    const {cart, vaciarCarrito, deleteItem, suma} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [productos, setProductos] = useState()

    // Funciones para setear states

    const handleNombre = event => setNombre(event.target.value)
    const handleTel = event => setTel(event.target.value)
    const handleEmail = event => setEmail(event.target.value)
    useEffect(() => {
        setProductos(cart)
        console.log(cart)
    },[cart])


    // Pasamos la order a nuestra collection
        const db = getFirestore()
        const orders = collection(db, "orders")
        const newOrder = {
            nombre,
            tel,
            email,
            cart,
            
    
        }

    //Prevenir comportamiento y enviar al DB

    const onSubmit = (e) => {
        
        e.preventDefault()
        console.log(newOrder)
        addDoc(orders, newOrder)
        .then(doc => {
            console.log("Se envio la orden con exito")
        })
        .catch(error => {
            console.loge(error)
        })
    }

   
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
        
        <div>
            <h1> Ingrese sus datos para finalizar la compra</h1>
            <form onSubmit={onSubmit}>
                <label>Ingrese su nombre</label>
                <input value={nombre} onChange={handleNombre} type="text" />

                <label>Ingrese su telefono</label>
                <input value={tel} onChange={handleTel} type="text" />

                <label>Ingrese so email</label>
                <input value={email} onChange={handleEmail} type="text" />

                <button type="submit">Finalizar compra</button>

            </form>
        </div>
        
        </>
    )
}

export default Cart