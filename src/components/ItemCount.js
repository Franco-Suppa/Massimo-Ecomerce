import { useState } from "react";

function ItemCount( {stock, initial, onAdd}) {
  const [contadorItem, setContadorItem] = useState(initial)  
   
  function sumarItem() {
      if (contadorItem < stock) {
          setContadorItem(contadorItem + 1)
      }
  }

  function restarItem() {
      if (contadorItem > 0) {
          setContadorItem(contadorItem - 1)
      }
  }

  function agregarCarro() {
      onAdd(contadorItem)
  }
    return (
        <div>
            <button onClick={restarItem}>-</button>
            <p>{contadorItem}</p>
            <button onClick={sumarItem}>+</button>
            <button onClick={agregarCarro}>Agregar al Carrito</button>
        </div>
      );
}

export default ItemCount