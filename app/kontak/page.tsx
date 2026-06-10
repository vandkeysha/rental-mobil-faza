import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi FAZA Rent Car via WhatsApp, telepon, atau email. Kami siap melayani Anda.",
};

const WA_DISPLAY = process.env.NEXT_PUBLIC_WA_DISPLAY ?? "0812-3456-7890";

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-surface-100">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Hubungi Kami</h1>
          <p className="text-blue-100">Kami siap membantu kebutuhan rental Anda.</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info kontak */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-line-200 p-6">
              <h2 className="text-lg font-bold text-ink-900 mb-4">Informasi Kontak</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-whatsapp" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 mb-0.5">WhatsApp</p>
                    <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink-900 hover:text-blue-600 transition-colors">
                      {WA_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 mb-0.5">Telepon</p>
                    <p className="font-semibold text-ink-900">{WA_DISPLAY}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 mb-0.5">Email</p>
                    <p className="font-semibold text-ink-900">info@fazarentcar.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 mb-0.5">Alamat</p>
                    <p className="font-semibold text-ink-900">Cikarang, Bekasi, Jawa Barat</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500 mb-0.5">Jam Operasional</p>
                    <p className="text-sm text-ink-700">Senin–Sabtu: <strong>08.00–20.00 WIB</strong></p>
                    <p className="text-sm text-ink-700">Minggu/Libur: <strong>09.00–17.00 WIB</strong></p>
                  </div>
                </li>
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
          <div className="rounded-2xl overflow-hidden border border-line-200 shadow-card h-80 lg:h-auto">
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
    </div>
  );
}
