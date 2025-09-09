import React from "react";
import styles from "./FilterOptions.module.scss";
import Checkbox from "./Checkboxes/Checkbox";
import InStockCheckbox from "./Checkboxes/InStockCheckbox";
import ResetAllFilters from "./ResetAllFilters";
import RangeSlider from "./RangeSlider";

export default function FilterOptions({
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
    <div className={styles.options}>
      <RangeSlider
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <h3>Catagory Filters</h3>
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
      <div style={{ marginTop: "15px" }}/>
      <InStockCheckbox
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
      />
      <div style={{ marginTop: "15px" }}/>
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
  )
}
