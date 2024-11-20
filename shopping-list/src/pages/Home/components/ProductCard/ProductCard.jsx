import React, { useState } from "react";
import { useCart } from "../../../../context/CartContext";
import "./ProductCard.scss";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

function ProductCard({ product }) {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsInCart(false);
  };

  return (
    <div className="product">
      <img src={product.img} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>

      <QuantitySelector
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      {isInCart ? (
        <button className="remove-from-cart-btn" onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
