import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import { sortProducts } from "./utilities/sortProducts";
import { filterProducts } from "./utilities/filterProducts";
import styles from "./App.module.scss";
import { productsList } from "./products";

import axios from "axios";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [products, setProducts] = useState([]); // products data
  const [categoryFilter, setCategoryFilter] = useState([]); // category filter
  const [searchTerm, setSearchTerm] = useState(""); // search filter
  const [sortOrder, setSortOrder] = useState(""); // sort products
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  
  useEffect(() => {
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
    
    setProducts(productsList); // Step 1: Recieve Products list
  }, []);
  
  const sortedProducts = sortProducts(products, sortOrder); // Step 2: sort products
  
  const visibleProducts = filterProducts(sortedProducts, {  // Step 3: filter products using the external filterProducts utility
    categoryFilter,
    searchTerm,
    showInStockOnly
  });

  return (
    <div>
      <Filters 
        categoryFilter={categoryFilter} 
        setCategoryFilter={setCategoryFilter} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
      />
      <div className={styles.grid}>
        {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}