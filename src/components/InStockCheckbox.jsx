import React from "react";
import styles from "./InStockCheckbox.module.scss";

export default function Checkbox({ showInStockOnly, setShowInStockOnly }) {
  return (
    <label htmlFor="showInStock" className={styles.checkboxLabel}>
      <input
        id="showInStock"
        type="checkbox"
        value="in stock"
        className={styles.checkboxInput}
        onChange={(e) => setShowInStockOnly(e.target.checked)}
        checked={showInStockOnly}
      />
      <span className={styles.checkboxText}>In Stock</span>
    </label>
  );
}
