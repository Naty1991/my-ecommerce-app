import React from 'react'
import './ItemDetail.css'

const itemDetail = ({ data }) => {
    return (
        <div className="div-container-detail" key={data.id}>
            <img className="imagen-detalles"src={data.pictureUrl} alt={data.pictureUrlAlt} width={340} height={300}/>
            <div className="contenido-detalles">
            <h1>{data.title}</h1>
            <h2>${data.price}</h2>
            <h3>{data.detail}</h3>

            <button className="btn-compra">Agregar al carrito</button>
            </div>
            

        </div>
    )
}

export default itemDetail


