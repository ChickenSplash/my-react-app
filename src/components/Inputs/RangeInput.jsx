import React from 'react'
import styles from "./Input.module.scss";

export default function RangeInput({ name, priceRange, setPriceRange }) {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <input
        type="number"
        name={name}
        placeholder={name + " Price"}
        value={priceRange[name]}
        onChange={handlePriceChange}
        className={styles.input}
      />
    </>
  )
}