import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { clsx } from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-ink-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            "h-11 w-full rounded-md border px-3 text-base text-ink-900 placeholder-ink-500/60",
            "transition-colors duration-150 bg-white",
            error
              ? "border-error focus:border-error focus:ring-2 focus:ring-error/20 outline-none"
              : "border-line-200 focus:border-azure-500 focus:ring-2 focus:ring-azure-500/20 outline-none",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-error">{error}</p>}
        {helper && !error && <p className="text-xs text-ink-500">{helper}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helper?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helper, options, className, id, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-ink-700">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={clsx(
            "h-11 w-full rounded-md border px-3 text-base text-ink-900 bg-white",
            "transition-colors duration-150 cursor-pointer",
            error
              ? "border-error focus:border-error focus:ring-2 focus:ring-error/20 outline-none"
              : "border-line-200 focus:border-azure-500 focus:ring-2 focus:ring-azure-500/20 outline-none",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-error">{error}</p>}
        {helper && !error && <p className="text-xs text-ink-500">{helper}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";
