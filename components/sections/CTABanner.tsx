"use client";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";
import { useInView } from "@/hooks/useInView";

export default function CTABanner() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 bg-blue-600">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 animate-on-scroll"
          style={{ ...(inView && { opacity: 1, transform: "translateY(0)" }) }}
        >
          Siap Pesan Sekarang?
        </h2>
        <p
          className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto animate-on-scroll"
          style={{
            transitionDelay: "100ms",
            ...(inView && { opacity: 1, transform: "translateY(0)" }),
          }}
        >
          Hubungi kami via WhatsApp dan dapatkan konfirmasi ketersediaan unit dalam hitungan menit.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-on-scroll"
          style={{
            transitionDelay: "200ms",
            ...(inView && { opacity: 1, transform: "translateY(0)" }),
          }}
        >
          <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg">
              <MessageCircle size={20} />
              Pesan via WhatsApp
            </Button>
          </a>
          <Link href="/armada">
            <Button variant="white" size="lg">
              Lihat Armada
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}