import React from 'react'
import './ItemDetail.css'

const itemDetail = ({datos}) => {
    return (
        <div className="div-detail" key={datos.id}>
            <img src={datos.pictureUrl} width= {400} height={400}/>
            <div className="div-description">
            <h2 className="title-detail">{datos.title}</h2>
            <h1 className="price-detail">${datos.price}</h1>
            <h3 className="description-detail">{datos.detail}</h3>
            </div>
        
            

        </div>
    )
}

export default itemDetail
