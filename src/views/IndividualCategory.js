import React, {useState, useEffect} from 'react'
import Item from '../components/Landing/Item'


const IndividualCategory = ({ match }) => {

    const[data, setData] = useState({})

    let categID = match.params.category
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/Naty1991/FAKEDATA/products')
        .then(response => response.json())
        .then(data => setData(data))
		
    }, [categID])

    return (
        <div>
            <Item data={data}/>
        </div>
    )
}

export default IndividualCategory
