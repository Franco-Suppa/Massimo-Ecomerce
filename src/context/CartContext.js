import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (cantidad, items) =>{
        const sumarCantidad = (cantidad, items) => {
            const copia = [...cart]
            copia.forEach((producto)=>{
                if (producto.id===items.id) {
                    producto.cantidad += cantidad
                } else {
                    
                }
            })
        }
        const isOnCart = (id) =>{
            const respuesta= cart.some((prod)=> prod.id === id)
            return respuesta
        }
        if (isOnCart(items.id)) {
            sumarCantidad(cantidad, items)
        } else {
            setCart([...cart, {...items, cantidad}])
        }
    }

    const suma = () => {
        return cart.reduce((prev,curr)=> prev+curr.price * curr.cantidad, 0)
    }

    const vaciarCarrito = () =>{
        setCart([])
    }

    const deleteItem = (id) =>{
        setCart(cart.filter((producto)=>producto.id !== id))
    }
    return(
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito, deleteItem, suma}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider