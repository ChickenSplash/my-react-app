import React from "react";
import Checkbox from "./Checkboxes/Checkbox";
import InStockCheckbox from "./Checkboxes/InStockCheckbox";
import styles from "./Filters.module.scss";
import SortDropdown from "./SortDropdown";
import SearchInput from "./Inputs/SearchInput";
import RangeInput from "./Inputs/RangeInput";

export default function Filters({
  categoryFilter, 
  setCategoryFilter, 
  sortOrder, 
  setSortOrder, 
  showInStockOnly, 
  setShowInStockOnly,
  inputValue,
  setInputValue,
  priceRange,
  setPriceRange,
}) {
  return (
    <div className={styles.options}>
      <div className={styles.checkboxes}>
        <Checkbox 
          label="Books"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Electronics"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Clothing"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Home"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <Checkbox 
          label="Toys"
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter}
        />
        <InStockCheckbox
          showInStockOnly={showInStockOnly}
          setShowInStockOnly={setShowInStockOnly}
        />
      </div>
      <div className={styles.secondaryOptions}>
        <SortDropdown 
          sortOrder={sortOrder} 
          setSortOrder={setSortOrder}
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
      <div>
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  )
}
