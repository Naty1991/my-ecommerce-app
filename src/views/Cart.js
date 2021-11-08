import React, { useContext, useState, useEffect } from "react";

import { CartContext } from '../components/Landing/CartContext';
import ItemCart from '../components/Landing/ItemCart';


const Cart = () => {
    const { items, removeItem, clearAll }    = useContext(CartContext);
  const [itemsTotales, setItemsTotales] = useState(0);

  useEffect(() => {
    let total = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
    setItemsTotales(total);
}, [items])



  

  
    return (
    <div>
        <button onClick={() => clearAll()}>Limpiar carrito</button>
      {     !items.length ?
                    <>
                        <h4>No hay items en el carrito</h4>
                        
                    </>
                    :
                    <>

                    

                        <h3>Carrito</h3>
                      
                            {items?.map(item => <ItemCart item={item} onRemove={removeItem}></ItemCart>)}
                       
                     
                                    <h2>Total</h2>
                                 
                      
                                   <h3>${itemsTotales}</h3> 
                    <form>
                      <input/>
                    </form>
                    </>          
            }
     
    </div>
  );
};

export default Cart;