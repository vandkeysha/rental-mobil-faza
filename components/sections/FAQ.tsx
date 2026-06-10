import Accordion from "@/components/ui/Accordion";

const FAQ_ITEMS = [
  {
    question: "Apa saja syarat untuk menyewa?",
    answer:
      "Untuk lepas kunci: KTP asli, SIM C/A yang masih berlaku, dan deposit jaminan. Untuk dengan driver: KTP asli sudah cukup. Detail lengkap ada di halaman Syarat & Ketentuan.",
  },
  {
    question: "Apa bedanya layanan Lepas Kunci dan Dengan Driver?",
    answer:
      "Lepas Kunci: Anda mengendarai sendiri, unit diserahkan beserta kunci. Dengan Driver: Kami menyediakan driver profesional yang berpengalaman untuk menemani perjalanan Anda.",
  },
  {
    question: "Berapa area layanan pengantaran?",
    answer:
      "Pengantaran gratis di seluruh area Cikarang (Utara, Selatan, Barat, Pusat, Timur). Untuk Bekasi Kota dikenakan biaya tambahan. Luar kota (Jakarta, Karawang, dll) silakan hubungi CS untuk estimasi biaya.",
  },
  {
    question: "Bagaimana metode pembayaran?",
    answer:
      "Pembayaran bisa via transfer bank (BCA, Mandiri, BRI) atau tunai. DP minimal 50% di awal, pelunasan sebelum unit diserahkan.",
  },
  {
    question: "Bagaimana cara cek ketersediaan unit?",
    answer:
      "Klik tombol Book/Rental di halaman detail unit, isi form singkat (nama, tanggal, durasi), lalu Anda akan langsung terhubung ke WhatsApp kami dengan pesan terstruktur. CS akan konfirmasi ketersediaan dalam waktu singkat.",
  },
  {
    question: "Apakah harga sudah termasuk BBM?",
    answer:
      "BBM tidak termasuk dalam harga sewa. Penyewa bertanggung jawab untuk BBM. Untuk layanan dengan driver, biaya BBM tetap ditanggung penyewa.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-blue-600 mb-1">Pertanyaan Umum</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">FAQ</h2>
            <p className="mt-2 text-ink-500 text-sm sm:text-base">Jawaban untuk pertanyaan yang paling sering ditanyakan.</p>
          </div>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
