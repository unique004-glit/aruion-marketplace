import { useState } from "react";
import { useMarketplace } from "../context/MarketplaceContext";

export default function AddressManagement() {
  const { addresses, addAddress, setDefaultAddress } = useMarketplace();
  const [showForm, setShowForm] = useState(false);
  const saveAddress = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    addAddress(Object.fromEntries(values.entries()));
    event.currentTarget.reset();
    setShowForm(false);
  };
  return <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6"><div className="flex items-center justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-widest text-purple-600">Address management</p><h1 className="mt-2 text-3xl font-bold">Delivery addresses</h1></div><button className="rounded-lg bg-orange-600 px-4 py-2.5 font-semibold text-white hover:bg-orange-700" onClick={() => setShowForm(true)}>Add address</button></div><div className="mt-6 grid gap-4 md:grid-cols-2">{addresses.map((address) => <article key={address.id} className="rounded-xl bg-white p-5 shadow-sm"><div className="flex justify-between"><h2 className="font-bold">{address.label}</h2>{address.isDefault && <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700">Default</span>}</div><p className="mt-3 text-sm text-slate-600">{address.name}<br />{address.line1}<br />{address.city}, {address.state}<br />{address.phone}</p>{!address.isDefault && <button className="mt-4 text-sm font-semibold text-orange-700 hover:text-orange-800" onClick={() => setDefaultAddress(address.id)}>Make default</button>}</article>)}</div>{showForm && <form className="mt-6 grid gap-3 rounded-xl bg-white p-6 shadow-sm md:grid-cols-2" onSubmit={saveAddress}><input className="rounded-lg border p-3" name="label" placeholder="Label (e.g. Office)" required /><input className="rounded-lg border p-3" name="name" placeholder="Recipient name" required /><input className="rounded-lg border p-3" name="line1" placeholder="Street address" required /><input className="rounded-lg border p-3" name="city" placeholder="City" required /><input className="rounded-lg border p-3" name="state" placeholder="State" required /><input className="rounded-lg border p-3" name="phone" placeholder="Phone number" required /><div className="flex gap-3 md:col-span-2"><button className="rounded-lg bg-orange-600 px-4 py-2.5 font-semibold text-white hover:bg-orange-700" type="submit">Save address</button><button className="rounded-lg border px-4 py-2.5" type="button" onClick={() => setShowForm(false)}>Cancel</button></div></form>}</div>;
}
