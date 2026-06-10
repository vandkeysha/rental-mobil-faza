import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan rental mobil & motor FAZA Rent Car Cikarang.",
};

const sections = [
  {
    judul: "Persyaratan Penyewa",
    isi: [
      "Usia minimal 21 tahun dengan KTP yang masih berlaku.",
      "Untuk layanan Lepas Kunci: SIM C (motor) atau SIM A (mobil) aktif wajib diserahkan.",
      "Untuk layanan Dengan Driver: hanya KTP asli yang diperlukan.",
      "Deposit/jaminan diperlukan sesuai jenis unit yang disewa.",
      "Penyewa bertanggung jawab penuh atas keamanan dan kondisi unit selama masa sewa.",
    ],
  },
  {
    judul: "Peraturan Penggunaan",
    isi: [
      "Unit hanya boleh dikendarai oleh penyewa yang namanya tercantum di perjanjian.",
      "Dilarang menggunakan unit untuk kegiatan ilegal, balap, atau tujuan di luar ketentuan.",
      "BBM tidak termasuk dalam harga sewa; penyewa wajib mengisi BBM yang sesuai.",
      "Overtime: pengembalian melebihi waktu kesepakatan dikenakan biaya Rp50.000/jam.",
      "Area keluar Cikarang dikenakan biaya tambahan sesuai jarak (hubungi CS).",
    ],
  },
  {
    judul: "Pembayaran",
    isi: [
      "DP minimal 50% wajib dibayarkan untuk konfirmasi booking.",
      "Pelunasan dilakukan sebelum unit diserahkan.",
      "Metode: transfer bank (BCA, Mandiri, BRI) atau tunai.",
      "Bukti transfer wajib dikirimkan ke WhatsApp CS.",
    ],
  },
  {
    judul: "Kebijakan Pembatalan & Kerusakan",
    isi: [
      "Pembatalan H-2 atau lebih: DP dikembalikan penuh.",
      "Pembatalan H-1: DP dikembalikan 50%.",
      "Pembatalan pada hari H: DP tidak dikembalikan.",
      "Kerusakan akibat kelalaian penyewa sepenuhnya menjadi tanggung jawab penyewa.",
      "Kerusakan akibat force majeure ditangani secara musyawarah.",
    ],
  },
];

export default function SyaratPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-ink-900 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Syarat & Ketentuan</h1>
          <p className="text-white/60">Berlaku untuk semua unit FAZA Rent Car</p>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-8">
          {sections.map((sec) => (
            <section key={sec.judul}>
              <h2 className="text-xl font-bold text-ink-900 mb-4 pb-2 border-b border-line-200">
                {sec.judul}
              </h2>
              <ul className="space-y-3">
                {sec.isi.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-10 text-xs text-ink-500 text-center">
          Dengan menyewa unit di FAZA Rent Car, penyewa dianggap telah membaca dan menyetujui seluruh ketentuan di atas.
          <br />Pertanyaan? Hubungi CS kami via WhatsApp.
        </p>
      </div>
    </div>
  );
}
