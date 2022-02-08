import ItemCount from './ItemCount'
import {useEffect, useState} from 'react'
import {getProducts} from '../api/api'
import ItemList from './ItemList'

function ItemListContainer() {
 const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(function(products) {
            setProducts(products)
        })
    }, [])

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