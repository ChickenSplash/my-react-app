import React from "react";
import styles from "./Checkbox.module.scss";
import clsx from "clsx";

export default function Checkbox({ showInStockOnly, setShowInStockOnly }) {
  return (
    <label htmlFor="showInStock" className={clsx(styles.checkboxLabel, showInStockOnly && styles.checked)}>
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
