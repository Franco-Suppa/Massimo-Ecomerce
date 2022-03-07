import { useState } from "react";
import './ItemCount.css'

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

  function agregarCarro(event) {
      onAdd(contadorItem)
  }
    return (
        <div>
        <div className="itemCount">
            <button className="btn btn-success" onClick={restarItem}>-</button>
            <p>{contadorItem}</p>
            <button className="btn btn-success" onClick={sumarItem}>+</button>
            </div>
            <button className="btn btn-success" onClick={agregarCarro} disabled={contadorItem===0 && "disabled" }>Agregar al Carrito</button>
        </div>
      );
}

export default ItemCount