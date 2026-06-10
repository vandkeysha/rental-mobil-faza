import { Quote } from "lucide-react";
import Rating from "@/components/ui/Rating";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function Testimoni() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-600 mb-1">Ulasan Pelanggan</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">Yang Pelanggan Bilang</h2>
          <p className="mt-2 text-ink-500 max-w-lg mx-auto text-sm sm:text-base">
            Ratusan ulasan bintang 5 dari pengguna setia FAZA Rent Car.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-3 p-5 rounded-2xl bg-surface-100 border border-line-200"
            >
              <Quote size={20} className="text-blue-300" />
              <p className="text-sm text-ink-700 leading-relaxed flex-1">&ldquo;{t.kutipan}&rdquo;</p>
              <div className="flex items-center justify-between pt-2 border-t border-line-200">
                <div>
                  <p className="text-sm font-semibold text-ink-900">{t.nama}</p>
                  <p className="text-xs text-ink-500">{t.tanggal}</p>
                </div>
                <Rating value={t.rating} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
