import React from "react";
import styles from "./Filters.module.scss";
import SortDropdown from "./SortDropdown";
import SearchInput from "./Inputs/SearchInput";
import Hamburger from "./Hamburger";

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
  isOpen,
  setIsOpen
}) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.titleBar}>
          <Hamburger 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <h1>Product Catalogue</h1>
        </div>
        <div className={styles.options}>
          <SearchInput
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <SortDropdown 
            sortOrder={sortOrder} 
            setSortOrder={setSortOrder}
          />
        </div>
      </div>
    </div>
  )
}
