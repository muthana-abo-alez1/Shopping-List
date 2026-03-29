import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
