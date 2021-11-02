import React, { useContext, useState, useEffect } from "react";

import { CartContext } from '../components/Landing/CartContext';
import ItemCart from '../components/Landing/ItemCart';


const Cart = () => {
    const { items, removeItem, totalPrice, clearAll, setItems }    = useContext(CartContext);
  const [itemsTotales, setItemsTotales] = useState(0);
  
  

  
    return (
    <div>
      {/* {!items.length ? (
        <div>
          <h2>"No tenes productos en el carrito"</h2>
        </div>
      ) : (
        <div>
          <h2>"Tu carrito"</h2>
          <div>
            {items.map((item) => {
              return (
                <div>
                  <ItemCart items={items} onRemove={removeItem} />
                </div>
              );
            })}
          </div>
          <div>{itemsTotales}</div>
        </div>
      )} */}
       <div>
          <h2>"Tu carrito"</h2>
           <ItemCart item={items} />
          
          
          <button> borrar</button>
        </div>
    </div>
  );
};

export default Cart;