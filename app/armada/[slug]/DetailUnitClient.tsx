"use client";
import { useState } from "react";
import { Users, Fuel, Settings, Calendar, CheckCircle, MessageCircle } from "lucide-react";
import type { Unit } from "@/lib/data/units";
import { UNITS } from "@/lib/data/units";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";
import UnitCard from "@/components/ui/UnitCard";
import ImageGallery from "@/components/ui/ImageGallery";
import OverlayForm from "@/components/forms/OverlayForm";
import { buildQuickWaLink } from "@/lib/whatsapp";

interface Props {
  unit: Unit;
}

export default function DetailUnitClient({ unit }: Props) {
  const [formOpen, setFormOpen] = useState(false);

  const unitTestimonials = TESTIMONIALS.filter(
    (t) => !t.unitTerkait || t.unitTerkait === unit.id || t.unitTerkait === unit.slug
  ).slice(0, 3);

  const related = UNITS.filter(
    (u) => u.id !== unit.id && u.tipe === unit.tipe && u.tersedia
  ).slice(0, 3);

  const avgRating =
    unitTestimonials.length > 0
      ? unitTestimonials.reduce((s, t) => s + t.rating, 0) / unitTestimonials.length
      : 5;

  return (
    <>
      <div className="min-h-screen bg-surface-100">
        {/* Header breadcrumb */}
        <div className="bg-white border-b border-line-200">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4">
            <Breadcrumb
              items={[
                { label: "Beranda", href: "/" },
                { label: "Armada", href: "/armada" },
                { label: unit.nama },
              ]}
            />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* ── Galeri ── */}
            <ImageGallery images={unit.foto} alt={unit.nama} />

            {/* ── Info utama ── */}
            <div className="flex flex-col gap-5">
              <div>
                <Chip kategori={unit.kategori} />
                <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 mt-2 leading-tight">
                  {unit.nama}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <Rating value={avgRating} count={unitTestimonials.length} size="sm" />
                </div>
              </div>

              {/* Harga */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                {unit.tipe === "motor" && unit.hargaLabel ? (
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{unit.hargaLabel}</p>
                    <p className="text-sm text-blue-500 mt-0.5">Sudah termasuk helm & jas hujan</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-lg font-semibold text-blue-600">Chat untuk harga terbaik</p>
                    <p className="text-sm text-blue-500 mt-0.5">Harga disesuaikan dengan kebutuhan & durasi Anda</p>
                  </div>
                )}
              </div>

              {/* Spesifikasi */}
              <div>
                <h3 className="text-sm font-semibold text-ink-700 mb-3">Spesifikasi</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-ink-700">
                    <Users size={16} className="text-blue-500 shrink-0" />
                    <span>{unit.spesifikasi.kapasitas} penumpang</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink-700">
                    <Settings size={16} className="text-blue-500 shrink-0" />
                    <span>{unit.spesifikasi.transmisi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink-700">
                    <Fuel size={16} className="text-blue-500 shrink-0" />
                    <span>{unit.spesifikasi.bbm}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink-700">
                    <Calendar size={16} className="text-blue-500 shrink-0" />
                    <span>Tahun {unit.spesifikasi.tahun}</span>
                  </div>
                </div>
                {unit.spesifikasi.fitur && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {unit.spesifikasi.fitur.map((f) => (
                      <span
                        key={f}
                        className="flex items-center gap-1 text-xs bg-surface-100 border border-line-200 text-ink-700 px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle size={11} className="text-success" />
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <Button size="lg" fullWidth onClick={() => setFormOpen(true)}>
                  Book / Rental Sekarang
                </Button>
                <a href={buildQuickWaLink(unit.nama)} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="lg" fullWidth>
                    <MessageCircle size={16} />
                    Chat Cepat WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* ── Deskripsi ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-ink-900 mb-3">Tentang Unit Ini</h2>
            <div className="bg-white rounded-2xl border border-line-200 p-6">
              <p className="text-ink-700 leading-relaxed">{unit.deskripsi}</p>
            </div>
          </section>

          {/* ── Ketentuan ── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-ink-900 mb-3">Ketentuan Rental</h2>
            <div className="bg-white rounded-2xl border border-line-200 p-6">
              <ul className="space-y-2 text-sm text-ink-700">
                <li className="flex items-start gap-2"><CheckCircle size={15} className="text-success mt-0.5 shrink-0" />KTP asli wajib diserahkan saat pengambilan unit</li>
                <li className="flex items-start gap-2"><CheckCircle size={15} className="text-success mt-0.5 shrink-0" />SIM C/A aktif diperlukan untuk layanan lepas kunci</li>
                <li className="flex items-start gap-2"><CheckCircle size={15} className="text-success mt-0.5 shrink-0" />Deposit jaminan sesuai jenis unit</li>
                <li className="flex items-start gap-2"><CheckCircle size={15} className="text-success mt-0.5 shrink-0" />BBM tidak termasuk dalam harga sewa</li>
                <li className="flex items-start gap-2"><CheckCircle size={15} className="text-success mt-0.5 shrink-0" />Keterlambatan pengembalian dikenakan biaya overtime</li>
                <li className="flex items-start gap-2"><CheckCircle size={15} className="text-success mt-0.5 shrink-0" />Pengantaran tersedia di area Cikarang & sekitarnya</li>
              </ul>
            </div>
          </section>

          {/* ── Testimoni ── */}
          {unitTestimonials.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold text-ink-900 mb-3">Ulasan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {unitTestimonials.map((t) => (
                  <div key={t.id} className="bg-white rounded-2xl border border-line-200 p-4">
                    <Rating value={t.rating} size="sm" className="mb-2" />
                    <p className="text-sm text-ink-700 leading-relaxed mb-3">&ldquo;{t.kutipan}&rdquo;</p>
                    <div className="flex items-center justify-between text-xs text-ink-500">
                      <span className="font-medium text-ink-700">{t.nama}</span>
                      <span>{t.tanggal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Unit terkait ── */}
          {related.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-ink-900 mb-4">Unit Serupa</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((u) => (
                  <UnitCard key={u.id} unit={u} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <OverlayForm unit={unit} open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
