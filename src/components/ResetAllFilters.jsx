import React from "react";
import styles from "./ResetAllFilters.module.scss"
import clsx from "clsx";

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
    setSortOrder("nameAsc");
    setShowInStockOnly(false);
    setInputValue("");
    setPriceRange({ min: 0, max: 1000 });
  }

  const isDefaultState =
    categoryFilter.length === 0 &&
    sortOrder === "nameAsc" &&
    showInStockOnly === false &&
    searchTerm === "" &&
    priceRange.min === 0 &&
    priceRange.max === 1000;

  return (
    <button 
      onClick={resetAll}
      data-testid="reset-button"
      className={isDefaultState ? styles.buttonDisabled : styles.button}
    >
      Reset All
    </button>
  )
}