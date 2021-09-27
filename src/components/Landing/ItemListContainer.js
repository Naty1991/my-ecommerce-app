import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className="greeting-div">{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer
