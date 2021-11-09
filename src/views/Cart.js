import React, { useContext, useState, useEffect } from "react";
import '../views/CSS/Cart.css'
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

                    <div className="cart-totalitems">
                    <h3>Carrito</h3>
                      
                      {items?.map(item => <ItemCart item={item} onRemove={removeItem}></ItemCart>)}
                 
                    <div className="cart-totalprice">
                    <h3 className="itemcart-total">Total :</h3>
                           
                
                    <h3 className="itemcart-totalprice">${itemsTotales}</h3> 
                    </div>
                              
                    </div>

                        
                   
                    </>          
            }
     
    </div>
  );
};

export default Cart;