import { useMarketplace } from "../context/MarketplaceContext";

const customerLinks = [
  ["store", "Store"],
  ["cart", "Cart"],
  ["orders", "Orders"],
  ["account", "Account"],
];

export default function Navigation({ view, onNavigate, onSignOut }) {
  const { cartCount } = useMarketplace();

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6">
        <button className="mr-auto text-lg font-bold text-orange-700" onClick={() => onNavigate("store")}>
          Aruion Marketplace
        </button>
        {customerLinks.map(([id, label]) => (
          <button
            key={id}
            className={`rounded-lg px-3 py-2 text-sm font-medium ${view === id ? "bg-orange-100 text-orange-700" : "text-slate-600 hover:bg-slate-100"}`}
            onClick={() => onNavigate(id)}
          >
            {label}{id === "cart" && cartCount ? ` (${cartCount})` : ""}
          </button>
        ))}
        <button
          className={`rounded-lg px-3 py-2 text-sm font-medium ${view.startsWith("admin") ? "bg-slate-800 text-white" : "text-slate-600 hover:bg-slate-100"}`}
          onClick={() => onNavigate("admin-dashboard")}
        >
          Admin
        </button>
        <button className="text-sm font-medium text-slate-500 hover:text-slate-900" onClick={onSignOut}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
