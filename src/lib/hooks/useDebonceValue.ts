import { useEffect, useState } from "react";

// given a string value, update the debounced value after 500ms
// if there is any change to the value during that time, reset the timer.

export function useDebounceedValue(value: string) {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    // set timeout wait 400ms update debouncedVal
    const timeout = setTimeout(() => {
      setDebouncedVal(value);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debouncedVal;
}
