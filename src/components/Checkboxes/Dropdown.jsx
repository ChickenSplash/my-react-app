import React, { useEffect, useRef, useState } from "react";
import Checkbox from "./Checkbox";
import InStockCheckbox from "./InStockCheckbox";
import styles from "./Dropdown.module.scss";
import clsx from "clsx";

export default function Dropdown({
  categoryFilter,
  setCategoryFilter,
  showInStockOnly,
  setShowInStockOnly,
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  // upon clicking outside the dropdown, close it again
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(styles.dropdownToggle, isOpen && styles.isOpen)}
      >
        Filters
      </button>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
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
        </div>
      )}
    </div>
  );
}
