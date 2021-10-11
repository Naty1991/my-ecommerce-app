import React from 'react'
import './ItemListContainer.css'

import ItemList from './ItemList'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <>
        <div>
            <h1 className="greeting-div">{props.greeting}</h1>
        </div>
        <div>
            <ItemList/>

            
           
        </div>
        
        </>
    )
}

export default ItemListContainer
