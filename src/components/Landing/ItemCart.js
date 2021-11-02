import React, {useEffect, useState, useContext} from 'react';
import { CartContext } from './CartContext'


const ItemCart = ({ item }) => {
 
    const {items, setItems, addItem, clearAll, removeItem, isInCart} = useContext(CartContext);
    console.log("esto me trae item del itemCart", items)
   

   const { title, price, detail, pictureUrl, id } = item;

   console.log("esto es item data")
    

  
    return (
        <div>
            
            <h4>Holii</h4>
            <h5>{item.title}</h5>
            {/* <button onClick={() => onRemove(item.id)}>Borrar producto</button> */}
            
           
            
            
        </div>
    )
}

export default ItemCart