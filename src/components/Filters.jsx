import React from "react";
import Checkbox from "./Checkboxes/Checkbox";
import InStockCheckbox from "./Checkboxes/InStockCheckbox";
import styles from "./Filters.module.scss";
import SortDropdown from "./SortDropdown";
import SearchInput from "./Inputs/SearchInput";
import RangeInput from "./Inputs/RangeInput";
import ResetAllFilters from "./ResetAllFilters";
import Dropdown from "./Checkboxes/Dropdown";

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
        <Dropdown 
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          showInStockOnly={showInStockOnly}
          setShowInStockOnly={setShowInStockOnly}
        />
        <SortDropdown 
          sortOrder={sortOrder} 
          setSortOrder={setSortOrder}
        />
        <ResetAllFilters
          setCategoryFilter={setCategoryFilter}
          categoryFilter={categoryFilter}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
          setShowInStockOnly={setShowInStockOnly}
          showInStockOnly={showInStockOnly}
          setInputValue={setInputValue}
          searchTerm={searchTerm}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      </div>
      <div className={styles.inputs}>
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <RangeInput 
          name="min"
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <RangeInput
          name="max"
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
    </>
  )
}
