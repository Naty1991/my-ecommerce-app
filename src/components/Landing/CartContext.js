import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children}) => {

 const [items, setItems] = useState([])

 const addItem = (item, quantity) => {
    setItems([...items, { cantidad: quantity, ...item }]);
 }

 

    return(
        <CartContext.Provider value={[items, setItems, addItem]}>
            { children }
        </CartContext.Provider>
    )

}