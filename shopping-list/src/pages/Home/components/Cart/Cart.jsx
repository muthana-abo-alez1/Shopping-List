import React, { useState } from 'react';
import './Cart.scss';
import { useCart } from '../../../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../../../context/OrderContext';


function Cart() {
    const { cartItems, getTotal,setCartItems  } = useCart();
    const { addOrder } = useOrder();
    const navigate = useNavigate(); 
    const [userInfo, setUserInfo] = useState({ name: "", email: "" });

    const handleCheckout = (e) => {
      e.preventDefault();
      if (!cartItems.length) return;
        addOrder(cartItems, userInfo);
      setCartItems([]);
      navigate("/my-orders");
    };
  return (
    <div className="cart">
      <h2 className='title'>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="total-price">Total: ${getTotal()}</p>
      <form className="checkout-form" onSubmit={handleCheckout}>
        <input
          type="text"
          placeholder="Name"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          required
          autoComplete="name"
        />
        <input
          type="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          required
          autoComplete="email"
        />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}

export default Cart;
