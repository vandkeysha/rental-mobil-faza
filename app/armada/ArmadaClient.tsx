"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle, SlidersHorizontal } from "lucide-react";
import UnitCard from "@/components/ui/UnitCard";
import { UNITS, type UnitTipe } from "@/lib/data/units";
import { ChipFilter } from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { buildGeneralWaLink } from "@/lib/whatsapp";
import { useInView } from "@/hooks/useInView";

type SortOption = "default" | "harga_asc" | "harga_desc" | "nama";

const TIPE_OPTIONS: { value: "semua" | UnitTipe; label: string }[] = [
  { value: "semua", label: "Semua" },
  { value: "mobil", label: "Mobil" },
  { value: "motor", label: "Motor" },
];

export default function ArmadaClient() {
  const searchParams = useSearchParams();
  const initTipe = (searchParams.get("tipe") as UnitTipe | null) ?? "semua";

  const [tipe, setTipe] = useState<"semua" | UnitTipe>(initTipe);
  const [sort, setSort] = useState<SortOption>("default");
  const { ref, inView } = useInView(0.05);

  const filtered = useMemo(() => {
    let units = UNITS.filter((u) => u.tersedia);
    if (tipe !== "semua") units = units.filter((u) => u.tipe === tipe);

    if (sort === "harga_asc") units = [...units].sort((a, b) => (a.harga ?? 0) - (b.harga ?? 0));
    if (sort === "harga_desc") units = [...units].sort((a, b) => (b.harga ?? 0) - (a.harga ?? 0));
    if (sort === "nama") units = [...units].sort((a, b) => a.nama.localeCompare(b.nama));
    return units;
  }, [tipe, sort]);

  return (
    <div className="min-h-screen bg-surface-100">
      {/* Header */}
      <div className="bg-white border-b border-line-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
          <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Armada" }]} />
          <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 mt-3">Armada Kami</h1>
          <p className="text-ink-500 mt-1 text-sm sm:text-base">
            {UNITS.length} unit tersedia mobil & motor, lepas kunci & dengan driver
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        {/* Filter bar */}
        <div
          className="bg-white rounded-2xl border border-line-200 p-4 mb-6 animate-on-scroll"
          style={{ ...(inView && { opacity: 1, transform: "translateY(0)" }) }}
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-xs font-medium text-ink-500 mb-2 flex items-center gap-1">
                <SlidersHorizontal size={12} /> Tipe
              </p>
              <div className="flex flex-wrap gap-2">
                {TIPE_OPTIONS.map((opt) => (
                  <ChipFilter
                    key={opt.value}
                    label={opt.label}
                    active={tipe === opt.value}
                    onClick={() => setTipe(opt.value as "semua" | UnitTipe)}
                  />
                ))}
              </div>
            </div>
            <div className="ml-auto self-end">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="h-9 px-3 rounded-lg border border-line-200 text-sm text-ink-700 bg-white focus:border-azure-500 focus:ring-2 focus:ring-azure-500/20 outline-none cursor-pointer"
              >
                <option value="default">Urutan default</option>
                <option value="harga_asc">Harga: rendah ke tinggi</option>
                <option value="harga_desc">Harga: tinggi ke rendah</option>
                <option value="nama">Nama A–Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-2xl mb-2">🔍</p>
            <h3 className="text-lg font-semibold text-ink-900 mb-1">Unit tidak ditemukan</h3>
            <p className="text-ink-500 text-sm mb-6">Coba ubah filter atau hubungi CS untuk unit khusus.</p>
            <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp">
                <MessageCircle size={16} />
                Chat WhatsApp
              </Button>
            </a>
          </div>
        ) : (
          <section ref={ref}>
            <p
              className="text-sm text-ink-500 mb-4 animate-on-scroll"
              style={{
                transitionDelay: "100ms",
                ...(inView && { opacity: 1, transform: "translateY(0)" }),
              }}
            >
              {filtered.length} unit ditemukan
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((unit, i) => (
                <div
                  key={unit.id}
                  className="animate-on-scroll"
                  style={{
                    transitionDelay: `${i * 60}ms`,
                    ...(inView && { opacity: 1, transform: "translateY(0)" }),
                  }}
                >
                  <UnitCard unit={unit} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}