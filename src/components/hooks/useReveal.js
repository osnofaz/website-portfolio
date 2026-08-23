import { useEffect, useRef, useState } from 'react';

// Attaches to any element and flips `visible` to true the moment it scrolls
// into view. Only fires once (unobserves itself after triggering), so
// scrolling back up/down doesn't replay the animation.
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser doesn't support IntersectionObserver, just show
    // the content immediately rather than leaving it invisible.
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
