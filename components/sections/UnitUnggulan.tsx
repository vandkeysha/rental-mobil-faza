import Link from "next/link";
import { ArrowRight } from "lucide-react";
import UnitCard from "@/components/ui/UnitCard";
import Button from "@/components/ui/Button";
import { getUnggulanUnits } from "@/lib/data/units";

export default function UnitUnggulan() {
  const units = getUnggulanUnits();

  return (
    <section className="py-16 bg-surface-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-1">Pilihan Terbaik</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">Unit Unggulan</h2>
            <p className="mt-2 text-ink-500 text-sm sm:text-base max-w-lg">
              Armada pilihan yang paling diminati — terawat, nyaman, siap jalan.
            </p>
          </div>
          <Link href="/armada" className="hidden sm:flex shrink-0">
            <Button variant="secondary" size="sm">
              Lihat Semua
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-6">
          <Link href="/armada">
            <Button variant="secondary" fullWidth>
              Lihat Semua Armada
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
