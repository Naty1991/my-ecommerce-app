import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ItemDetail from '../components/Landing/ItemDetail'




const ItemDetailContainer = ({ match }) => {

    const[descrip, setDescrip] = useState({});
    
    let itemID = match.params.id;
    console.log(itemID)
    
    useEffect(()=>{
        axios(`https://my-json-server.typicode.com/Naty1991/FAKEDATA/products/${itemID}`).then((res) =>
			setDescrip(res.data)
		);
		
          

    }, [itemID])
    
    return (
        <div>
            <h1 style={{textAlign:"center", color:"#7C5520", textDecoration:"underline"}}>Detalles</h1>
            
           <ItemDetail data={descrip}/>
               
            
        
        </div>
    )
}

export default ItemDetailContainer
