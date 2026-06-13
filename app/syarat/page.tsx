import type { Metadata } from "next";
import SyaratClient from "@/components/sections/SyaratClient";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan rental mobil & motor FAZA Rent Car Cikarang.",
};

export default function SyaratPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Syarat &amp; Ketentuan</h1>
          <p className="text-white/50 text-sm">Berlaku untuk semua unit FAZA Rent Car</p>
        </div>
      </div>
      <SyaratClient />
    </div>
  );
}