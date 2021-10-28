import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children}) => {

 const [items, setItems] = useState([])

 const addItem = (item, cantidad) => {

    if (isInCart(item.id)) {

       alert("el prod ya existe")
    }

   alert(`se agrego$`)

    setItems([...items, { cantidad: cantidad, ...item }]);
}


 const removeItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));

 }


 const clearAll = ()=> {
     setItems([])
 }

 const isInCart = (itemId) => {
     items.find(item => item.id === itemId)
     alert("esta en el carro")
 }


 



     
 

 
 

    return(
        <CartContext.Provider value={[items, setItems, addItem, clearAll, removeItem, isInCart]}>
            { children }
        </CartContext.Provider>
    )

}