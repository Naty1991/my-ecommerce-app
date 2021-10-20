import React from 'react'
import './CardCategory.css'


const CardCategory = ({ cat }) => {
    return (
         <div>
             <div key={cat.id} className="div-juguetes">
            
                <h2 className="h-cat">{cat.nameCategory}</h2>
                <img className="img-cat"src={cat.pictureUrl} alt={cat.pictureUrlAlt} width={200} height={240}/>
        
          
          
        
          
            </div>
         </div>
         
        
    )
}

export default CardCategory
