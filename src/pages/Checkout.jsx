import { useState } from "react";
import { useMarketplace } from "../context/MarketplaceContext";
import { processDemoPayment } from "../services/paymentService";

export default function Checkout({ onNavigate }) {
  const { cart, cartTotal, addresses, placeOrder } = useMarketplace();
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const submitCheckout = async (event) => {
    event.preventDefault();
    const payment = await processDemoPayment({ amount: cartTotal, method: paymentMethod });
    const order = placeOrder();
    setMessage(`Payment ${payment.status}. Order ${order.id} has been created.`);
  };
  if (!cart.length && !message) return <div className="mx-auto max-w-3xl px-4 py-16 text-center"><h1 className="text-2xl font-bold">Add an item before checkout.</h1><button className="mt-4 rounded-lg border border-orange-200 px-4 py-2.5 font-semibold text-orange-700 hover:bg-orange-50" onClick={() => onNavigate("store")}>Back to store</button></div>;
  if (message) return <div className="mx-auto max-w-xl px-4 py-16 text-center"><h1 className="text-2xl font-bold text-slate-900">Thank you for your order</h1><p className="mt-3 text-slate-600">{message}</p><button className="mt-6 rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700" onClick={() => onNavigate("orders")}>Track your order</button></div>;
  return (
    <form className="mx-auto grid max-w-5xl gap-6 px-4 py-8 lg:grid-cols-[1fr_20rem]" onSubmit={submitCheckout}>
      <section className="space-y-6"><div className="rounded-xl bg-white p-6 shadow-sm"><h1 className="text-2xl font-bold">Checkout</h1><h2 className="mt-6 font-semibold">Delivery address</h2>{addresses.map((address) => <label key={address.id} className="mt-3 flex cursor-pointer gap-3 rounded-lg border p-4 transition has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50"><input defaultChecked={address.isDefault} name="address" type="radio" /><span>{address.name}<br />{address.line1}, {address.city}, {address.state}<br />{address.phone}</span></label>)}</div><div className="rounded-xl bg-white p-6 shadow-sm"><h2 className="font-semibold">Payment method</h2><select className="mt-4 w-full rounded-lg border border-slate-300 p-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100" value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}><option value="card">Card (demo)</option><option value="bank-transfer">Bank transfer (demo)</option><option value="cash-on-delivery">Cash on delivery (demo)</option></select></div></section>
      <aside className="h-fit rounded-xl bg-white p-6 shadow-sm"><h2 className="font-bold">Total</h2><p className="mt-4 text-2xl font-bold">${cartTotal.toFixed(2)}</p><p className="mt-2 text-sm text-slate-500">{cart.length} item{cart.length === 1 ? "" : "s"}</p><button className="mt-6 w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700" type="submit">Place order</button><p className="mt-3 text-xs text-slate-500">This uses the included demo payment adapter.</p></aside>
    </form>
  );
}
