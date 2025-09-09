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
      <option value="nameAsc">Sort Alphabetically: A → Z</option>
      <option value="nameDesc">Sort Alphabetically: Z → A</option>
      <option value="priceLow">Sort by Price: Low → High</option>
      <option value="priceHigh">Sort by Price: High → Low</option>
      <option value="ratingLow">Sort by Rating: Low → High</option>
      <option value="ratingHigh">Sort by Rating: High → Low</option>
    </select>
  );
}
