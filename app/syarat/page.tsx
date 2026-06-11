import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan rental mobil & motor FAZA Rent Car Cikarang.",
};

const sections = [
  {
    judul: "Persyaratan Penyewa",
    variant: "filled" as const,
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
    variant: "outline" as const,
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
    variant: "outline" as const,
    isi: [
      "DP minimal 50% wajib dibayarkan untuk konfirmasi booking.",
      "Pelunasan dilakukan sebelum unit diserahkan.",
      "Metode: transfer bank (BCA, Mandiri, BRI) atau tunai.",
      "Bukti transfer wajib dikirimkan ke WhatsApp CS.",
    ],
  },
  {
    judul: "Kebijakan Pembatalan & Kerusakan",
    variant: "filled" as const,
    isi: [
      "Pembatalan H-2 atau lebih: DP dikembalikan penuh.",
      "Pembatalan H-1: DP dikembalikan 50%.",
      "Pembatalan pada hari H: DP tidak dikembalikan.",
      "Kerusakan akibat kelalaian penyewa sepenuhnya menjadi tanggung jawab penyewa.",
      "Kerusakan akibat force majeure ditangkan secara musyawarah.",
    ],
  },
];

function SyaratCard({
  judul,
  isi,
  variant,
}: {
  judul: string;
  isi: string[];
  variant: "filled" | "outline";
}) {
  const isFilled = variant === "filled";

  return (
    <div
      className={`rounded-2xl p-6 ${
        isFilled
          ? "bg-blue-600 text-white"
          : "bg-white border border-gray-200 text-gray-800"
      }`}
    >
      <h2
        className={`text-lg font-bold mb-4 ${
          isFilled ? "text-white" : "text-gray-900"
        }`}
      >
        {judul}
      </h2>
      <ul className="space-y-3">
        {isi.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                isFilled ? "bg-white/70" : "bg-blue-500"
              }`}
            />
            <span className={isFilled ? "text-white/90" : "text-gray-700"}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SyaratPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Syarat &amp; Ketentuan</h1>
          <p className="text-white/50 text-sm">
            Berlaku untuk semua unit FAZA Rent Car
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sections.map((sec) => (
            <SyaratCard
              key={sec.judul}
              judul={sec.judul}
              isi={sec.isi}
              variant={sec.variant}
            />
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-400 text-center leading-relaxed">
          Dengan menyewa unit di FAZA Rent Car, penyewa dianggap telah membaca
          dan menyetujui seluruh ketentuan di atas.
          <br />
          Pertanyaan? Hubungi CS kami via WhatsApp.
        </p>
      </div>
    </div>
  );
}