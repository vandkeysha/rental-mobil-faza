import type { Metadata } from "next";
import BlogListClient from "@/components/sections/BlogListClient";

export const metadata: Metadata = {
  title: "Blog & Artikel — FAZA Rent Car",
  description: "Tips rental mobil, panduan berkendara di Cikarang, dan info terbaru dari FAZA Rent Car.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface-100">
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
      <BlogListClient />
    </div>
  );
}