"use client";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";
import { useInView } from "@/hooks/useInView";

const WA_DISPLAY = "6281310988012";

export default function KontakClient() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Info kontak */}
        <div
          className="space-y-4 animate-on-scroll"
          style={{ ...(inView && { opacity: 1, transform: "translateY(0)" }) }}
        >
          <div className="bg-white rounded-2xl border border-line-200 p-6">
            <h2 className="text-lg font-bold text-ink-900 mb-4">Informasi Kontak</h2>
            <ul className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  bg: "bg-whatsapp/10",
                  color: "text-whatsapp",
                  label: "WhatsApp",
                  content: (
                    <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink-900 hover:text-blue-600 transition-colors">
                      {WA_DISPLAY}
                    </a>
                  ),
                },
                {
                  icon: Phone,
                  bg: "bg-blue-50",
                  color: "text-blue-600",
                  label: "Telepon",
                  content: <p className="font-semibold text-ink-900">{WA_DISPLAY}</p>,
                },
                {
                  icon: Mail,
                  bg: "bg-blue-50",
                  color: "text-blue-600",
                  label: "Email",
                  content: <p className="font-semibold text-ink-900">info@fazarentcar.com</p>,
                },
                {
                  icon: MapPin,
                  bg: "bg-blue-50",
                  color: "text-blue-600",
                  label: "Alamat",
                  content: <p className="font-semibold text-ink-900">Cikarang, Bekasi, Jawa Barat</p>,
                },
                {
                  icon: Clock,
                  bg: "bg-blue-50",
                  color: "text-blue-600",
                  label: "Jam Operasional",
                  content: (
                    <>
                      <p className="text-sm text-ink-700">Senin–Sabtu: <strong>08.00–20.00 WIB</strong></p>
                      <p className="text-sm text-ink-700">Minggu/Libur: <strong>09.00–17.00 WIB</strong></p>
                    </>
                  ),
                },
              ].map((item, i) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 animate-on-scroll"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    ...(inView && { opacity: 1, transform: "translateY(0)" }),
                  }}
                >
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 mb-0.5">{item.label}</p>
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg" fullWidth>
              <MessageCircle size={18} />
              Chat WhatsApp Sekarang
            </Button>
          </a>
        </div>

        {/* Map */}
        <div
          className="rounded-2xl overflow-hidden border border-line-200 shadow-card h-80 lg:h-auto animate-on-scroll"
          style={{
            transitionDelay: "200ms",
            ...(inView && { opacity: 1, transform: "translateY(0)" }),
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126579.08780074!2d107.07899!3d-6.34407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f14e7d4e3e5%3A0x6e9d0e8e5a8e!2sCikarang%2C%20Bekasi!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "300px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi FAZA Rent Car"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}