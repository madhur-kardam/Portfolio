import { useEffect, useRef } from "react";

/**
 * Adds the "is-visible" class to the referenced element when it scrolls
 * into the viewport, triggering the CSS fade/slide transition defined
 * in styles/index.css (.section-fade).
 */
export function useScrollFade() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
