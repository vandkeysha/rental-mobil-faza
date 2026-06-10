import { Star } from "lucide-react";
import { clsx } from "clsx";

interface RatingProps {
  value: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}

export default function Rating({ value, count, size = "md", className }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const iconSize = size === "sm" ? 14 : 16;
  return (
    <div className={clsx("inline-flex items-center gap-1", className)}>
      {stars.map((s) => (
        <Star
          key={s}
          size={iconSize}
          className={clsx(
            s <= Math.round(value) ? "text-warning fill-warning" : "text-line-200 fill-line-200"
          )}
        />
      ))}
      {count !== undefined && (
        <span className="text-xs text-ink-500 ml-0.5">({count})</span>
      )}
    </div>
  );
}
