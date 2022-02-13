import {useEffect, useState} from 'react'
import {getProducts} from '../api/api'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [item, setItem] = useState()
    const {itemId} = useParams() 
    useEffect(() => {
        getProducts().then((items) => {
        const item = items.find((i) => i.id === Number(itemId));
           setItem(item)
        })
    }, [itemId])

  return (
        <div>
            {!item ? <p>Cargando Productos...</p> : <ItemDetail item={item}/>}
        </div>
    )
}


export default ItemDetailContainer