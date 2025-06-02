
function calculateDiscount(originalPrice, discountPercent) {
  if (typeof originalPrice !== 'number' || typeof discountPercent !== 'number') return originalPrice;
  if (discountPercent <= 0) return originalPrice;
  if (discountPercent >= 100) return 0;
  return +(originalPrice * (1 - discountPercent / 100)).toFixed(2);
}

export default calculateDiscount;
