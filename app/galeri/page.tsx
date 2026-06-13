"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { UNITS } from "@/lib/data/units";
import { ARTICLES } from "@/lib/data/blog";
import CTABanner from "@/components/sections/CTABanner";
import { useInView } from "@/hooks/useInView";

const KATEGORI_COLOR: Record<string, string> = {
  Tips: "bg-blue-50 text-blue-600",
  Panduan: "bg-emerald-50 text-emerald-600",
  Wisata: "bg-orange-50 text-orange-600",
};

const LAYOUT_SPANS = [
  "row-span-2",
  "",
  "",
  "row-span-2",
  "col-span-2 row-span-2",
  "",
  "",
];

const PHOTOS_PER_PAGE = LAYOUT_SPANS.length;

export default function GaleriPage() {
  const [page, setPage] = useState(0);
  const { ref: refGaleri, inView: inViewGaleri } = useInView<HTMLElement>();
  const { ref: refBlog, inView: inViewBlog } = useInView<HTMLElement>();

  const allPhotos = UNITS.flatMap((u) =>
    u.foto.map((src) => ({ src, nama: u.nama, tipe: u.tipe }))
  );

  const totalPages = Math.ceil(allPhotos.length / PHOTOS_PER_PAGE);
  const pagePhotos = allPhotos.slice(
    page * PHOTOS_PER_PAGE,
    page * PHOTOS_PER_PAGE + PHOTOS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-surface-100">
      {/* Header */}
      <div className="bg-ink-900 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Galeri Armada & Blog</h1>
          <p className="text-white/60">Lihat armada kami dan baca artikel terbaru.</p>
        </div>
      </div>

      {/* GALERI */}
      <section ref={refGaleri} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <h2
          className="text-3xl font-bold text-ink-900 mb-8 animate-on-scroll"
          style={{ ...(inViewGaleri && { opacity: 1, transform: "translateY(0)" }) }}
        >
          Galeri Armada
        </h2>

        <div className="grid grid-cols-4 gap-4 auto-rows-[140px]">
          {pagePhotos.map((photo, i) => (
            <div
              key={`${page}-${i}`}
              className={`relative overflow-hidden rounded-2xl shadow-card animate-on-scroll ${LAYOUT_SPANS[i] ?? ""}`}
              style={{
                transitionDelay: `${i * 60}ms`,
                ...(inViewGaleri && { opacity: 1, transform: "translateY(0)" }),
              }}
            >
              <Image
                src={photo.src}
                alt={photo.nama}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-sm text-white font-medium">{photo.nama}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div
            className="flex items-center justify-between mt-6 animate-on-scroll"
            style={{
              transitionDelay: "400ms",
              ...(inViewGaleri && { opacity: 1, transform: "translateY(0)" }),
            }}
          >
            <span className="text-sm text-ink-400">
              {page * PHOTOS_PER_PAGE + 1}–
              {Math.min((page + 1) * PHOTOS_PER_PAGE, allPhotos.length)} dari{" "}
              {allPhotos.length} foto
            </span>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === page ? "w-6 h-2 bg-blue-600" : "w-2 h-2 bg-line-200 hover:bg-ink-300"
                  }`}
                  aria-label={`Halaman ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="p-2 rounded-full border border-line-200 bg-white text-ink-700 hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="p-2 rounded-full border border-line-200 bg-white text-ink-700 hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* BLOG */}
      <section ref={refBlog} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <h2
          className="text-3xl font-bold text-ink-900 mb-8 animate-on-scroll"
          style={{ ...(inViewBlog && { opacity: 1, transform: "translateY(0)" }) }}
        >
          Blog dan Artikel
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-line-200 overflow-hidden hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 animate-on-scroll"
              style={{
                transitionDelay: `${i * 120}ms`,
                ...(inViewBlog && { opacity: 1, transform: "translateY(0)" }),
              }}
            >
              <div className={`h-44 bg-gradient-to-br ${article.coverGradient ?? "from-blue-600 to-blue-400"} flex flex-col items-center justify-center gap-2`}>
                <span className="text-6xl">{article.coverEmoji ?? "📰"}</span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${KATEGORI_COLOR[article.kategori] ?? "bg-surface-100 text-ink-500"}`}>
                    {article.kategori}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-400">
                    <Clock size={11} />
                    {article.estimasiBaca}
                  </span>
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug flex-1">
                  {article.judul}
                </h3>
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
      </section>

      <CTABanner />
    </div>
  );
}