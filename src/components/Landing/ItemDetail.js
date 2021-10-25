import React, { useState, useContext } from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from './CartContext'


const ItemDetail = ({ data }) => {
    const [items, setItems, addItem] = useContext(CartContext)
    const { pictureUrl, price, title, description } = data;
    const [itemInCart, setItemInCart] = useState(false);


    const onAddToCart = (cantidad) => {

        addItem(data, cantidad);
        setItemInCart(true);
      }
    

    const[compra, setCompra] = useState('');
    const[compraTerminada, setCompraTerminada] = useState(false)

    const onAdd = (compras)=> {
        setCompra(compras)
        setCompraTerminada(!compraTerminada)
        
    }

        console.log("compras realizadas", compra)

       

    return (
        <div className="div-container-detail" key={data.id}>
            <img className="imagen-detalles"src={data.pictureUrl} alt={data.pictureUrlAlt} width={340} height={300}/>
            <div className="contenido-detalles">
            <h1>{data.title}</h1>
            <h2>${data.price}</h2>
            <h3>{data.detail}</h3>
            <div className="item-conterr">
            
            {compraTerminada ? <button className="btn-final"><Link to='/cart'>Finalizar compra</Link></button> :<ItemCount initial = {parseInt(1)} stock={parseInt(20)} onClick={(cantidad) => onAdd(cantidad)} /> }
            
            </div>
            


            
            </div>
            

        </div>
    )
}

export default ItemDetail



