export function sortProducts(products, sortOrder) {
  return [...products].sort((a, b) => {
    if (sortOrder === "priceLow") return a.price - b.price;
    if (sortOrder === "priceHigh") return b.price - a.price;
    if (sortOrder === "ratingLow") return a.rating - b.rating;
    if (sortOrder === "ratingHigh") return b.rating - a.rating;
    return 0; // no sorting
  });
}