import React from "react";
import Checkbox from "./Checkbox";
import InStockCheckbox from "./InStockCheckbox";
import styles from "./Filters.module.scss";
import SortDropdown from "./SortDropdown";

export default function Filters({
  categoryFilter, 
  setCategoryFilter, 
  sortOrder, 
  setSortOrder, 
  showInStockOnly, 
  setShowInStockOnly
}) {
  return (
    <div className={styles.options}>
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
      <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder}/>
    </div>
  )
}
