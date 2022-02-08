import './Item.css'

function Item({item}) {
return (
    <div className='contenedorItem'>
    <img src={item.imgUrl} alt='Imagen Procuto'/>
    <p className='price'>{item.price}</p>
    <p className='title'>{item.title}</p>
    </div>
)
}

export default Item