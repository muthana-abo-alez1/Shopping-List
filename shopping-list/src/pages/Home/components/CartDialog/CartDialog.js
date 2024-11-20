import React from "react";
import "./CartDialog.scss";
import Cart from "../Cart/Cart";
import { useCart } from "../../../../context/CartContext";

function CartDialog() {
  const { isCartOpen, closeCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="overlay" onClick={closeCart}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <Cart />
        <button className="close-cart-button" onClick={closeCart}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartDialog;
