import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply()
    }, ms)
  };
}

const initNetworkState = true;

export function useNetwork() {
  const [status, setStatus] = useState(initNetworkState);
  
  useEffect(() => {
    const debouncedHandleNetworkChange = debounce(function handleNetworkChange() {
      const networkStatus = navigator.connection.downlink > 0;
      setStatus(networkStatus); // test
    }, 100)
    navigator.connection.addEventListener("change", debouncedHandleNetworkChange);
    return () => navigator.connection.removeEventListener("change", debouncedHandleNetworkChange);
  }, []);
  return status;
}