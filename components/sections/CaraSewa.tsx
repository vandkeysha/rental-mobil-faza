import { Search, ClipboardList, MessageCircle, CheckCircle } from "lucide-react";

const LANGKAH = [
  {
    icon: Search,
    nomor: "01",
    judul: "Pilih Unit",
    deskripsi: "Browse katalog armada, filter sesuai kebutuhan, dan buka halaman detail unit.",
  },
  {
    icon: ClipboardList,
    nomor: "02",
    judul: "Isi Form",
    deskripsi: "Masukkan nama, tanggal, durasi, dan jenis layanan (lepas kunci atau dengan driver).",
  },
  {
    icon: MessageCircle,
    nomor: "03",
    judul: "Chat WhatsApp",
    deskripsi: "Pesan Anda otomatis terstruktur. CS kami akan cek ketersediaan dan konfirmasi harga.",
  },
  {
    icon: CheckCircle,
    nomor: "04",
    judul: "Konfirmasi & Jalan",
    deskripsi: "Deal? Bayar DP, unit siap dijemput atau diantar. Selamat menikmati perjalanan!",
  },
];

export default function CaraSewa() {
  return (
    <section className="py-16 bg-surface-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-600 mb-1">Proses Mudah</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">Cara Sewa di FAZA</h2>
          <p className="mt-2 text-ink-500 max-w-lg mx-auto text-sm sm:text-base">
            4 langkah simpel dari pilih unit sampai siap jalan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-line-200" aria-hidden="true" />
          {LANGKAH.map((step, i) => (
            <div key={step.nomor} className="flex flex-col items-center text-center gap-3 relative">
              <div className="relative z-10 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-card-hover">
                <step.icon size={26} className="text-white" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-500 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold text-ink-900">{step.judul}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{step.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
