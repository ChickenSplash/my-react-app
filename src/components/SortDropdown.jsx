// resources/js/components/SortDropdown.jsx
import React from "react";
import styles from "./SortDropdown.module.scss";

// Sorting dropdown options, its only job is to tell its parent when it updates, updating sortOrder

export default function SortDropdown({ sortOrder, setSortOrder }) {
  return (
    <select
      className={styles.sortDropdown}
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="">Default</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="ratingLow">Rating: Low to High</option>
      <option value="ratingHigh">Rating: High to Low</option>
    </select>
  );
}
