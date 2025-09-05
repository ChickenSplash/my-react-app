import React from "react";

export default function ResetAllFilters({ 
  setCategoryFilter,
  setSortOrder,
  setShowInStockOnly,
  setInputValue,
  setPriceRange,
}) {
  function resetAll() {
    setCategoryFilter("");
    setSortOrder("");
    setShowInStockOnly(false);
    setInputValue("");
    setPriceRange({ min: "", max: "" });
  }
  return (
    <button onClick={resetAll}>
      Reset All Filters
    </button>
  )
}