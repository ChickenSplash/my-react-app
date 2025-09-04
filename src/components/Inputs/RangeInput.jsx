import React from 'react'

export default function RangeInput({ name, priceRange, setPriceRange }) {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value, // update either min or max
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
      />
    </>
  )
}