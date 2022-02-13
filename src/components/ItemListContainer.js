import ItemCount from './ItemCount'
import {useEffect, useState} from 'react'
import {getProducts} from '../api/api'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
 const [products, setProducts] = useState([])
 const { categoryName } = useParams()
    useEffect(() => {
        getProducts().then(function(products) {
            if (!categoryName) {setProducts(products)} else {
            const itemsPorCategoria= products.filter((producto) => {
               return producto.category === categoryName
            })
            setProducts(itemsPorCategoria) 
            }
            
        })
    }, [categoryName])

    function onAddItem(valor) {
        
        console.log(valor);
      }

    return (
        <div>
        {products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
        <ItemCount stock={10} initial={1} onAdd={onAddItem}/>
        </div>
    )
}

export default ItemListContainer