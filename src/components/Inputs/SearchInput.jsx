import React from 'react'

export default function SearchInput({ inputValue, setInputValue }) {
  return (
    <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}