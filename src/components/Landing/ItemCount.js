import React, {useState} from 'react'
import './ItemCount.css'


const ItemCount = ({stock, initial, onClick}) => {

    const [counter, setCounter] = useState(initial)

    const onAdd = ()=>{
        setCounter(counter + 1)
    }

    const onDecrement = () => {
        if(counter > initial){
            setCounter(counter - 1)
        }
        
    }

  

   

    return (
       
        <>
        

            <div className="item-item">
            <div className= "container-button">
            
            <button className="button-primary"onClick={onDecrement}>-</button>
            <h5 className="contador">{counter}</h5>
            {counter < stock ? <button className="button-primary"onClick={onAdd}>+</button> : <button className="button-off">+</button>}
            
            </div>
            <button className="button-add" onClick={()=> onClick(counter)}>Agregar al Carrito</button> 
            </div>
            
       

        </>
        
        
    )
}

export default ItemCount
