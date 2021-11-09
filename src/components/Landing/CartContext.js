import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  

  console.log("esto es items del context", items );

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      
         
        <div>
        <p>"Este producto ya existe!"</p>
      </div>;
      return;
    }

    
     
    
    
    setItems([...items, { cantidad: cantidad, ...item }]);
  };

  const removeItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
    return(
        <h2>"Se eliminó el producto del carrito"</h2>
    )
  };

  const clearAll = () => {
    setItems([]);
    
  };

  const isInCart = (itemId) => {
    return !!items.find(item => item.id === itemId);
}


 

  

  return (
    <CartContext.Provider
      value={ {items, setItems, addItem, clearAll, removeItem, isInCart}  }
    >
      {children}
    </CartContext.Provider>
  );
};