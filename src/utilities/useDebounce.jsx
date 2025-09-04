import { useState, useEffect } from "react";

/**
 * Custom hook for debouncing a value.
 * @param {any} value - The value to debounce.
 * @param {number} delay - Delay in ms.
 * @returns {any} - The debounced value.
 */

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler); // cancel timeout if value changes
  }, [value, delay]);

  return debouncedValue;
}