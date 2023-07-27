import { useRef } from "react";

type DebouncedFunction<T extends any[]> = (...args: T) => void;

export function useDebounce<T extends any[]>(fn: DebouncedFunction<T>, delay: number): DebouncedFunction<T> {
  const timeoutRef = useRef<number | null>(null);
  return function debouncedFn(...args: T) {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }
}
