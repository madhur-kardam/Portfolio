import { cn } from "./utils";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-textmain",
        "placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        "transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
}
