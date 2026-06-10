export interface BlogArticle {
  slug: string;
  judul: string;
  ringkasan: string;
  tanggal: string;
  kategori: string;
  penulisLabel: string;
  estimasiBaca: string; // e.g. "5 menit"
  coverEmoji?: string;
  coverGradient?: string; // tailwind gradient classes
  content?: BlogContent;
}

export interface BlogContent {
  intro: string;
  sections: BlogSection[];
  kesimpulan: string;
}

export interface BlogSection {
  nomor?: number;
  judul: string;
  isi: string;
  highlight?: string; // callout box text
  list?: string[];
}

export const ARTICLES: BlogArticle[] = [
  {
    slug: "tips-sewa-mobil-cikarang",
    judul: "5 Tips Menyewa Mobil di Cikarang Biar Nggak Nyesel",
    ringkasan:
      "Baru mau sewa mobil di Cikarang? Jangan langsung booking dulu. Baca 5 tips ini supaya pengalaman sewamu lancar dari awal sampai akhir.",
    tanggal: "1 Juni 2025",
    kategori: "Tips",
    penulisLabel: "Tim FAZA Rent Car",
    estimasiBaca: "5 menit",
    coverEmoji: "🚗",
    coverGradient: "from-blue-600 to-blue-400",
    content: {
      intro:
        "Cikarang bukan cuma kawasan industri. Sekarang sudah banyak keluarga, profesional, dan wisatawan yang mampir ke sini — baik untuk urusan kerja, kunjungan keluarga, maupun sekadar jalan-jalan ke Bekasi dan sekitarnya.\n\nNah, kalau kamu baru pertama kali mau sewa mobil di Cikarang, ada beberapa hal penting yang perlu kamu tahu. Bukan bikin ribet — justru biar sewanya makin nyaman dan nggak ada kejutan di tengah jalan.",
      sections: [
        {
          nomor: 1,
          judul: "Tentukan Dulu: Mau Lepas Kunci atau Pakai Driver?",
          isi: "Ini langkah pertama yang paling sering dilewatkan orang. Dua jenis layanan ini punya kelebihan masing-masing, dan pilihan yang salah bisa bikin perjalanan kurang optimal.\n\nKalau kamu sudah familiar dengan jalanan Cikarang dan Bekasi, layanan lepas kunci jauh lebih hemat dan fleksibel. Kamu bebas kemana saja, kapan saja, tanpa perlu menunggu atau menyesuaikan jadwal.\n\nTapi kalau kamu sedang dalam perjalanan bisnis, baru pertama ke Cikarang, atau mau bawa keluarga tanpa repot navigasi — layanan dengan driver adalah pilihan yang lebih cerdas. Kamu bisa fokus kerja atau istirahat di jalan, sementara driver yang handle semuanya.",
          highlight:
            "Tips singkat: Lepas kunci = lebih hemat & bebas. Dengan driver = lebih nyaman & tanpa stres. Sesuaikan dengan kondisi perjalananmu.",
        },
        {
          nomor: 2,
          judul: "Pesan Lebih Awal — Terutama di Akhir Pekan",
          isi: "Ini kedengarannya sepele, tapi banyak orang kecolongan di sini. Armada rental bisa penuh mendadak, terutama di akhir pekan, libur nasional, atau musim mudik.\n\nKalau kamu sudah tahu kapan butuh mobil, langsung booking dari jauh hari. Selain pilihan unitnya lebih banyak, kamu juga bisa diskusi lebih santai soal kebutuhan — misalnya minta jenis transmisi tertentu atau kapasitas penumpang yang sesuai.",
          list: [
            "Booking minimal H-1 untuk kebutuhan biasa",
            "Untuk akhir pekan atau libur panjang, sebaiknya book 3–5 hari sebelumnya",
            "Konfirmasi ulang ke rental sehari sebelum keberangkatan",
          ],
        },
        {
          nomor: 3,
          judul: "Cek dan Foto Kondisi Kendaraan Sebelum Berangkat",
          isi: "Ini kebiasaan yang kelihatan merepotkan, tapi sebenarnya melindungi kamu. Sebelum bawa mobil pergi, luangkan 2 menit untuk foto kondisi eksterior dari empat sisi.\n\nKalau ada goresan atau penyok kecil yang sudah ada sebelumnya — langsung komunikasikan ke pihak rental dan dokumentasikan. Ini bukan soal tidak percaya, tapi supaya sama-sama tenang selama perjalanan.\n\nSelain itu, cek juga hal-hal dasar seperti kondisi ban, ketersediaan BBM, fungsi AC, dan kelengkapan dokumen kendaraan (STNK, KIR jika ada).",
          highlight:
            "Foto sebelum pergi, foto setelah kembali. Dua langkah kecil yang bisa menghindari salah paham.",
        },
        {
          nomor: 4,
          judul: "Pahami Area Layanan dan Biaya Tambahan",
          isi: "Setiap rental punya kebijakan berbeda soal area jangkauan. FAZA Rent Car melayani area Cikarang, Bekasi, dan sekitarnya — tapi kalau kamu berencana perjalanan ke luar kota (Bandung, Jakarta, Karawang, dll.), tanya dulu ke pihak rental.\n\nBeberapa hal yang perlu kamu klarifikasi sebelum booking:\n",
          list: [
            "Apakah ada biaya tambahan untuk perjalanan malam?",
            "Bagaimana kebijakan overtime jika terlambat mengembalikan kendaraan?",
            "Apakah ada biaya parkir atau tol yang harus ditanggung sendiri?",
            "Untuk layanan driver — apakah makan dan akomodasi driver ditanggung penyewa?",
          ],
        },
        {
          nomor: 5,
          judul: "Simpan Nomor Rental — Bukan Cuma di Kepala",
          isi: "Perjalanan nggak selalu berjalan mulus 100%. Ban bocor, salah jalan, atau butuh perpanjang waktu sewa — semua bisa terjadi. Yang penting, kamu tahu harus menghubungi siapa.\n\nSimpan nomor WhatsApp FAZA Rent Car di kontakmu sebelum berangkat. Tim kami siap dihubungi kapan saja selama perjalanan untuk bantu koordinasi, baik itu soal teknis kendaraan maupun perubahan jadwal.",
          highlight:
            "FAZA Rent Car bisa dihubungi via WhatsApp 24 jam. Jangan tunggu ada masalah baru cari nomornya.",
        },
      ],
      kesimpulan:
        "Sewa mobil di Cikarang itu sebenarnya mudah — asalkan kamu tahu apa yang perlu dipersiapkan. Dengan 5 tips di atas, perjalananmu akan jauh lebih lancar: nggak ada kejutan soal kondisi kendaraan, nggak bingung soal biaya, dan kamu tahu harus menghubungi siapa kalau butuh bantuan.\n\nKalau kamu sudah siap atau masih ada yang mau ditanyakan, tim FAZA siap bantu via WhatsApp. Nggak perlu formal-formalan — tanya saja langsung.",
    },
  },
  {
    slug: "perbedaan-lepas-kunci-dengan-driver",
    judul: "Lepas Kunci vs Dengan Driver: Mana yang Lebih Cocok Buatmu?",
    ringkasan:
      "Bingung pilih layanan lepas kunci atau dengan driver? Ini perbandingan jujurnya — biar kamu bisa pilih yang paling sesuai kebutuhan.",
    tanggal: "15 Mei 2025",
    kategori: "Panduan",
    penulisLabel: "Tim FAZA Rent Car",
    estimasiBaca: "4 menit",
    coverEmoji: "🔑",
    coverGradient: "from-emerald-600 to-teal-400",
  },
  {
    slug: "wisata-cikarang-bekasi",
    judul: "7 Destinasi Wisata Seru dari Cikarang yang Wajib Dicoba",
    ringkasan:
      "Tinggal di Cikarang tapi bingung mau liburan ke mana? Ini 7 destinasi menarik yang bisa kamu jangkau dengan mudah dari Cikarang.",
    tanggal: "1 Mei 2025",
    kategori: "Wisata",
    penulisLabel: "Tim FAZA Rent Car",
    estimasiBaca: "6 menit",
    coverEmoji: "🗺️",
    coverGradient: "from-orange-500 to-amber-400",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
