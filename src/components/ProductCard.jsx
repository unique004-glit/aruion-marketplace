export default function ProductCard({ product, onView, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
      <div className="space-y-3 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">{product.category}</p>
        <div>
          <h2 className="font-semibold text-slate-900">{product.name}</h2>
          <p className="mt-1 text-sm text-slate-600">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <span className="text-xs text-slate-500">{product.inventory} left</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 rounded-lg border border-orange-200 px-3 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50" onClick={() => onView(product)}>
            Details
          </button>
          <button className="flex-1 rounded-lg bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-700" onClick={() => onAddToCart(product)}>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
