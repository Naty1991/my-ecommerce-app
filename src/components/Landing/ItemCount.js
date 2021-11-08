import React, {useState} from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'


const ItemCount = ({stock, initial, onClick}) => {

    const [cantidad, setCantidad] = useState(initial);
    const [terminar, setTerminar] = useState(false);

    const incress = () => {
        if (cantidad < stock) {
          setCantidad(cantidad + 1);
        }
      };
      const decress = () => {
        if (cantidad > 0) {
          setCantidad(cantidad - 1);
        }
      };
      
      const onAdd = () => {
        // Funcion que va a hacer desaparecer el item count por un boton de 'Finalizar   compra"
        setTerminar(!terminar);
        onClick(cantidad);
      };
   

    return (
       
        <>
        

            <div className="item-item">
            <div className= "container-button">
            
            <button className="button-primary" onClick={decress}>-</button>
            <h5 className="contador">{cantidad}</h5>
            {cantidad < stock ? <button className="button-primary" onClick={incress}>+</button> : <button className="button-off">+</button>}
            
            </div>
            {terminar ?  <Link to='/cart'><button className="btn-final" >Finalizar compra</button></Link> : <button className="button-add" onClick={onAdd}>Agregar al Carrito</button> }
             
            </div>
            
       

        </>
        
        
    )
}

export default ItemCount