import ItemCount from './ItemCount'

function ItemListContainer() {
    function onAddItem(ItemCount) {
        
        console.log(ItemCount);
      }

    return (
        <div>
        <ItemCount stock={10} initial={1} onAdd={onAddItem}/>
        </div>
    )
}

export default ItemListContainer