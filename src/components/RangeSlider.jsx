import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./RangeSlider.module.scss"
import RangeInput from "./Inputs/RangeInput";

export default function PriceSlider({
    priceRange,
    setPriceRange,
}) {

  const handleChange = (values) => {
    setPriceRange({
      min: values[0],
      max: values[1],
    });
  };

  return (
    <div>
      <h3 className={styles.heading}>Price Range</h3>
      <div>
        <RangeInput 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
      <Slider
        className={styles.rangeSlider}
        range
        min={0}
        max={1000}
        value={[priceRange.min, priceRange.max]}
        onChange={handleChange}
      />
    </div>
  );
}