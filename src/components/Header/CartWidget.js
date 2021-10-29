import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
function CartWidget() {
  return (
    <h1 className="trolley-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
    </h1>
  );
}

export default CartWidget;
