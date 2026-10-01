import { useState } from "react";
import Navigation from "./components/Navigation";
import { MarketplaceProvider } from "./context/MarketplaceContext";
import Home from "./Home";
import AddressManagement from "./pages/AddressManagement";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CustomerAccount from "./pages/CustomerAccount";
import Logistics from "./pages/Logistics";
import OrderManagement from "./pages/OrderManagement";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import ProductListing from "./pages/ProductListing";
import ProductManagement from "./pages/ProductManagement";

function MarketplaceApp({ onSignOut }) {
  const [view, setView] = useState("store");
  const pages = {
    store: <ProductListing onNavigate={setView} />,
    "product-details": <ProductDetails onNavigate={setView} />,
    cart: <Cart onNavigate={setView} />,
    checkout: <Checkout onNavigate={setView} />,
    account: <CustomerAccount onNavigate={setView} />,
    addresses: <AddressManagement />,
    orders: <Orders />,
    "admin-dashboard": <AdminDashboard onNavigate={setView} />,
    "product-management": <ProductManagement />,
    "order-management": <OrderManagement />,
    logistics: <Logistics />,
  };

  return (
    <>
      <Navigation view={view} onNavigate={setView} onSignOut={onSignOut} />
      {pages[view] || pages.store}
    </>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <MarketplaceProvider>
      {isAuthenticated ? (
        <MarketplaceApp onSignOut={() => setIsAuthenticated(false)} />
      ) : (
        <Home onAuthenticated={() => setIsAuthenticated(true)} />
      )}
    </MarketplaceProvider>
  );
}
