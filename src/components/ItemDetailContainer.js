import {useEffect, useState} from 'react'
import {getProducts} from '../api/api'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [item, setItem] = useState()
    useEffect(() => {
        const itemId= 2;
        getProducts().then((items) => {
        const item = items.find((i) => i.id === itemId);
           setItem(item)
        })
    }, [])

  return (
        <div>
            {!item ? <p>Cargando Productos...</p> : <ItemDetail item={item}/>}
        </div>
    )
}


export default ItemDetailContainer