import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [detalles, setDetalles] = useState([])

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/Naty1991/FAKEDATA/products")
        .then(response => response.json())
        .then(datos => setDetalles(datos))
    }, [])

    return (
        <div>
            {detalles.map((detail)=>(
                <ItemDetail datos={detail}/>
            ))}
        </div>
    )
}

export default ItemDetailContainer
