import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'


const ItemDetail = ({ data }) => {

    const[compra, setCompra] = useState('');

    const onAdd = (compras)=> {
        setCompra(compras)
    }

    return (
        <div className="div-container-detail" key={data.id}>
            <img className="imagen-detalles"src={data.pictureUrl} alt={data.pictureUrlAlt} width={340} height={300}/>
            <div className="contenido-detalles">
            <h1>{data.title}</h1>
            <h2>${data.price}</h2>
            <h3>{data.detail}</h3>
            <div className="item-conterr">
            <ItemCount initial = {parseInt(1)} stock={parseInt(20)} onClick={(cantidad) => onAdd(cantidad)} />
            </div>
            


            
            </div>
            

        </div>
    )
}

export default ItemDetail


