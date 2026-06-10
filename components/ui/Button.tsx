"use client";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { clsx } from "clsx";

type Variant = "primary" | "whatsapp" | "secondary" | "ghost" | "white" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-500/40 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark active:bg-whatsapp-dark disabled:bg-whatsapp/40 focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
  secondary:
    "border border-blue-500 text-blue-600 bg-transparent hover:bg-blue-50 active:bg-blue-100 disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  ghost:
    "text-blue-600 bg-transparent hover:bg-blue-50 active:bg-blue-100 disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  white:
    "bg-white text-blue-600 hover:bg-blue-50 active:bg-blue-100 disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
  gold:
    "bg-gold-400 text-ink-900 hover:bg-gold-500 active:bg-gold-500 disabled:bg-gold-400/40 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-5 text-base gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-150 cursor-pointer select-none",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          (disabled || loading) && "cursor-not-allowed",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" size={16} />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
