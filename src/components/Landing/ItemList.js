import React, {useState, useEffect} from 'react'
import Item from './Item'

import './ItemList.css'



const ItemList = () => {
    const [data, setData] = useState([])

  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/Naty1991/FAKEDATA/products')
  .then(response => response.json())
  .then(data => setData(data))
  })
    return (
        <div className="container-items">
            {data.map((info) =>(
                <Item data={info} />
                
            ))}
            

        </div>
    )
}

export default ItemList
