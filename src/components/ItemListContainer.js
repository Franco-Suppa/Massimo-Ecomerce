import {useEffect, useState} from 'react'
import {getProducts} from '../api/api'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import loadinglottie from '../assets/loadinglottie.json'


//Animacion lottie
const options = {
    animationData: loadinglottie,
    autoplay: true,
    loop: false,
    style: {width:"20%"}
}

function ItemListContainer() {
 const [products, setProducts] = useState([])
 const { categoryName } = useParams()
    useEffect(() => {
        getProducts()
        .then(function(products) {
            if (!categoryName) {setProducts(products)} else {
            const itemsPorCategoria= products.filter((producto) => {
               return producto.category === categoryName
            })
            setProducts(itemsPorCategoria) 
            }
            
        })
        .catch((error) => {
            console.log(error)
        })
    }, [categoryName])

    return (
        <div>
        {products.length > 0 ? <ItemList products={products} /> : <Lottie className='animation' {...options}/>}
        </div>

        
    )
}

export default ItemListContainer