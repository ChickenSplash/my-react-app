import React from 'react'
import styles from "./RangeInput.module.scss";

export default function RangeInput({ priceRange, setPriceRange }) {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="number"
        name="min"
        placeholder="Min"
        value={priceRange["min"]}
        onChange={handlePriceChange}
        className={styles.input}
      />
      <input
        type="number"
        name="max"
        placeholder="Max"
        value={priceRange["max"]}
        onChange={handlePriceChange}
        className={styles.input}
      />
    </div>
  )
}