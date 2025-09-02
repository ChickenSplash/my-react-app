// Centralized filtering logic for products
export function filterProducts(products, { categoryFilter, searchTerm, showInStockOnly }) {
  let result = [...products];

  // Filter by in-stock status
  if (showInStockOnly) {
    result = result.filter(product => product.stock_amount > 0);
  }

  // Filter by category
  if (categoryFilter.length > 0) {
    result = result.filter(product => categoryFilter.includes(product.category.toLowerCase()));
  }

  // Filter by search term
  if (searchTerm.trim() !== "") {
    result = result.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return result;
}