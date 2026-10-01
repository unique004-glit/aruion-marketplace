import { useState } from "react";
import { useMarketplace } from "../context/MarketplaceContext";
import { createDemoShipment } from "../services/logisticsService";

export default function Logistics() {
  const { orders } = useMarketplace();
  const [shipments, setShipments] = useState([]);
  const createShipment = (orderId) => setShipments((current) => [...current, createDemoShipment(orderId)]);
  return <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6"><p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Delivery and logistics</p><h1 className="mt-2 text-3xl font-bold">Shipments</h1><p className="mt-2 text-slate-600">Create a demo delivery shipment and tracking reference for fulfilment-ready orders.</p><div className="mt-6 grid gap-4 md:grid-cols-2">{orders.map((order) => <article key={order.id} className="rounded-xl bg-white p-6 shadow-sm"><h2 className="font-bold">{order.id}</h2><p className="mt-1 text-sm text-slate-600">Current status: {order.status}</p><p className="mt-3 text-sm">Existing tracking: <strong>{order.trackingNumber}</strong></p><button className="mt-5 rounded-lg bg-orange-600 px-4 py-2.5 font-semibold text-white hover:bg-orange-700" onClick={() => createShipment(order.id)}>Create shipment</button></article>)}</div>{shipments.length > 0 && <section className="mt-8 rounded-xl bg-white p-6 shadow-sm"><h2 className="text-lg font-bold">Created shipments</h2><div className="mt-4 space-y-3">{shipments.map((shipment) => <p key={shipment.trackingNumber} className="rounded-lg bg-slate-50 p-3 text-sm"><strong>{shipment.orderId}</strong> — {shipment.carrier}, tracking <strong>{shipment.trackingNumber}</strong> ({shipment.status})</p>)}</div></section>}</div>;
}
