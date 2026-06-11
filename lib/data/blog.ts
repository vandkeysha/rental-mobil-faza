export interface BlogArticle {
  slug: string;
  judul: string;
  ringkasan: string;
  tanggal: string;
  kategori: string;
  penulisLabel: string;
  estimasiBaca: string;
  coverEmoji?: string;
  coverGradient?: string;
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
  highlight?: string;
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
        "Cikarang bukan cuma kawasan industri. Sekarang sudah banyak keluarga, profesional, dan wisatawan yang mampir ke sini baik untuk urusan kerja, kunjungan keluarga, maupun sekadar jalan-jalan ke Bekasi dan sekitarnya.\n\nNah, kalau kamu baru pertama kali mau sewa mobil di Cikarang, ada beberapa hal penting yang perlu kamu tahu. Bukan bikin ribet justru biar sewanya makin nyaman dan nggak ada kejutan di tengah jalan.",
      sections: [
        {
          nomor: 1,
          judul: "Tentukan Dulu: Mau Lepas Kunci atau Pakai Driver?",
          isi: "Ini langkah pertama yang paling sering dilewatkan orang. Dua jenis layanan ini punya kelebihan masing-masing, dan pilihan yang salah bisa bikin perjalanan kurang optimal.\n\nKalau kamu sudah familiar dengan jalanan Cikarang dan Bekasi, layanan lepas kunci jauh lebih hemat dan fleksibel. Kamu bebas kemana saja, kapan saja, tanpa perlu menunggu atau menyesuaikan jadwal.\n\nTapi kalau kamu sedang dalam perjalanan bisnis, baru pertama ke Cikarang, atau mau bawa keluarga tanpa repot navigasi layanan dengan driver adalah pilihan yang lebih cerdas. Kamu bisa fokus kerja atau istirahat di jalan, sementara driver yang handle semuanya.",
          highlight:
            "Tips singkat: Lepas kunci = lebih hemat & bebas. Dengan driver = lebih nyaman & tanpa stres. Sesuaikan dengan kondisi perjalananmu.",
        },
        {
          nomor: 2,
          judul: "Pesan Lebih Awal Terutama di Akhir Pekan",
          isi: "Ini kedengarannya sepele, tapi banyak orang kecolongan di sini. Armada rental bisa penuh mendadak, terutama di akhir pekan, libur nasional, atau musim mudik.\n\nKalau kamu sudah tahu kapan butuh mobil, langsung booking dari jauh hari. Selain pilihan unitnya lebih banyak, kamu juga bisa diskusi lebih santai soal kebutuhan misalnya minta jenis transmisi tertentu atau kapasitas penumpang yang sesuai.",
          list: [
            "Booking minimal H-1 untuk kebutuhan biasa",
            "Untuk akhir pekan atau libur panjang, sebaiknya book 3–5 hari sebelumnya",
            "Konfirmasi ulang ke rental sehari sebelum keberangkatan",
          ],
        },
        {
          nomor: 3,
          judul: "Cek dan Foto Kondisi Kendaraan Sebelum Berangkat",
          isi: "Ini kebiasaan yang kelihatan merepotkan, tapi sebenarnya melindungi kamu. Sebelum bawa mobil pergi, luangkan 2 menit untuk foto kondisi eksterior dari empat sisi.\n\nKalau ada goresan atau penyok kecil yang sudah ada sebelumnya langsung komunikasikan ke pihak rental dan dokumentasikan. Ini bukan soal tidak percaya, tapi supaya sama-sama tenang selama perjalanan.\n\nSelain itu, cek juga hal-hal dasar seperti kondisi ban, ketersediaan BBM, fungsi AC, dan kelengkapan dokumen kendaraan (STNK, KIR jika ada).",
          highlight:
            "Foto sebelum pergi, foto setelah kembali. Dua langkah kecil yang bisa menghindari salah paham.",
        },
        {
          nomor: 4,
          judul: "Pahami Area Layanan dan Biaya Tambahan",
          isi: "Setiap rental punya kebijakan berbeda soal area jangkauan. FAZA Rent Car melayani area Cikarang, Bekasi, dan sekitarnya tapi kalau kamu berencana perjalanan ke luar kota (Bandung, Jakarta, Karawang, dll.), tanya dulu ke pihak rental.\n\nBeberapa hal yang perlu kamu klarifikasi sebelum booking:\n",
          list: [
            "Apakah ada biaya tambahan untuk perjalanan malam?",
            "Bagaimana kebijakan overtime jika terlambat mengembalikan kendaraan?",
            "Apakah ada biaya parkir atau tol yang harus ditanggung sendiri?",
            "Untuk layanan driver apakah makan dan akomodasi driver ditanggung penyewa?",
          ],
        },
        {
          nomor: 5,
          judul: "Simpan Nomor Rental Bukan Cuma di Kepala",
          isi: "Perjalanan nggak selalu berjalan mulus 100%. Ban bocor, salah jalan, atau butuh perpanjang waktu sewa semua bisa terjadi. Yang penting, kamu tahu harus menghubungi siapa.\n\nSimpan nomor WhatsApp FAZA Rent Car di kontakmu sebelum berangkat. Tim kami siap dihubungi kapan saja selama perjalanan untuk bantu koordinasi, baik itu soal teknis kendaraan maupun perubahan jadwal.",
          highlight:
            "FAZA Rent Car bisa dihubungi via WhatsApp 24 jam. Jangan tunggu ada masalah baru cari nomornya.",
        },
      ],
      kesimpulan:
        "Sewa mobil di Cikarang itu sebenarnya mudah asalkan kamu tahu apa yang perlu dipersiapkan. Dengan 5 tips di atas, perjalananmu akan jauh lebih lancar: nggak ada kejutan soal kondisi kendaraan, nggak bingung soal biaya, dan kamu tahu harus menghubungi siapa kalau butuh bantuan.\n\nKalau kamu sudah siap atau masih ada yang mau ditanyakan, tim FAZA siap bantu via WhatsApp. Nggak perlu formal-formalan tanya saja langsung.",
    },
  },

  // ── ARTIKEL 2 ────────────────────────────────────────────────────────────
  {
    slug: "perbedaan-lepas-kunci-dengan-driver",
    judul: "Lepas Kunci vs Dengan Driver: Mana yang Lebih Cocok Buatmu?",
    ringkasan:
      "Bingung pilih layanan lepas kunci atau dengan driver? Ini perbandingan jujurnya biar kamu bisa pilih yang paling sesuai kebutuhan.",
    tanggal: "15 Mei 2025",
    kategori: "Panduan",
    penulisLabel: "Tim FAZA Rent Car",
    estimasiBaca: "4 menit",
    coverEmoji: "🔑",
    coverGradient: "from-emerald-600 to-teal-400",
    content: {
      intro:
        "Saat mau sewa mobil, pertanyaan pertama yang sering muncul adalah: pakai driver atau lepas kunci? Keduanya punya keunggulan masing-masing, dan jawabannya tergantung situasi kamu bukan mana yang lebih baik secara umum.\n\nArtikel ini bakal bantu kamu mikir lebih jernih supaya pilihannya tepat dan perjalanan makin nyaman.",
      sections: [
        {
          nomor: 1,
          judul: "Apa Itu Layanan Lepas Kunci?",
          isi: "Lepas kunci artinya kamu menyewa kendaraan dan mengemudikannya sendiri. Setelah proses serah terima dan verifikasi dokumen selesai, kendaraan sepenuhnya ada di tanganmu selama masa sewa.\n\nLayanan ini cocok untuk kamu yang sudah tahu jalanan Cikarang dan sekitarnya, ingin fleksibel tanpa perlu mencocokkan jadwal dengan driver, dan tentu saja ingin menghemat biaya.",
          list: [
            "Wajib punya SIM A aktif (untuk mobil) atau SIM C (untuk motor)",
            "Harga lebih terjangkau dibanding layanan dengan driver",
            "Bebas kemana saja dan kapan saja selama masa sewa",
            "Cocok untuk perjalanan harian, belanja, atau urusan pribadi",
          ],
          highlight:
            "Lepas kunci adalah pilihan paling hemat dan fleksibel selama kamu nyaman mengemudi sendiri.",
        },
        {
          nomor: 2,
          judul: "Apa Itu Layanan Dengan Driver?",
          isi: "Layanan dengan driver artinya kamu menyewa kendaraan sekaligus pengemudinya. Driver FAZA sudah berpengalaman, hafal jalanan Cikarang dan Bekasi, dan siap mengantar kamu ke tujuan dengan nyaman.\n\nLayanan ini sangat cocok untuk perjalanan bisnis, acara keluarga, atau kamu yang baru pertama kali ke Cikarang dan tidak ingin repot navigasi.",
          list: [
            "Tidak perlu SIM cukup KTP asli",
            "Cocok untuk tamu, klien bisnis, atau perjalanan keluarga",
            "Driver berpengalaman dan mengenal jalur lokal",
            "Lebih santai kamu bisa kerja atau istirahat di perjalanan",
          ],
          highlight:
            "Dengan driver, kamu tinggal duduk dan menikmati perjalanan. Semua urusan kemudi sudah beres.",
        },
        {
          nomor: 3,
          judul: "Perbandingan Langsung: Mana yang Pas Buat Situasimu?",
          isi: "Daripada bingung, coba cocokkan situasimu dengan dua kondisi di bawah ini.",
          list: [
            "Kamu tahu jalanan & mau hemat → pilih Lepas Kunci",
            "Kamu bawa tamu atau klien kantor → pilih Dengan Driver",
            "Perjalanan jauh lintas kota → Dengan Driver lebih disarankan",
            "Kebutuhan harian & mobilitas fleksibel → Lepas Kunci lebih praktis",
            "Tidak punya SIM → wajib pilih Dengan Driver",
          ],
          highlight:
            "Tidak ada pilihan yang salah keduanya sama-sama tersedia di FAZA. Yang penting sesuai kebutuhan.",
        },
        {
          nomor: 4,
          judul: "Soal Harga: Apa Bedanya?",
          isi: "Layanan lepas kunci umumnya lebih murah karena kamu yang mengemudi sendiri. Layanan dengan driver dikenakan biaya tambahan untuk jasa pengemudi, yang mencakup waktu kerja driver selama masa sewa.\n\nUntuk informasi harga terkini dan detail biaya, hubungi tim FAZA langsung via WhatsApp kami akan bantu hitung sesuai kebutuhan perjalananmu.",
        },
      ],
      kesimpulan:
        "Lepas kunci atau dengan driver keduanya bisa jadi pilihan terbaik, tergantung kondisi kamu. Yang paling penting adalah kenyamanan dan keamanan perjalananmu.\n\nKalau masih ragu atau butuh rekomendasi, ceritakan kebutuhanmu ke tim FAZA via WhatsApp. Kami bantu pilihkan yang paling pas.",
    },
  },

  // ── ARTIKEL 3 ────────────────────────────────────────────────────────────
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
    content: {
      intro:
        "Cikarang sering dianggap cuma kawasan industri tapi kalau kamu tahu ke mana harus pergi, ada banyak tempat seru yang bisa dijangkau dalam 30 menit sampai 2 jam dari sini.\n\nBerikut 7 destinasi yang kami rekomendasikan, mulai dari yang cocok untuk keluarga, pasangan, sampai yang sekadar mau kabur sejenak dari rutinitas kerja.",
      sections: [
        {
          nomor: 1,
          judul: "Pantai Mutiara Bekasi",
          isi: "Tidak perlu jauh-jauh ke Anyer. Pantai Mutiara di Bekasi Utara bisa jadi pilihan untuk sekedar menikmati angin laut dan matahari sore. Jaraknya sekitar 40–50 menit dari pusat Cikarang.\n\nCocok untuk piknik keluarga atau jalan-jalan sore. Ada area parkir luas dan beberapa warung makan di sekitar lokasi.",
          highlight:
            "Waktu terbaik: sore hari menjelang sunset. Bawa tikar dan camilan, suasananya santai.",
        },
        {
          nomor: 2,
          judul: "Taman Mini Indonesia Indah (TMII)",
          isi: "Hanya sekitar 45 menit dari Cikarang lewat tol, TMII adalah destinasi yang cocok banget untuk keluarga dengan anak-anak. Ada museum, wahana, danau perahu angsa, dan replika rumah adat dari seluruh Indonesia.\n\nAktivitasnya banyak dan harganya terjangkau bisa habiskan setengah hari sampai seharian penuh di sini.",
          list: [
            "Cocok untuk keluarga dengan anak usia 4–12 tahun",
            "Ada area makan yang luas dan beragam",
            "Buka dari pagi sampai sore, tutup Senin",
          ],
        },
        {
          nomor: 3,
          judul: "Kota Tua Jakarta",
          isi: "Sekitar 1 jam dari Cikarang, Kota Tua Jakarta adalah destinasi yang wajib dikunjungi minimal sekali. Bangunan-bangunan kolonial Belanda, museum sejarah, dan suasana yang unik bikin tempat ini selalu ramai dikunjungi.\n\nSempurnakan kunjungan dengan bersepeda onthel di kawasan Fatahillah atau ngopi di kafe-kafe bergaya retro di sekitarnya.",
          highlight:
            "Datang pagi hari untuk dapat suasana yang lebih tenang sebelum pengunjung membludak siang hari.",
        },
        {
          nomor: 4,
          judul: "Jungle World Bekasi",
          isi: "Salah satu wahana air dan hiburan keluarga terbesar di Bekasi. Jungle World cocok banget untuk liburan bersama anak-anak yang butuh aktivitas fisik dan mau basah-basahan.\n\nTersedia berbagai wahana dari yang ringan untuk anak kecil sampai yang memacu adrenalin untuk remaja dan dewasa.",
          list: [
            "Siapkan baju ganti dan handuk ekstra",
            "Tersedia loker penyimpanan barang",
            "Ada area food court dengan pilihan makanan yang cukup lengkap",
          ],
        },
        {
          nomor: 5,
          judul: "Gunung Pancar, Bogor",
          isi: "Kalau mau suasana yang lebih sejuk dan tenang, Gunung Pancar di Bogor bisa ditempuh sekitar 1,5 jam dari Cikarang. Ada pemandian air panas alami, camping ground, dan jalur trekking ringan di tengah hutan pinus.\n\nCocok untuk weekend getaway yang tidak terlalu jauh tapi benar-benar terasa berbeda dari suasana Cikarang.",
          highlight:
            "Bawa jaket suhu di sini bisa turun drastis di malam hari, terutama saat musim hujan.",
        },
        {
          nomor: 6,
          judul: "Kawasan Puncak, Bogor",
          isi: "Destinasi klasik yang tidak pernah membosankan. Dari Cikarang, Puncak bisa ditempuh sekitar 1,5–2 jam tergantung kondisi lalu lintas.\n\nNikmati teh panas di kebun teh Gunung Mas, berkunjung ke Taman Safari, atau sekadar menikmati udara sejuk dan pemandangan hijau yang menyegarkan mata.",
          list: [
            "Hindari akhir pekan pagi lalu lintas bisa sangat padat",
            "Rekomendasikan berangkat Sabtu malam atau dini hari Minggu",
            "Banyak villa dan penginapan dengan harga terjangkau di area ini",
          ],
        },
        {
          nomor: 7,
          judul: "Pantai Carita, Banten",
          isi: "Untuk liburan yang sedikit lebih jauh sekitar 2,5–3 jam dari Cikarang Pantai Carita di Banten menawarkan air laut yang lebih bersih dan suasana yang jauh lebih sepi dibanding pantai-pantai di dekat Jakarta.\n\nCocok untuk weekend trip menginap satu malam. Bisa sekalikan dengan kunjungan ke Krakatau atau snorkeling di perairan sekitar.",
          highlight:
            "Pantai Carita cocok untuk trip menginap banyak resort dengan paket dua hari satu malam yang terjangkau.",
        },
      ],
      kesimpulan:
        "Cikarang itu strategis ke Jakarta dekat, ke Bogor dekat, ke pantai juga tidak jauh. Kamu tidak perlu liburan jauh-jauh untuk bisa menikmati pengalaman yang berbeda.\n\nKalau sudah punya destinasi yang menarik, tim FAZA siap bantu urusan kendaraannya. Mau lepas kunci atau pakai driver, tinggal hubungi kami dan perjalananmu bisa langsung direncanakan.",
    },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}