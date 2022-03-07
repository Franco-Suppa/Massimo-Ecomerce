import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore, } from "firebase/firestore";
import './Cart.css'

const Cart = () =>{
    const {cart, vaciarCarrito, deleteItem, suma} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [form, setForm] = useState(false)
    const [buyEnd, setBuyEnd] = useState(false)
    const [loading, setLoading] = useState(false)
    const [idCompra, setIdCompra] = useState()

    // Funciones para setear states

    const handleNombre = event => setNombre(event.target.value)
    const handleTel = event => setTel(event.target.value)
    const handleEmail = event => setEmail(event.target.value)
    const handleEmail2 = event => setEmail2(event.target.value)
    useEffect(() => {
        cart.length>0 ? setForm(true) : setForm(false)
        
        
    },[cart])




    // Pasamos la order a nuestra collection
        const db = getFirestore()
        const orders = collection(db, "orders")
        const newOrder = {
            buyer: { nombre, tel, email},
            cart,
            date: new Date(),
            
    
        }

    //Prevenir comportamiento y enviar al DB

    const onSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        //Validacion de datos
        if (![nombre, tel, email].some(field => field === "")){
            if (email === email2) {
                addDoc(orders, newOrder)
                .then(doc => {
                    setForm(false)
                    setBuyEnd(true)
                    vaciarCarrito()
                    setIdCompra(doc.id)
                })
                .catch(error => {
                    console.loge(error)
                })
                .finally(() => {
                    setLoading(false)
                }) 
            } else {
                alert("El email no coincide")
            }
       } else {
            alert("Hay campos sin completar")
        }
    }

   
    return(
        <>
        {cart.map((producto)=>(
            <div key={producto.id}>
            <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={producto.imgUrl} className="img-fluid rounded-start" alt={producto.title}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">Cantidad: {producto.cantidad}</p>
                <p className="card-text">Precio: {producto.price}</p>
                <button className="btn btn-danger" onClick={()=> deleteItem(producto.id)}>X</button>
                </div>
            </div>
            </div>
        </div> 
            </div>

        ))}

    
        {cart.length>0 && <div className="alert alert-secondary"><p>Precio Total:$ {suma()} </p></div>}

        {cart.length>0 && <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button> }

        {cart.length==0 && <Link to="/" className="volver"><h1>Volver al Inicio</h1></Link>}

        {buyEnd && <div className="alert alert-success"><p>Gracias por su compra {nombre} su codigo de compra es el siguiente: {idCompra} </p></div>}

        {form &&         <div>
            <h1> Ingrese sus datos para finalizar la compra</h1>
            <form onSubmit={onSubmit}>
                <div><label>Ingrese su nombre</label>
                <input value={nombre} onChange={handleNombre} type="text" /></div>
                
                <div><label>Ingrese su telefono</label>
                <input value={tel} onChange={handleTel} type="number" /></div>
                
                <div><label>Ingrese su email</label>
                <input value={email} onChange={handleEmail} type="email" /></div>
                
                <div><label>Ingrese email nuevamente</label>
                <input value={email2}  onChange={handleEmail2} type="email" /></div>
                

                <button className="btn btn-success" disabled={nombre==="" || tel==="" || email==="" || email2==="" &&'disabled'}  type="submit">{loading? "Generando orden..." :  "Finalizar compra" }</button>

            </form>
            
        </div> }

        
        </>
    )
}

export default Cart