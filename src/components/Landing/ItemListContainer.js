import React, {useEffect} from 'react'
import './ItemListContainer.css'

import ItemList from './ItemList'

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
