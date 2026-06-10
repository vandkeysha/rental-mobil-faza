"use client";
import Link from "next/link";
import Image from "next/image";
import { Users, Fuel, MessageCircle } from "lucide-react";
import { clsx } from "clsx";
import type { Unit } from "@/lib/data/units";
import Chip from "./Chip";
import Button from "./Button";
import { buildQuickWaLink } from "@/lib/whatsapp";

interface UnitCardProps {
  unit: Unit;
  className?: string;
}

export default function UnitCard({ unit, className }: UnitCardProps) {
  const waLink = buildQuickWaLink(unit.nama);

  return (
    <div
      className={clsx(
        "group bg-white rounded-2xl border border-line-200 overflow-hidden",
        "shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5",
        className
      )}
    >
      {/* Foto 4:3 */}
      <Link href={`/armada/${unit.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-surface-100">
        <Image
          src={unit.foto[0]}
          alt={unit.nama}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Label harga motor */}
        {unit.tipe === "motor" && unit.hargaLabel && (
          <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
            {unit.hargaLabel}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Chip kategori={unit.kategori} />
            <Link href={`/armada/${unit.slug}`}>
              <h3 className="mt-1.5 text-base font-semibold text-ink-900 leading-snug hover:text-blue-600 transition-colors line-clamp-2">
                {unit.nama}
              </h3>
            </Link>
          </div>
        </div>

        {/* Spec ringkas */}
        <div className="flex items-center gap-3 text-sm text-ink-500">
          <span className="flex items-center gap-1">
            <Users size={14} />
            {unit.spesifikasi.kapasitas} org
          </span>
          <span className="flex items-center gap-1">
            <Fuel size={14} />
            {unit.spesifikasi.bbm}
          </span>
          <span className="text-xs">{unit.spesifikasi.transmisi}</span>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-ink-500 line-clamp-1">{unit.deskripsi}</p>

        {/* Harga / Chat */}
        {unit.tipe === "mobil" ? (
          <p className="text-sm font-medium text-blue-600">Chat untuk harga terbaik</p>
        ) : (
          <p className="text-base font-bold text-ink-900">{unit.hargaLabel}</p>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <Link href={`/armada/${unit.slug}`} className="flex-1">
            <Button variant="primary" size="sm" fullWidth>
              Lihat Detail
            </Button>
          </Link>
          <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label={`Chat WhatsApp untuk ${unit.nama}`}>
            <Button variant="whatsapp" size="sm" aria-label={`Chat WhatsApp untuk ${unit.nama}`}>
              <MessageCircle size={16} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
