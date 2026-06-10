"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { clsx } from "clsx";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Armada", href: "/armada" },
  { label: "Tentang", href: "/tentang" },
  { label: "Syarat", href: "/syarat" },
  { label: "Galeri", href: "/galeri" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 w-full transition-shadow duration-200",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-card" : "bg-white"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="FAZA Rent Car — Beranda">
          <Image
            src="/logo.svg"
            alt="FAZA Rent Car"
            width={120}
            height={66}
            priority
            unoptimized
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-blue-600 bg-blue-50"
                  : "text-ink-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm">
              <MessageCircle size={16} />
              Chat WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-surface-100 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-line-200 px-4 pb-4 shadow-card-hover">
          <nav className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-2.5 rounded-lg text-sm font-medium",
                  pathname === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-ink-700 hover:text-blue-600 hover:bg-blue-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={buildGeneralWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex"
          >
            <Button variant="whatsapp" fullWidth>
              <MessageCircle size={16} />
              Chat WhatsApp
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
