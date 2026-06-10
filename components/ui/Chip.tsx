import { clsx } from "clsx";
import type { UnitKategori } from "@/lib/data/units";

const LABEL_MAP: Record<UnitKategori, string> = {
  lepas_kunci: "Lepas Kunci",
  driver: "Dengan Driver",
  keduanya: "Keduanya",
};

interface ChipProps {
  kategori: UnitKategori;
  className?: string;
}

export default function Chip({ kategori, className }: ChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium",
        "bg-blue-50 text-blue-700 border border-blue-100",
        className
      )}
    >
      {LABEL_MAP[kategori]}
    </span>
  );
}

interface ChipFilterProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function ChipFilter({ label, active, onClick }: ChipFilterProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
        active
          ? "bg-blue-500 text-white"
          : "bg-white text-ink-700 border border-line-200 hover:border-blue-300 hover:text-blue-600"
      )}
    >
      {label}
    </button>
  );
}
