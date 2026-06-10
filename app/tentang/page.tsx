import type { Metadata } from "next";
import { Shield, Calendar, Award, Users } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "PT FAZA Cemerlang Abadi — penyedia rental mobil & motor di Cikarang sejak 2012. Terdaftar resmi, armada lengkap, pelayanan profesional.",
};

const MILESTONES = [
  { tahun: "2012", keterangan: "FAZA Rent Car berdiri di Cikarang" },
  { tahun: "2015", keterangan: "Ekspansi armada ke 20+ unit" },
  { tahun: "2018", keterangan: "Resmi berbadan hukum PT FAZA Cemerlang Abadi" },
  { tahun: "2023", keterangan: "Melayani 1.000+ penyewa setia per tahun" },
];

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Tentang FAZA Rent Car</h1>
          <p className="text-blue-100 text-lg max-w-xl">
            Mitra perjalanan terpercaya di Cikarang sejak 2012 — PT FAZA Cemerlang Abadi.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {/* Profil */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Siapa Kami</h2>
            <p className="text-ink-700 leading-relaxed mb-4">
              FAZA Rent Car adalah penyedia layanan rental mobil dan motor di Cikarang dan sekitarnya.
              Berdiri sejak 2012 dan resmi terdaftar sebagai PT FAZA Cemerlang Abadi, kami telah
              melayani ribuan pelanggan dari kalangan perseorangan, keluarga, hingga perusahaan.
            </p>
            <p className="text-ink-700 leading-relaxed">
              Kami berkomitmen memberikan armada terbaik dengan kondisi prima, harga transparan,
              dan pelayanan yang cepat & responsif. Setiap unit kami jalani pengecekan rutin sebelum
              diserahkan kepada penyewa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, label: "Legalitas Resmi", value: "PT terdaftar" },
              { icon: Calendar, label: "Pengalaman", value: "Sejak 2012" },
              { icon: Users, label: "Pelanggan", value: "1.000+ penyewa" },
              { icon: Award, label: "Rating", value: "4.9 ★ Google" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-2xl bg-surface-100 border border-line-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                  <item.icon size={20} className="text-blue-600" />
                </div>
                <p className="text-xs text-ink-500">{item.label}</p>
                <p className="font-semibold text-ink-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visi Misi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-blue-600 text-white">
            <h3 className="text-lg font-bold mb-2">Visi</h3>
            <p className="text-blue-100 leading-relaxed">
              Menjadi penyedia rental kendaraan terpercaya dan terdepan di kawasan industri Cikarang
              yang memberikan nilai terbaik bagi setiap pelanggan.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-surface-100 border border-line-200">
            <h3 className="text-lg font-bold text-ink-900 mb-2">Misi</h3>
            <ul className="space-y-2 text-sm text-ink-700">
              <li>• Menyediakan armada terawat & nyaman</li>
              <li>• Memberikan pelayanan cepat & profesional</li>
              <li>• Menjaga transparansi harga & ketentuan</li>
              <li>• Terus berinovasi dalam layanan rental</li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">Perjalanan Kami</h2>
          <div className="relative pl-8 border-l-2 border-blue-100 space-y-6">
            {MILESTONES.map((m) => (
              <div key={m.tahun} className="relative">
                <div className="absolute -left-[2.15rem] w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                <p className="text-xs font-bold text-blue-600 mb-0.5">{m.tahun}</p>
                <p className="text-ink-700 text-sm">{m.keterangan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legalitas */}
        <div className="bg-surface-100 rounded-2xl border border-line-200 p-6 mb-10">
          <h2 className="text-xl font-bold text-ink-900 mb-3">Legalitas & Dokumen Resmi</h2>
          <ul className="space-y-2 text-sm text-ink-700">
            <li className="flex items-center gap-2"><Shield size={16} className="text-success" /> Akta Notaris Pendirian Perusahaan</li>
            <li className="flex items-center gap-2"><Shield size={16} className="text-success" /> SK Kementerian Hukum & HAM (Menkumham)</li>
            <li className="flex items-center gap-2"><Shield size={16} className="text-success" /> NPWP Perusahaan</li>
            <li className="flex items-center gap-2"><Shield size={16} className="text-success" /> NIB (Nomor Induk Berusaha)</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg">Hubungi Kami via WhatsApp</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
