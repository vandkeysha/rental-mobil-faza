import { MapPin, AlertCircle } from "lucide-react";

const AREA_ITEMS = [
  { nama: "Cikarang Utara", biaya: "Gratis" },
  { nama: "Cikarang Selatan", biaya: "Gratis" },
  { nama: "Cikarang Barat", biaya: "Gratis" },
  { nama: "Cikarang Pusat", biaya: "Gratis" },
  { nama: "Cikarang Timur", biaya: "Gratis" },
  { nama: "Bekasi Kota", biaya: "Rp25.000" },
  { nama: "Karawang", biaya: "Chat CS" },
  { nama: "Jakarta", biaya: "Chat CS" },
];

export default function AreaLayanan() {
  return (
    <section className="py-16 bg-surface-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-600 mb-1">Jangkauan Layanan</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">Area Layanan</h2>
          <p className="mt-2 text-ink-500 max-w-lg mx-auto text-sm sm:text-base">
            Melayani pengantaran & penjemputan di seluruh area Cikarang dan sekitarnya.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Area list */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {AREA_ITEMS.map((area) => (
                <div
                  key={area.nama}
                  className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white border border-line-200"
                >
                  <div className="flex items-center gap-2 text-sm text-ink-700">
                    <MapPin size={14} className="text-blue-500 shrink-0" />
                    {area.nama}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      area.biaya === "Gratis"
                        ? "bg-success/10 text-success"
                        : area.biaya === "Chat CS"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    {area.biaya}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <p>Biaya luar area dihitung berdasarkan jarak & waktu. Hubungi CS untuk estimasi biaya ke luar kota.</p>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="rounded-2xl overflow-hidden border border-line-200 bg-white shadow-card h-64 lg:h-full min-h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126579.08780074!2d107.07899!3d-6.34407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f14e7d4e3e5%3A0x6e9d0e8e5a8e!2sCikarang%2C%20Bekasi!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "200px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi FAZA Rent Car Cikarang"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
