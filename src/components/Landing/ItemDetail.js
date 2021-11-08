import React, { useContext } from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'

import { CartContext } from './CartContext'


const ItemDetail = ({ item }) => {
    const {items, addItem} = useContext(CartContext)

    
  
   const { title, price, detail, pictureUrl } = item;

  

   const onAddToCart = (cantidad) => {

    addItem(item, cantidad);
   
  }

   

    

    
    

        console.log("compras realizadas", items)

       

    return (
        <div className="div-container-detail" key={item.id}>
            <img className="imagen-detalles"src={item.pictureUrl} alt={item.pictureUrlAlt} width={340} height={300}/>
            <div className="contenido-detalles">
            <h1>{item.title}</h1>
            <h2>${item.price}</h2>
            <h3>{item.detail}</h3>
            <div className="item-conterr">
            
            <ItemCount initial = {parseInt(1)} stock={parseInt(20)} onClick={(cantidad) => onAddToCart(cantidad)} /> 
            
            </div>
            


            
            </div>
            
            
            

        </div>
    )
}

export default ItemDetail