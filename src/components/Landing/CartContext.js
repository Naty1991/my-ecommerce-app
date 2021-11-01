import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  

  console.log("esto es items del context", items );

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      alert("el prod. ya existe");
    }

    alert(`se agrego $`);

    setItems([...items, { cantidad: cantidad, ...item }]);
  };

  const removeItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const clearAll = () => {
    setItems([]);
  };

  const isInCart = (itemId) => {
    items.find((item) => item.id === itemId);
   
  };


  const alertSolo = () => {
      alert("Acá está el context")
  };

  const [itemsTotales, setItemsTotales] = useState(0);
 
  const totalPrice = () => {
    let total = items.reduce((act, curr) => act + (curr.price * curr.length), 0);
     setItemsTotales(total);
  };


  return (
    <CartContext.Provider
      value={ [items, setItems, addItem, clearAll, removeItem, isInCart, totalPrice, alertSolo]  }
    >
      {children}
    </CartContext.Provider>
  );
};
