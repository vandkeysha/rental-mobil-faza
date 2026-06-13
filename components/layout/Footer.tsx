"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Share2, ExternalLink } from "lucide-react";
import { buildGeneralWaLink } from "@/lib/whatsapp";
import { useInView } from "@/hooks/useInView";

const WA_NUMBER_DISPLAY = process.env.NEXT_PUBLIC_WA_DISPLAY ?? "0812-3456-7890";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Armada", href: "/armada" },
  { label: "Tentang", href: "/tentang" },
  { label: "Syarat", href: "/syarat" },
  { label: "Galeri & Blog", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <footer ref={ref} className="bg-ink-900 text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div
          className="lg:col-span-1 animate-on-scroll"
          style={{ ...(inView && { opacity: 1, transform: "translateY(0)" }) }}
        >
          <div className="inline-flex items-center bg-white rounded-xl px-3 py-2 mb-4">
            <Image src="/logo.svg" alt="FAZA Rent Car" width={120} height={66} unoptimized className="h-9 w-auto" />
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            PT FAZA Cemerlang Abadi Penyedia rental mobil & motor terpercaya di Cikarang sejak 2012.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" aria-label="Instagram">
              <Share2 size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" aria-label="Facebook">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Navigasi */}
        <div
          className="animate-on-scroll"
          style={{
            transitionDelay: "100ms",
            ...(inView && { opacity: 1, transform: "translateY(0)" }),
          }}
        >
          <h3 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Navigasi</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div
          className="animate-on-scroll"
          style={{
            transitionDelay: "200ms",
            ...(inView && { opacity: 1, transform: "translateY(0)" }),
          }}
        >
          <h3 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Kontak</h3>
          <ul className="space-y-3">
            <li>
              <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-whatsapp" />
                {WA_NUMBER_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-white/60">
              <Phone size={16} className="mt-0.5 shrink-0" />
              {WA_NUMBER_DISPLAY}
            </li>
            <li className="flex items-start gap-2 text-sm text-white/60">
              <Mail size={16} className="mt-0.5 shrink-0" />
              info@fazarentcar.com
            </li>
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Cikarang, Bekasi, Jawa Barat
            </li>
          </ul>
        </div>

        {/* Jam operasional */}
        <div
          className="animate-on-scroll"
          style={{
            transitionDelay: "300ms",
            ...(inView && { opacity: 1, transform: "translateY(0)" }),
          }}
        >
          <h3 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Jam Operasional</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <Clock size={16} className="mt-0.5 shrink-0" />
              <div>
                <div>Senin – Sabtu</div>
                <div className="text-white font-medium">08.00 – 20.00 WIB</div>
              </div>
            </li>
            <li className="flex items-start gap-2 text-sm text-white/60">
              <Clock size={16} className="mt-0.5 shrink-0" />
              <div>
                <div>Minggu & Hari Libur</div>
                <div className="text-white font-medium">09.00 – 17.00 WIB</div>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50">
            <p className="font-medium text-white/70 mb-1">Legalitas</p>
            <p>PT FAZA Cemerlang Abadi</p>
            <p>Akta Notaris & SK Menkumham</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PT FAZA Cemerlang Abadi. Semua hak dilindungi.</p>
          <p>Rental Mobil & Motor Cikarang</p>
        </div>
      </div>
    </footer>
  );
}