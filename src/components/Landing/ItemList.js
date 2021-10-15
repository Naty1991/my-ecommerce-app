import React, {useState, useEffect} from 'react'
import Item from './Item'
import './ItemList.css'
import {Link} from 'react-router-dom'



const ItemList = () => {
    const [data, setData] = useState([])

  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/Naty1991/FAKEDATA/products')
  .then(response => response.json())
  .then(data => setData(data))
  }, [])
    return (
        <div className="container-items">
            {data.map((info) =>{
               return(
                 <div className="links-container"key={info.id}>
                   <Link className="link-info"to={`/item/${info.id}`}><Item data={info} /></Link>
                   
                 </div>
               )
            })}
            

        </div>
    )
}

export default ItemList
