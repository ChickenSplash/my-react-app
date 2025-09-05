import React from 'react'
import styles from "./SearchInput.module.scss";

export default function SearchInput({ inputValue, setInputValue }) {
  return (
    <input 
      type="text"
      placeholder="Search..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className={styles.input}
    />
  )
}