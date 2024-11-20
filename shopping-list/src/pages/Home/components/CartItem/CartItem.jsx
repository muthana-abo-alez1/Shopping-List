import React from "react";
import { useCart } from "../../../../context/CartContext";
import "./CartItem.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { calculateItemPrice } from "../../../utils/priceUtils";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <li className="cart-item">
      <div className="cart-item-details">
        <img src={item.img} alt={item.name} className="cart-item-image" />
        <div className="cart-item-info">
          <p>{item.name}</p>

          <QuantitySelector
            quantity={item.quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />

          <p>${calculateItemPrice(item.price, item.quantity)}</p>
        </div>
        <button
          className="remove-item-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
