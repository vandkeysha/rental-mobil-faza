import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { UNITS, getUnitBySlug } from "@/lib/data/units";
import DetailUnitClient from "./DetailUnitClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return UNITS.map((unit) => ({ slug: unit.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const unit = getUnitBySlug(slug);
  if (!unit) return {};
  return {
    title: `${unit.nama} Rental di Cikarang`,
    description: `Sewa ${unit.nama} di Cikarang. ${unit.deskripsi} Kapasitas ${unit.spesifikasi.kapasitas} orang, transmisi ${unit.spesifikasi.transmisi}.`,
  };
}

export default async function DetailUnitPage({ params }: Props) {
  const { slug } = await params;
  const unit = getUnitBySlug(slug);
  if (!unit) notFound();
  return <DetailUnitClient unit={unit} />;
}
