function ItemDetail({item}) {
    return (
        <div>
          <img src={item.imgUrl} alt="Imagen del producto" />
              <p>{item.title}</p>
              <p className='price'>$ {item.price}</p>
              <p className='description'>{item.description}</p>
            </div>
      )
}

export default ItemDetail