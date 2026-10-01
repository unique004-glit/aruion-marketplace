export default function CustomerAccount({ onNavigate }) {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6">
      <div><p className="text-sm font-semibold uppercase tracking-widest text-purple-600">Customer account</p><h1 className="mt-2 text-3xl font-bold">Account settings</h1></div>
      <div className="grid gap-6 md:grid-cols-2"><section className="rounded-xl bg-white p-6 shadow-sm"><h2 className="text-lg font-bold">Profile</h2><div className="mt-5 space-y-3"><label className="block text-sm">Full name<input className="mt-1 w-full rounded-lg border p-3" defaultValue="Aruion Customer" /></label><label className="block text-sm">Email<input className="mt-1 w-full rounded-lg border p-3" defaultValue="customer@example.com" /></label><button className="rounded-lg bg-orange-600 px-4 py-2.5 font-semibold text-white hover:bg-orange-700">Save changes</button></div></section><section className="rounded-xl bg-white p-6 shadow-sm"><h2 className="text-lg font-bold">Quick actions</h2><div className="mt-5 grid gap-3"><button className="rounded-lg border p-3 text-left font-medium hover:bg-slate-50" onClick={() => onNavigate("addresses")}>Manage delivery addresses →</button><button className="rounded-lg border p-3 text-left font-medium hover:bg-slate-50" onClick={() => onNavigate("orders")}>View orders and tracking →</button><button className="rounded-lg border p-3 text-left font-medium hover:bg-slate-50" onClick={() => onNavigate("store")}>Continue shopping →</button></div></section></div>
    </div>
  );
}
