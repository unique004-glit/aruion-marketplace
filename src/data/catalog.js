export const categories = ["All", "Electronics", "Home", "Fashion", "Beauty"];

export const products = [
  {
    id: "wireless-headphones",
    name: "Orbit Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    inventory: 18,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "Comfortable noise-isolating headphones with a 30-hour battery life.",
  },
  {
    id: "desk-lamp",
    name: "Halo Desk Lamp",
    category: "Home",
    price: 42.5,
    inventory: 9,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    description: "A dimmable LED lamp designed for focused work and relaxed evenings.",
  },
  {
    id: "weekend-bag",
    name: "Canvas Weekend Bag",
    category: "Fashion",
    price: 64,
    inventory: 26,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    description: "A durable carry-on bag with room for every short adventure.",
  },
  {
    id: "skin-care-set",
    name: "Daily Care Set",
    category: "Beauty",
    price: 35.75,
    inventory: 14,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    description: "A simple three-step skincare routine for hydrated, healthy-looking skin.",
  },
];

export const initialAddresses = [
  {
    id: "address-home",
    label: "Home",
    name: "Aruion Customer",
    line1: "14 Market Street",
    city: "Lagos",
    state: "Lagos",
    phone: "+234 800 000 0000",
    isDefault: true,
  },
];

export const initialOrders = [
  {
    id: "ORD-1001",
    date: "2026-09-28",
    status: "Out for delivery",
    total: 89.99,
    trackingNumber: "ARU-908341",
    items: [{ productId: "wireless-headphones", quantity: 1 }],
  },
];
