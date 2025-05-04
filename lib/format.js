export function formatCurrency(value) {
  const number = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(number)) return "₹0.00";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number);
}
