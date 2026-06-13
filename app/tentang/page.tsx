import type { Metadata } from "next";
import TentangClient from "@/components/sections/TentangClient";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "PT FAZA Cemerlang Abadi penyedia rental mobil & motor di Cikarang sejak 2012. Terdaftar resmi, armada lengkap, pelayanan profesional.",
};

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Tentang FAZA Rent Car</h1>
          <p className="text-blue-100 text-lg max-w-xl">
            Mitra perjalanan terpercaya di Cikarang sejak 2012 PT FAZA Cemerlang Abadi.
          </p>
        </div>
      </div>
      <TentangClient />
    </div>
  );
}