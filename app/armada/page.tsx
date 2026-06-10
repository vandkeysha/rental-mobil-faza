import { Suspense } from "react";
import type { Metadata } from "next";
import ArmadaClient from "./ArmadaClient";

export const metadata: Metadata = {
  title: "Armada — Semua Unit Tersedia",
  description:
    "Lihat semua armada FAZA Rent Car. Filter mobil, motor, lepas kunci, atau dengan driver. Spesifikasi lengkap di setiap unit.",
};

export default function ArmadaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface-100 flex items-center justify-center text-ink-500">Memuat armada...</div>}>
      <ArmadaClient />
    </Suspense>
  );
}
