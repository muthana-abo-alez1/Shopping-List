import React from "react";
import { useNavigate } from "react-router-dom";
import CartButton from "./components/CartButton/CartButton";
import ProductsSection from "./components/ProductSection/ProductsSection";
import "./Home.scss";
import CartDialog from "./components/CartDialog/CartDialog";
const Home = () => {
  const navigate = useNavigate();

  const handleGoToMyOrders = () => {
    navigate("/my-orders");
  };

  return (
    <div className="home">
      <h1>Shopping Cart</h1>
      <button onClick={handleGoToMyOrders} className="my-orders-btn">
        Go to My Orders
      </button>
      <ProductsSection />
      <CartButton />
      <CartDialog/>
    </div>
  );
};

export default Home;
