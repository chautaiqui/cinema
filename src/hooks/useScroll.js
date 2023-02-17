
// window.addEventListener("scroll", onScroll);
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

const initNetworkState = {
  pageXOffset: 0,
  pageYOffset: 0
};

export function useScroll() {
  const [pageOffset, setPageOffset] = useState(initNetworkState);
  
  useEffect(() => {
    const debouncedHandleNetworkChange = debounce(function onScroll() {
      if (window.pageYOffset === 0 ){
        setPageOffset({
          pageXOffset: window.pageXOffset,
          pageYOffset: window.pageYOffset,
        })
      }
    }, 500)
    window.addEventListener("scroll", debouncedHandleNetworkChange);
    return () => window.removeEventListener("scroll", debouncedHandleNetworkChange);
  }, []);

  return pageOffset;
}