import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <>
        <div>
            <h1 className="greeting-div">{props.greeting}</h1>
        </div>

        <ItemCount initial = {parseInt(1)} stock={parseInt(20)} />
        </>
    )
}

export default ItemListContainer
