import { useMarketplace } from "../context/MarketplaceContext";

export default function ProductDetails({ onNavigate }) {
  const { selectedProduct: product, addToCart } = useMarketplace();
  if (!product) return null;
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <button className="mb-6 text-sm font-semibold text-orange-700 hover:underline" onClick={() => onNavigate("store")}>← Back to products</button>
      <article className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        <img className="h-80 w-full object-cover md:h-full" src={product.image} alt={product.name} />
        <div className="space-y-6 p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">{product.category}</p>
          <div><h1 className="text-3xl font-bold text-slate-900">{product.name}</h1><p className="mt-4 text-slate-600">{product.description}</p></div>
          <p className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</p>
          <p className="text-sm text-slate-500">{product.inventory} items available</p>
          <button className="w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </article>
    </div>
  );
}
