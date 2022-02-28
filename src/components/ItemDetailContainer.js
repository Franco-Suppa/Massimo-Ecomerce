import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
    const [item, setItem] = useState()
    const {itemId} = useParams() 
    useEffect(() => {
        const itemRef = doc(db, "items", itemId)
        getDoc(itemRef)
        .then((snapshot) => {
            if(snapshot.exists()) {
                setItem( {id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])

  return (
        <div>
            {!item ? <p>Cargando Productos...</p> : <ItemDetail item={item}/>}
        </div>
    )
}


export default ItemDetailContainer