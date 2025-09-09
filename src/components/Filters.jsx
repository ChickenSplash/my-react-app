import React from "react";
import styles from "./Filters.module.scss";
import SortDropdown from "./SortDropdown";
import SearchInput from "./Inputs/SearchInput";

export default function Filters({
  categoryFilter, 
  setCategoryFilter, 
  sortOrder, 
  setSortOrder, 
  showInStockOnly, 
  setShowInStockOnly,
  inputValue,
  setInputValue,
  searchTerm,
  priceRange,
  setPriceRange,
}) {
  return (
    <>
      <div className={styles.options}>
        <SortDropdown 
          sortOrder={sortOrder} 
          setSortOrder={setSortOrder}
        />
      </div>
      <div className={styles.inputs}>
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </>
  )
}
