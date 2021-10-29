import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/Landing/CartContext";
import ItemCart from "../components/Landing/ItemCart";

const Cart = () => {
  const [ items, removeItem ] = useContext(CartContext);
  const [itemsTotales, setItemsTotales] = useState(0);
  
//   useEffect(()=>{
//     let total = items.reduce((act, curr) => act + (curr.price * curr.length), 0);
//     setItemsTotales(total);

  
//   }, [items])
  console.log(items)

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
          <div>
            {items?.map(item => <ItemCart item={item} onRemove={removeItem}></ItemCart>)}
          </div>
          <div>{itemsTotales}</div>
        </div>
    </div>
  );
};

export default Cart;
