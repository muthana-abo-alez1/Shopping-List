import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./MyOrder.scss";
import OrderCard from "./components/OrderCard/OrderCard";
import { useOrder } from "../../context/OrderContext";

function MyOrder() {
  const navigate = useNavigate();
  const { orders } = useOrder();

  return (
    <div className="my-order">
      <button 
        className="back-to-shop-btn" 
        onClick={() => navigate("/home")} 
      >
        Back to Shop
      </button>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="order-list">
          {orders.map((order,index) => (
            <OrderCard key={order.id} order={order} index={orders.length-index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrder;
