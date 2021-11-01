import React  from "react";

import './Item.css'
import ItemCount from "./ItemCount";

const Item = ({ data }) => {

  
    
  return (
    
      
          <div key={data.id} className="container">
          <h2 className="title-item">{data.title}</h2>
          <img className="img"src={data.pictureUrl} alt={data.pictureUrlAlt} width={200} height={240}/>
          <ItemCount initial = {parseInt(1)} stock={parseInt(20)} />
          <div className="t-p">
          
          <button className="btn-item">Ver Más</button>
          <h4 className="price-item">${data.price}</h4>
         </div>
          
          </div>
    
    
  );
};

export default Item;
