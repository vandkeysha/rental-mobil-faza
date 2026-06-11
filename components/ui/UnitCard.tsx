"use client";
import Link from "next/link";
import Image from "next/image";
import { Users, Fuel, MessageCircle } from "lucide-react";
import { clsx } from "clsx";
import type { Unit } from "@/lib/data/units";
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
        "group bg-white rounded-2xl overflow-hidden",
        "border-1 border-line-300 border-gray-200",
        "hover:border-blue-400",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Foto 4:3 */}
      <Link
        href={`/armada/${unit.slug}`}
        className="block relative aspect-[4/3] overflow-hidden bg-surface-100"
      >
        <Image
          src={unit.foto[0]}
          alt={unit.nama}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Harga badge motor */}
        {unit.tipe === "motor" && unit.hargaLabel && (
          <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
            {unit.hargaLabel}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <span className="inline-block text-xs font-medium text-ink-400 capitalize mb-1">
            {unit.kategori === "lepas_kunci"
              ? "Lepas Kunci"
              : unit.kategori === "driver"
              ? "Dengan Driver"
              : "Keduanya"}
          </span>
          <Link href={`/armada/${unit.slug}`}>
            <h3 className="text-base font-semibold text-ink-900 leading-snug group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
              {unit.nama}
            </h3>
          </Link>
        </div>

        {/* Spec ringkas */}
        <div className="flex items-center gap-3 text-sm text-ink-300">
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

        {/* Harga */}
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
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat WhatsApp untuk ${unit.nama}`}
          >
            <Button variant="whatsapp" size="sm" aria-label={`Chat WhatsApp untuk ${unit.nama}`}>
              <MessageCircle size={16} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}