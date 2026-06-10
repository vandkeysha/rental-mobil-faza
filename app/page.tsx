import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import UnitUnggulan from "@/components/sections/UnitUnggulan";
import MengapaFaza from "@/components/sections/MengapaFaza";
import CaraSewa from "@/components/sections/CaraSewa";
import Testimoni from "@/components/sections/Testimoni";
import AreaLayanan from "@/components/sections/AreaLayanan";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "FAZA Rent Car — Rental Mobil & Motor Cikarang Terpercaya",
  description:
    "Rental mobil dan motor terpercaya di Cikarang sejak 2012. Armada lengkap, lepas kunci & dengan driver, proses mudah via WhatsApp.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <UnitUnggulan />
      <MengapaFaza />
      <CaraSewa />
      <Testimoni />
      <AreaLayanan />
      <FAQ />
      <CTABanner />
    </>
  );
}
