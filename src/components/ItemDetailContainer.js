import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import './ItemDetailContainer.css'
import Lottie from 'lottie-react'
import notfound from '../assets/notfound.json'
import loadinglottie from '../assets/loadinglottie.json'


//Animacion lottie
const options = {
    animationData: loadinglottie,
    autoplay: true,
    loop: false,
    style: {width:"20%"}
}

const options2 = {
    animationData: notfound,
    autoplay: true,
    loop: false,
    style: {width:"20%"}
}
function ItemDetailContainer() {
    const [item, setItem] = useState()
    const [notFound, setNotFound] = useState(false)
    const {itemId} = useParams() 
    useEffect(() => {
        const itemRef = doc(db, "items", itemId)
        getDoc(itemRef)
        .then((snapshot) => {
            if(snapshot.exists()) {
                setItem( {id: snapshot.id, ...snapshot.data()})
            } else {
                setNotFound(true)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])

  return (
        <div className='loading'>
            {notFound && <div><p>Producto no encontrado o no existente</p><Link to='/'>Volver al inicio</Link> <Lottie className='animation' {...options2}/></div>}
            {!item ? <div className={notFound && "hide"}><Lottie className='animation' {...options}/></div> : <ItemDetail item={item}/>}
        </div>
    )
}


export default ItemDetailContainer