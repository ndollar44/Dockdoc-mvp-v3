export function computeQuote(partsSubtotal: number) {
  const laborRate = 245, minHours = 2, markup = 0.15, taxRate = 0.06; // MI parts-only
  const labor = laborRate * minHours;
  const parts = partsSubtotal * (1 + markup);
  const tax = parts * taxRate;
  const total = labor + parts + tax;
  const r = (n:number)=>Math.round(n*100)/100;
  return { labor: r(labor), parts: r(parts), tax: r(tax), total: r(total) };
}
