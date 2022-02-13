import './Item.css'
import { Link } from 'react-router-dom'

function Item({item}) {
return (
    <Link to={`/producto/${item.id}`}>
    <div className='contenedorItem'>
    <img src={item.imgUrl} alt='Imagen Procuto'/>
    <p className='price'>{item.price}</p>
    <p className='title'>{item.title}</p>
    </div>
    </Link>
)
}

export default Item