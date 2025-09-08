import React from "react";
import styles from "./ResetAllFilters.module.scss"

export default function ResetAllFilters({ 
  setCategoryFilter,
  categoryFilter,
  setSortOrder,
  sortOrder,
  setShowInStockOnly,
  showInStockOnly,
  setInputValue,
  searchTerm,
  setPriceRange,
  priceRange,
}) {
  function resetAll() {
    setCategoryFilter([]);
    setSortOrder("");
    setShowInStockOnly(false);
    setInputValue("");
    setPriceRange({ min: "", max: "" });
  }

  if (
    categoryFilter.length === 0
    && sortOrder === ""
    && showInStockOnly === false
    && searchTerm === ""
    && priceRange.min === ""
    && priceRange.max === ""
  ) {
    return null
  }

  return (
    <button 
      onClick={resetAll}
      className={styles.button}
    >
      Reset All
    </button>
  )
}