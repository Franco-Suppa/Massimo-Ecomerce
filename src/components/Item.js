import './Item.css'
import { Link } from 'react-router-dom'


function Item({item}) {
return ( <>

    <Link className='link' to={`/producto/${item.id}`}>
    
    <div className='col'>
    <div className="card" style={{width: "18rem"}}>
    <img src={item.imgUrl}  className="card-img-top" alt='Imagen Procuto'/>
    <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">Precio ${item.price}</p>
    </div>
    </div>
    </div>
    
    </Link>
    </>
)
}

export default Item
