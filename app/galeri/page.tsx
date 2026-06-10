import type { Metadata } from "next";
import Image from "next/image";
import { UNITS } from "@/lib/data/units";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Foto armada FAZA Rent Car — mobil dan motor tersedia untuk disewa di Cikarang.",
};

export default function GaleriPage() {
  const allPhotos = UNITS.flatMap((u) =>
    u.foto.map((src) => ({ src, nama: u.nama, tipe: u.tipe }))
  );

  return (
    <div className="min-h-screen bg-surface-100">
      <div className="bg-ink-900 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Galeri Armada</h1>
          <p className="text-white/60">Lihat kondisi nyata unit kami sebelum menyewa</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {allPhotos.map((photo, i) => (
            <div key={i} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-line-200 shadow-card hover:shadow-card-hover transition-all">
              <Image
                src={photo.src}
                alt={photo.nama}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-white text-sm font-medium">{photo.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
