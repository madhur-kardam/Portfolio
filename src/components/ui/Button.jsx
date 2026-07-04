import { cloneElement, isValidElement } from "react";
import { cn } from "./utils";

const variants = {
  default:
    "bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/20",
  outline:
    "border border-border bg-transparent text-textmain hover:bg-card",
  ghost: "bg-transparent text-textmain hover:bg-card",
};

const sizes = {
  default: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-8 text-base",
  icon: "h-10 w-10",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
