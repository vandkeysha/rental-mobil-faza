"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, MapPin, Search } from "lucide-react";
import Button from "@/components/ui/Button";
import { ChipFilter } from "@/components/ui/Chip";
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
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-azure-500 text-white overflow-hidden min-h-[560px] lg:min-h-[620px]">
      {/* Vehicle image — shifted right so black SUV is half-cropped at the edge */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-kendaraan.svg"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 h-[150%] w-auto pointer-events-none select-none"
        style={{ right: "-12%" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="lg:max-w-[52%]">
          {/* Micro-trust */}
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <MapPin size={14} />
            Cikarang, Bekasi & Sekitarnya
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Rental Mobil & Motor<br />
            <span className="text-blue-100">Terpercaya di Cikarang</span>
          </h1>
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-14 max-w-xl">
            Armada terawat, proses mudah, layanan profesional sejak 2012.
            Lepas kunci maupun dengan driver — siap melayani kebutuhan Anda.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pb-4">
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
