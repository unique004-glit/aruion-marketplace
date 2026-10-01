export function createDemoShipment(orderId) {
  return {
    orderId,
    carrier: "Aruion Delivery",
    trackingNumber: `ARU-${Math.floor(100000 + Math.random() * 900000)}`,
    status: "Shipment created",
  };
}
