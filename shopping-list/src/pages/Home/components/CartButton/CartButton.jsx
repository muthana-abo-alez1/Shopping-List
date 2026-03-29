import "./CartButton.scss";
import { useCart } from "../../../../context/CartContext";

function CartButton() {
  const { toggleCart } = useCart();

  return (
    <button className="fixed-cart-button" onClick={toggleCart}>
      🛒
    </button>
  );
}

export default CartButton;
