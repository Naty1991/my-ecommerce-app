import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ItemDetail from '../components/Landing/ItemDetail'





const ItemDetailContainer = ({ match }) => {

    const[item, setItem] = useState({});
    
    let itemID = match.params.id;
  
    
    useEffect(()=>{
        axios(`https://my-json-server.typicode.com/Naty1991/FAKEDATA/products/${itemID}`).then((res) =>
			setItem(res.data)
		);
		
          

    }, [itemID])
    
    return (
        <div>
            <h1 style={{textAlign:"center", color:"#7C5520", textDecoration:"underline"}}>Detalles</h1>
            
           <ItemDetail item={item}/>
               
            
        
        </div>
    )
}

export default ItemDetailContainer