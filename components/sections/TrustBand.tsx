"use client";
import { Shield, Calendar, Star, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";
const TRUST_ITEMS = [
  { icon: Shield, label: "Legalitas PT", value: "PT FAZA Cemerlang Abadi" },
  { icon: Calendar, label: "Berdiri Sejak", value: "Tahun 2012" },
  { icon: Star, label: "Rating Google", value: "4.9 ★ (200+ ulasan)" },
  { icon: Users, label: "Pelanggan Puas", value: "1.000+ Penyewa" },
];

export default function TrustBand() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="bg-white border-y border-line-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-9 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-3 animate-on-scroll"
              style={{
                transitionDelay: `${i * 100}ms`,
                ...(inView && { opacity: 1, transform: "translateY(0)" }),
              }}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <item.icon size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-ink-500">{item.label}</p>
                <p className="text-sm font-semibold text-ink-900 leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}