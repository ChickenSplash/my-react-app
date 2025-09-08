import React from "react";
import styles from "./ProductList.module.scss";
import ProductCard from "./ProductCard";

export default function ProductList({ products, isLoading }) {
  if (isLoading) {
    return (
      <p className={styles.errorMessage}>Loading...</p>
    );
  }
  
  if (!products || products.length === 0) {
    return (
      <p className={styles.errorMessage}>No products match the search criteria.</p>
    );
  }

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}