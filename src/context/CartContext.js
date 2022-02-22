import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (cantidad, items) =>{
        const isOnCart = (id) =>{
            const respuesta= cart.some((prod)=> prod.id === id)
            return respuesta
        }
        if (isOnCart(items.id)) {
            alert("Este item ya se encuentra en el carrito")
        } else {
            setCart([...cart, {...items, cantidad}])
        }
    }
    const vaciarCarrito = () =>{
        setCart([])
    }

    const deleteItem = (id) =>{
        setCart(cart.filter((producto)=>producto.id !== id))
    }
    return(
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider