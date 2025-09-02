import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import { sortProducts } from "./utilities/sortProducts";
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
    
    setProducts(productsList); // using hardcoded products for now
  }, []);
  
  let sortedProducts = sortProducts(products, sortOrder); // take the incoming poducts list and sort them
  
  if (showInStockOnly) { // take the incoming poducts list and remove the out of stock products if true
    sortedProducts = sortedProducts.filter(product => product.stock_amount > 0);
  }

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
        {sortedProducts
          .filter((product) => {
            if (categoryFilter.length === 0) return true; // so it doesnt filter anything
            return categoryFilter.includes(product.category.toLowerCase());
          })
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
}