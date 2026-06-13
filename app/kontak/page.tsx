import type { Metadata } from "next";
import KontakClient from "@/components/sections/KontakClient";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi FAZA Rent Car via WhatsApp, telepon, atau email. Kami siap melayani Anda.",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-surface-100">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Hubungi Kami</h1>
          <p className="text-blue-100">Kami siap membantu kebutuhan rental Anda.</p>
        </div>
      </div>
      <KontakClient />
    </div>
  );
}