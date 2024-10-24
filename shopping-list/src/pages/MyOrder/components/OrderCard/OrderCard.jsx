import React from "react";
import "./OrderCard.scss";
import { formatDate } from "../../../../shared/formatters/DateFormatter";

function OrderCard({ order, index }) {
  return (
    <div className="order-card">
      <h3 className="order-title">#Order{index}</h3>
      <div className="order-details">
        <div className="order-header">
        <p><strong>Placed on:</strong> {formatDate(order.date)}</p>
        <p><strong>Name:</strong> {order.user.name}</p>
          <p><strong>Email:</strong> {order.user.email}</p>
        </div>
        <ul className="order-items">
          {order.items.map((item) => (
            <li key={item.id} className="order-item">
              <img src={item.img} alt={item.name} className="order-item-image" />
              <div className="item-details">
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="total-price">
          Total: $
          {order.items
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default OrderCard;
