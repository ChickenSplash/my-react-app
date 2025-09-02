import React from "react";
import styles from "./ProductCard.module.scss";
import clsx from "clsx";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} width="100" />
      <div>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice}>£ {product.price}</div>
        <div className={styles.productMeta}>Category: {product.category}</div>
        <div className={styles.productMeta}>{product.rating} ⭐</div>
        <div
          className={clsx(styles.availability, {
            [styles.inStock]: product.stock_amount,
            [styles.outStock]: !product.stock_amount,
          })}
        >{product.stock_amount ? "In Stock" : "Out of Stock"}</div>
      </div>
    </div>
  );
}