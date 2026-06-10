import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog & Artikel — FAZA Rent Car",
  description:
    "Tips rental mobil, panduan berkendara di Cikarang, dan info terbaru dari FAZA Rent Car.",
};

const KATEGORI_COLOR: Record<string, string> = {
  Tips: "bg-blue-50 text-blue-600",
  Panduan: "bg-emerald-50 text-emerald-600",
  Wisata: "bg-orange-50 text-orange-600",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface-100">
      {/* ── Page header ── */}
      <div className="bg-ink-900 text-white py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-wider">Blog & Artikel</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Tips, Panduan & Inspirasi<br className="hidden sm:block" /> Perjalananmu
          </h1>
          <p className="text-white/60 max-w-xl">
            Dari tips sewa kendaraan sampai rekomendasi destinasi wisata — semuanya ada di sini.
          </p>
        </div>
      </div>

      {/* ── Article grid ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-line-200 overflow-hidden hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Cover */}
              <div
                className={`h-44 bg-gradient-to-br ${article.coverGradient ?? "from-blue-600 to-blue-400"} flex flex-col items-center justify-center gap-2 relative overflow-hidden`}
              >
                <span className="text-6xl drop-shadow-sm">{article.coverEmoji ?? "📰"}</span>
                {/* subtle pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,white,transparent_60%)]" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      KATEGORI_COLOR[article.kategori] ?? "bg-surface-100 text-ink-500"
                    }`}
                  >
                    {article.kategori}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-400">
                    <Clock size={11} />
                    {article.estimasiBaca}
                  </span>
                </div>

                <h2 className="text-base font-bold text-ink-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug flex-1">
                  {article.judul}
                </h2>
                <p className="text-sm text-ink-500 line-clamp-2 mb-4">{article.ringkasan}</p>

                <div className="flex items-center justify-between text-xs text-ink-400 pt-3 border-t border-line-200">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {article.tanggal}
                  </span>
                  <span className="flex items-center gap-1 text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Baca artikel <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
