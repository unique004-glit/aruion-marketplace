import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories } from "../data/catalog";
import { useMarketplace } from "../context/MarketplaceContext";

export default function ProductListing({ onNavigate }) {
  const { products, addToCart, setSelectedProduct } = useMarketplace();
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const visibleProducts = useMemo(() => {
    const filtered = products.filter(
      (product) =>
        (category === "All" || product.category === category) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    return [...filtered].sort((first, second) =>
      sort === "price-low" ? first.price - second.price : sort === "price-high" ? second.price - first.price : 0
    );
  }, [products, category, search, sort]);

  const showDetails = (product) => {
    setSelectedProduct(product);
    onNavigate("product-details");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Shop products</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Find something you will love</h1>
      </div>
      <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-[1fr_auto_auto]">
        <input className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" />
        <select className="rounded-lg border border-slate-300 px-3 py-2.5" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="rounded-lg border border-slate-300 px-3 py-2.5" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option>
        </select>
      </div>
      <p className="text-sm text-slate-600">{visibleProducts.length} product{visibleProducts.length === 1 ? "" : "s"} found</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onView={showDetails} onAddToCart={addToCart} />)}
      </div>
    </div>
  );
}
