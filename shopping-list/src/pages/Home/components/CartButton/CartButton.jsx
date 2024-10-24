import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./CartButton.scss";

function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

 

  return (
    <div>
      <button className="fixed-cart-button" onClick={toggleCart}>
        🛒
      </button>
      {isCartOpen && (
        <div className="overlay" onClick={closeCart}>
          <div className="cart-popup" onClick={(e)=>{e.stopPropagation()}}>
            <Cart />
            <button className="close-cart-button" onClick={closeCart}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartButton;
