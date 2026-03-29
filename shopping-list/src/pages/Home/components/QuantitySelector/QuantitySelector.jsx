import React from "react";
import "./QuantitySelector.scss";

function QuantitySelector({ quantity, onIncrement, onDecrement }) {
  return (
    <div className="quantity-selector">
      <button className="quantity-btn" onClick={onDecrement}>
        -
      </button>
      <span>{quantity}</span>
      <button className="quantity-btn" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
