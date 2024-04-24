import type { DependencyList } from "react";
import { useEffect, useCallback } from "react";

const useEffectResize = (
  callback: () => void,
  deps: DependencyList,
  shouldCallWhenEnter = false,
) => {
  const memoizedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    if (shouldCallWhenEnter) {
      memoizedCallback();
    }
  }, [memoizedCallback, shouldCallWhenEnter]);

  useEffect(() => {
    const handleResize = () => {
      memoizedCallback();
    };

    window.removeEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [memoizedCallback, ...deps]);
};

export default useEffectResize;
