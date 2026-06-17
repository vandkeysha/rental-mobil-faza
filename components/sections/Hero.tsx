"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";

type TipeFilter = "semua" | "mobil" | "motor";
type LayananFilter = "semua" | "lepas_kunci" | "driver";

export default function Hero() {
  const [tipe, setTipe] = useState<TipeFilter>("semua");
  const [layanan, setLayanan] = useState<LayananFilter>("semua");

  const buildArmadaLink = () => {
    const params = new URLSearchParams();
    if (tipe !== "semua") params.set("tipe", tipe);
    if (layanan !== "semua") params.set("layanan", layanan);
    return `/armada${params.toString() ? "?" + params.toString() : ""}`;
  };

  return (
    <section className="relative text-white overflow-hidden min-h-[680px] lg:min-h-[620px]">

      {/* Background foto */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/hero-img.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay gradient — kiri 100% ke kanan 0% */}
  <div
  className="absolute inset-0"
  style={{ background: "linear-gradient(to right, #1a6fffee 25%, #2979ff99 55%, #3d8bff33 80%, transparent 100%)" }}
  />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 pt-40 pb-16 sm:pt-48 sm:pb-16 lg:py-24">
        <div className="lg:max-w-[52%]">

          {/* Micro-trust */}
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-6 hero-badge">
            <MapPin size={14} />
            Cikarang, Bekasi & Sekitarnya
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 hero-title">
            Rental Mobil & Motor<br />
            <span className="text-gold-400">Terpercaya di Cikarang</span>
          </h1>

          {/* Deskripsi */}
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-9 max-w-xl hero-desc">
            Armada terawat, proses mudah, layanan profesional sejak 2022.
            Lepas kunci maupun dengan driver siap melayani kebutuhan Anda.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pb-4 hero-cta">
            <Link href={buildArmadaLink()}>
              <Button variant="white" size="lg" className="w-full sm:w-auto shadow-card-hover">
                Lihat Armada
              </Button>
            </Link>
            <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                <MessageCircle size={18} />
                Chat WhatsApp
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}