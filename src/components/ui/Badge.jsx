import { cn } from "./utils";

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background",
        "px-3 py-1 text-xs font-medium text-muted",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
