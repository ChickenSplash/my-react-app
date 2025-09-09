import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import Sidebar from "./components/Sidebar/Sidebar";
import { sortProducts } from "./utilities/sortProducts";
import { filterProducts } from "./utilities/filterProducts";
import styles from "./App.module.scss";
import { productsList } from "./products";

import axios from "axios";
import ProductList from "./components/ProductList";

export default function App() {  
  const [products, setProducts] = useState([]); // products data
  const [categoryFilter, setCategoryFilter] = useState([]); // category filter
  const [inputValue, setInputValue] = useState(""); // live typing
  const [searchTerm, setSearchTerm] = useState(""); // search filter
  const [sortOrder, setSortOrder] = useState(""); // sort products
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [debouncedPriceRange, setDebouncedPriceRange] = useState({ min: 0, max: 1000 });
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // functionality for sidebar
  
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300); // wait 300ms after typing stops

    return () => clearTimeout(delayDebounce); // cleanup on re-type
  }, [inputValue]);
  
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedPriceRange(priceRange);
    }, 300);
    
    return () => clearTimeout(delayDebounce);
  }, [priceRange]);

  useEffect(() => {
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
    
    setTimeout(() => { // simulate api response time
      setProducts(productsList); // Step 1: Recieve Products list
      setIsLoading(false);
    }, 500)
  }, []);
  
  const sortedProducts = sortProducts(products, sortOrder); // Step 2: sort products
  
  // filterProducts(object array, {useStates' values})
  const visibleProducts = filterProducts(sortedProducts, { // Step 3: filter products using the external filterProducts utility, passing in the hooks' current value so it know how to filter the products
    categoryFilter,
    searchTerm,
    showInStockOnly,
    debouncedPriceRange
  });

  return (
    <>
      <Sidebar 
        categoryFilter={categoryFilter} 
        setCategoryFilter={setCategoryFilter} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchTerm={searchTerm}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Filters 
        categoryFilter={categoryFilter} 
        setCategoryFilter={setCategoryFilter} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchTerm={searchTerm}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="container">
        <ProductList 
          products={visibleProducts}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}