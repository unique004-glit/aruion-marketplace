import { useState } from "react";
import { useMarketplace } from "../context/MarketplaceContext";

export default function ProductManagement() {
  const { products, addProduct, updateInventory } = useMarketplace();
  const [showForm, setShowForm] = useState(false);
  const createProduct = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget).entries());
    addProduct({ ...fields, price: Number(fields.price), inventory: Number(fields.inventory), image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80", description: "New marketplace product." });
    event.currentTarget.reset();
    setShowForm(false);
  };
  return <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Product and inventory management</p><h1 className="mt-2 text-3xl font-bold">Catalog</h1></div><button className="rounded-lg bg-orange-600 px-4 py-2.5 font-semibold text-white hover:bg-orange-700" onClick={() => setShowForm(true)}>Add product</button></div>{showForm && <form className="mt-6 grid gap-3 rounded-xl bg-white p-6 shadow-sm md:grid-cols-2" onSubmit={createProduct}><input className="rounded-lg border p-3" name="name" placeholder="Product name" required /><select className="rounded-lg border p-3" name="category"><option>Electronics</option><option>Home</option><option>Fashion</option><option>Beauty</option></select><input className="rounded-lg border p-3" min="0" name="price" placeholder="Price" step="0.01" type="number" required /><input className="rounded-lg border p-3" min="0" name="inventory" placeholder="Inventory" type="number" required /><div className="flex gap-3 md:col-span-2"><button className="rounded-lg bg-orange-600 px-4 py-2.5 font-semibold text-white hover:bg-orange-700" type="submit">Create product</button><button className="rounded-lg border px-4 py-2.5" type="button" onClick={() => setShowForm(false)}>Cancel</button></div></form>}<div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-600"><tr><th className="p-4">Product</th><th className="p-4">Category</th><th className="p-4">Price</th><th className="p-4">Inventory</th></tr></thead><tbody>{products.map((product) => <tr key={product.id} className="border-t"><td className="p-4 font-medium">{product.name}</td><td className="p-4">{product.category}</td><td className="p-4">${product.price.toFixed(2)}</td><td className="p-4"><input className="w-20 rounded border px-2 py-1" min="0" type="number" value={product.inventory} onChange={(event) => updateInventory(product.id, event.target.value)} /></td></tr>)}</tbody></table></div></div>;
}
