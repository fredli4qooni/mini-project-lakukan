export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function calculateOriginalPrice(price: number, discountPercent: number) {
  return price / (1 - discountPercent / 100);
}