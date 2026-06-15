"use client";
import { ShieldCheck, Zap, Users, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const KEUNGGULAN = [
  {
    icon: ShieldCheck,
    judul: "Aman & Nyaman",
    deskripsi: "Armada rutin diservis, dilengkapi asuransi, dan selalu dalam kondisi prima sebelum diserahkan.",
  },
  {
    icon: Zap,
    judul: "Mudah & Cepat",
    deskripsi: "Booking via WhatsApp dalam hitungan menit. Proses simpel, konfirmasi cepat, langsung jalan.",
  },
  {
    icon: Users,
    judul: "Profesional",
    deskripsi: "Driver berpengalaman dan ramah. Tepat waktu, tahu rute, siap menemani perjalanan bisnis maupun keluarga.",
  },
  {
    icon: Sparkles,
    judul: "Kualitas Terjamin",
    deskripsi: "Berdiri sejak 2022 dengan ratusan ulasan bintang 5. PT resmi dengan legalitas lengkap.",
  },
];

export default function MengapaFaza() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-600 mb-1">Kenapa Pilih Kami</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">Mengapa FAZA Rent Car?</h2>
          <p className="mt-2 text-ink-500 max-w-lg mx-auto text-sm sm:text-base">
            Lebih dari sekedar rental kami mengutamakan kepercayaan dan kepuasan Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEUNGGULAN.map((item, i) => (
            <div
              key={item.judul}
              className="flex flex-col items-start gap-3 p-6 rounded-2xl bg-surface-100 border border-line-200 animate-on-scroll"
              style={{
                transitionDelay: `${i * 120}ms`,
                ...(inView && { opacity: 1, transform: "translateY(0)" }),
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <item.icon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-base font-semibold text-ink-900">{item.judul}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}