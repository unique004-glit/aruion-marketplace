export async function processDemoPayment({ amount, method }) {
  if (!amount || amount <= 0) throw new Error("A payment amount is required.");
  return {
    id: `pay_${Date.now()}`,
    status: "approved",
    amount,
    method,
  };
}
