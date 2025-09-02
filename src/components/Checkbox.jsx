import React from "react";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ label, categoryFilter, setCategoryFilter }) {
  const safeId = label.toLowerCase().replace(/\s+/g, "-");

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // add to filters
      setCategoryFilter((prev) => [...prev, value]);
    } else {
      // remove from filters
      setCategoryFilter((prev) => prev.filter((cat) => cat !== value));
    }
  };

  return (
    <label htmlFor={safeId} className={styles.checkboxLabel}>
      <input
        id={safeId}
        type="checkbox"
        value={label.toLowerCase()}
        className={styles.checkboxInput}
        onChange={handleCheckboxChange}
        checked={categoryFilter.includes(label.toLowerCase())}
      />
      <span className={styles.checkboxText}>{label}</span>
    </label>
  );
}

