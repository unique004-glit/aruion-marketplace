import { createContext, useContext, useState } from "react";
import { initialAddresses, initialOrders, products as initialProducts } from "../data/catalog";

const MarketplaceContext = createContext(null);

export function MarketplaceProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(initialOrders);
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedProduct, setSelectedProduct] = useState(initialProducts[0]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => (item.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const placeOrder = () => {
    const order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().slice(0, 10),
      status: "Processing",
      total: cartTotal,
      trackingNumber: "Pending assignment",
      items: cart.map(({ id, quantity }) => ({ productId: id, quantity })),
    };
    setOrders((currentOrders) => [order, ...currentOrders]);
    setCart([]);
    return order;
  };

  const addAddress = (address) => {
    setAddresses((currentAddresses) => [
      ...currentAddresses.map((item) => ({ ...item, isDefault: false })),
      { ...address, id: `address-${Date.now()}`, isDefault: currentAddresses.length === 0 },
    ]);
  };

  const setDefaultAddress = (addressId) => {
    setAddresses((currentAddresses) =>
      currentAddresses.map((address) => ({ ...address, isDefault: address.id === addressId }))
    );
  };

  const addProduct = (product) => {
    setProducts((currentProducts) => [
      ...currentProducts,
      { ...product, id: product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
    ]);
  };

  const updateInventory = (productId, inventory) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, inventory: Number(inventory) } : product
      )
    );
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) => (order.id === orderId ? { ...order, status } : order))
    );
  };

  const value = {
    products,
    cart,
    orders,
    addresses,
    selectedProduct,
    cartTotal,
    cartCount,
    addToCart,
    updateQuantity,
    placeOrder,
    addAddress,
    setDefaultAddress,
    addProduct,
    updateInventory,
    updateOrderStatus,
    setSelectedProduct,
  };

  return <MarketplaceContext.Provider value={value}>{children}</MarketplaceContext.Provider>;
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);
  if (!context) throw new Error("useMarketplace must be used inside MarketplaceProvider.");
  return context;
}
