import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './ItemCart.css'


const ItemCart = ({ item, onRemove }) => {
 
    
    
   
return (
        <div className= "div-itemcart">
           
            
            
            <h3 className="title-itemcart">{item.title}</h3>

            <h3>{item.cantidad}</h3>
            

            <h3>${item.price}</h3>
            <button className="btn-itemcart" onClick={() => onRemove(item.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
            
            
           
            
            
        </div>
    )
}

export default ItemCart