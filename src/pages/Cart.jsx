import { useMarketplace } from "../context/MarketplaceContext";

export default function Cart({ onNavigate }) {
  const { cart, cartTotal, updateQuantity } = useMarketplace();
  if (!cart.length) return <div className="mx-auto max-w-3xl px-4 py-16 text-center"><h1 className="text-2xl font-bold">Your cart is empty</h1><button className="mt-5 rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700" onClick={() => onNavigate("store")}>Continue shopping</button></div>;
  return (
    <div className="mx-auto grid max-w-5xl gap-6 px-4 py-8 lg:grid-cols-[1fr_20rem]">
      <section><h1 className="mb-5 text-3xl font-bold">Shopping cart</h1><div className="space-y-3">{cart.map((item) => <article key={item.id} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"><img className="h-24 w-24 rounded-lg object-cover" src={item.image} alt="" /><div className="min-w-0 flex-1"><h2 className="font-semibold">{item.name}</h2><p className="mt-1 text-sm text-slate-500">${item.price.toFixed(2)} each</p><div className="mt-3 flex items-center gap-3"><button className="rounded border px-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button className="rounded border px-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button><button className="ml-auto text-sm font-medium text-rose-600" onClick={() => updateQuantity(item.id, 0)}>Remove</button></div></div></article>)}</div></section>
      <aside className="h-fit rounded-xl bg-white p-6 shadow-sm"><h2 className="text-lg font-bold">Order summary</h2><div className="my-5 flex justify-between text-slate-600"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div><div className="border-t pt-4 text-lg font-bold"><span>Total</span><span className="float-right">${cartTotal.toFixed(2)}</span></div><button className="mt-6 w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700" onClick={() => onNavigate("checkout")}>Proceed to checkout</button></aside>
    </div>
  );
}
