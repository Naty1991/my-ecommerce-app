import React, {useEffect, useState, useContext} from 'react';
import { CartContext } from './CartContext'


const ItemCart = ({ item }) => {
 
    const {items, setItems, addItem, clearAll, removeItem, isInCart} = useContext(CartContext);
    console.log("esto me trae item del itemCart", items)
   

   const { title, price, detail, pictureUrl, id } = item;

   console.log("esto es item data", item)
    

  
    return (
        <div>
            <h3>{item.title}</h3>
            <h4>Holii</h4>
            {/* <button onClick={() => onRemove(item.id)}>Borrar producto</button> */}
            
            <h4>{item.price}</h4>
            
            
        </div>
    )
}

export default ItemCart
