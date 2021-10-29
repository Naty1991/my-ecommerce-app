import React, {useEffect, useState} from 'react'

const ItemCart = ({ item, onRemove }) => {
 

  
    return (
        <div>
            <button onClick={() => onRemove(item.id)}>Borrar producto</button>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            
            
        </div>
    )
}

export default ItemCart
