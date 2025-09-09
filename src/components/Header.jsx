import React from "react";
import styles from "./Header.module.scss";
import SortDropdown from "./SortDropdown";
import SearchInput from "./Inputs/SearchInput";
import Hamburger from "./Sidebar/Hamburger";

export default function Header({
  sortOrder, 
  setSortOrder, 
  inputValue,
  setInputValue,
  isOpen,
  setIsOpen
}) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.titleBar}>
          <Hamburger 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <h1>Product Catalogue</h1>
        </div>
        <div className={styles.options}>
          <SearchInput
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <SortDropdown 
            sortOrder={sortOrder} 
            setSortOrder={setSortOrder}
          />
        </div>
      </div>
    </div>
  )
}
