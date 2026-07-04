import { useScrollFade } from "../hooks/useScrollFade";

/**
 * Wraps section content and applies a CSS-only fade/slide-up transition
 * when the section enters the viewport (see .section-fade in index.css).
 */
export function FadeSection({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useScrollFade();
  return (
    <Tag ref={ref} className={`section-fade ${className}`} {...props}>
      {children}
    </Tag>
  );
}
