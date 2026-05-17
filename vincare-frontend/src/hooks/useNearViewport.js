import { useEffect, useRef, useState } from "react";

export default function useNearViewport({
  rootMargin = "300px 0px",
  threshold = 0,
} = {}) {
  const elementRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    if (isNearViewport) {
      return undefined;
    }

    const node = elementRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isNearViewport, rootMargin, threshold]);

  return [elementRef, isNearViewport];
}
