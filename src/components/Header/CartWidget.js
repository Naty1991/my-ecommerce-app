import React, {useContext, useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { CartContext } from "../Landing/CartContext";
function CartWidget() {

  const {items} = useContext(CartContext);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {

    let cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
    setItemsCount(cantidad);
}, [items])

  console.log(setItemsCount)

  return (
    <div>
      <h1 className="trolley-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      <p className="cart-itemcount">{itemsCount}</p>
    </h1>
    </div>
  
  );
}

export default CartWidget;
