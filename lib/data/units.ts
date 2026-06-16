export type UnitKategori = "lepas_kunci" | "driver" | "keduanya";
export type UnitTipe = "mobil" | "motor";

export interface Spesifikasi {
  kapasitas: number;
  transmisi: string;
  bbm: string;
  tahun: number;
  fitur?: string[];
}

export interface Unit {
  id: string;
  slug: string;
  nama: string;
  tipe: UnitTipe;
  kategori: UnitKategori;
  harga?: number;        // motor saja; mobil = undefined
  hargaLabel?: string;   // mis. "Rp115.000/hari"
  spesifikasi: Spesifikasi;
  deskripsi: string;
  foto: string[];
  unggulan: boolean;
  tersedia: boolean;
}

export const UNITS: Unit[] = [
  // ── MOBIL ───────────────────────────────────────────────────────────────

  // avanza
  {
    id: "avanza-at",
    slug: "toyota-avanza-at-g",
    nama: "Avanza AT Type G",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 7,
      transmisi: "Automatic",
      bbm: "Bensin",
      tahun: 2024,
      fitur: ["AC", "Power Steering", "Audio System", "Central Lock"],
    },
    deskripsi: "Ideal untuk keluarga & perjalanan kota, nyaman untuk 7 penumpang.",
    foto: ["/media/mobil/avanza/avanza revisi1.png","/media/mobil/avanza/Avanza revisi2.png","/media/mobil/avanza/Avanza revisi3 (1).png", "/media/mobil/avanza/avanza4.png", "/media/mobil/avanza/avanza5.png", "/media/mobil/avanza/avanza7.png"],
    unggulan: false,
    tersedia: true,
  },

  // brio
  {
    id: "brio-satya",
    slug: "Brio-E-satya",
    nama: "Brio E Satya",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 5,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["AC", "Audio System", "Power Window"],
    },
    deskripsi: "Lincah di jalanan kota, irit BBM, cocok untuk mobilitas harian.",
    foto: [ "/media/mobil/brio/revisi brio1.png","/media/mobil/brio/revisi brio.png","/media/mobil/brio/revisi brio2.png","/media/mobil/brio/brio3.png", "/media/mobil/brio/brio4.png"],
    unggulan: false,
    tersedia: true,
  },

  // innova
  {
    id: "innova-reborn",
    slug: "toyota-innova-reborn-AT",
    nama: "Toyota Innova Reborn AT",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 8,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2024,
      fitur: ["AC Double Blower", "Airbag", "Audio System", "Power Steering"],
    },
    deskripsi: "MPV premium untuk keluarga besar & kunjungan bisnis klien.",
    foto: ["/media/mobil/innova/innova revisi1 (1).png","/media/mobil/innova/Innova revisi2.png" ,"/media/mobil/innova/innova2.png", "/media/mobil/innova/innova3.png", "/media/mobil/innova/innova4.png"],
    unggulan: false,
    tersedia: true,
  },

  // pajero
  {
    id: "pajero-dakar",
    slug: "mitsubishi-pajero-dakar-at",
    nama: "Mitsubishi Pajero Dakar AT",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 7,
      transmisi: "Automatic",
      bbm: "Diesel",
      tahun: 2022,
      fitur: ["Sunroof", "360 Camera", "Leather Seat", "Keyless Entry"],
    },
    deskripsi: "SUV mewah diesel untuk perjalanan jauh & medan berat.",
    foto: ["/media/mobil/pajero/revisi pajero.png", "/media/mobil/pajero/pajero3.png", "/media/mobil/pajero/pajero4.png", "/media/mobil/pajero/pajero5.png", "/media/mobil/pajero/pajero6.png"],
    unggulan: false,
    tersedia: true,
  },

  // fortuner
  {
    id: "fortuner-gr",
    slug: "toyota-fortuner-gr-at",
    nama: "Toyota Fortuner GR AT",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 7,
      transmisi: "Automatic",
      bbm: "Diesel",
      tahun: 2022,
      fitur: ["GR Sport", "Leather Seat", "TSS", "360 Camera"],
    },
    deskripsi: "Tampilan sporty & bertenaga, ideal representasi bisnis.",
    foto: ["/media/mobil/fortuner/Revisi fortuner1.png","/media/mobil/fortuner/revisi fortuner.png","/media/mobil/fortuner/fortuner3.jpg", "/media/mobil/fortuner/fortuner4.png", "/media/mobil/fortuner/fortuner5.png"],
    unggulan: false,
    tersedia: true,
  },

  // alphard
  {
    id: "toyota-alphard",
    slug: "toyota-alphard",
    nama: "Toyota Alphard",
    tipe: "mobil",
    kategori: "driver",
    spesifikasi: {
      kapasitas: 7,
      transmisi: "Automatic",
      bbm: "Bensin",
      tahun: 2020,
      fitur: ["Captain Seat", "Sunroof", "Electric Door", "Wood Trim", "AC Multi Zone"],
    },
    deskripsi: "MPV mewah premium untuk perjalanan VIP, bandara, dan acara korporat.",
    foto: ["/media/mobil/alphard/alphard3.jpg", "/media/mobil/alphard/alphard1.jpg", "/media/mobil/alphard/alphard4.jpg", "/media/mobil/alphard/alphard5.jpg", "/media/mobil/alphard/alphard6.jpg", "/media/mobil/alphard/alphard7.jpg", "/media/mobil/alphard/alphard8.jpg", "/media/mobil/alphard/alphard9.jpg"],
    unggulan: true,
    tersedia: true,
  },
  
  // hiace
  {
    id: "toyota-hiace",
    slug: "toyota-hiace",
    nama: "Toyota HiAce",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 14,
      transmisi: "Manual",
      bbm: "Diesel",
      tahun: 2019,
      fitur: ["AC", "Audio System", "Power Steering", "Curtain"],
    },
    deskripsi: "Minibus kapasitas besar ideal untuk rombongan, wisata, dan perjalanan korporat.",
    foto: ["/media/mobil/hiAce-premio/hiace revisi.png","/media/mobil/hiAce-premio/hiace revisi1.png","/media/mobil/hiAce-premio/hiAce.png","/media/mobil/hiAce-premio/hiAce2.png","/media/mobil/hiAce-premio/hiAce3.png","/media/mobil/hiAce-premio/hiAce4.png","/media/mobil/hiAce-premio/hiAce5.png"],
    unggulan: false,
    tersedia: true,
  },

  // mercy
  {
    id: "mercedes-s450",
    slug: "mercedes-s450",
    nama: "Mercedes-Benz S450",
    tipe: "mobil",
    kategori: "driver",
    spesifikasi: {
      kapasitas: 4,
      transmisi: "Automatic",
      bbm: "Bensin",
      tahun: 2022,
      fitur: [
        "Executive Rear Seat",
        "Panoramic Sunroof",
        "Ambient Lighting",
        "Massage Seat",
        "Premium Sound System",
        "Electric Seat"
      ],
    },
    deskripsi:
      "Sedan mewah premium untuk perjalanan VIP, tamu eksekutif, wedding, dan acara eksklusif dengan kenyamanan kelas atas.",
    foto: [
      "/media/mobil/mercy/mercy1.png",
      "/media/mobil/mercy/mercy.png",
      "/media/mobil/mercy/mercy2.png",
      "/media/mobil/mercy/mercy3.png",
      "/media/mobil/mercy/mercy4.png"
    ],
    unggulan: true,
    tersedia: true,
  },

  // Toyota Xovy
  {
  id: "toyota-voxy",
  slug: "toyota-voxy",
  nama: "Toyota Voxy",
  tipe: "mobil",
  kategori: "driver",
  spesifikasi: {
    kapasitas: 7,
    transmisi: "Automatic",
    bbm: "Bensin",
    tahun: 2023,
    fitur: [
      "Captain Seat",
      "Electric Sliding Door",
      "Toyota Safety Sense",
      "Touchscreen Head Unit",
      "AC Digital"
    ],
  },
  deskripsi:
    "MPV premium yang nyaman untuk perjalanan keluarga, bisnis, dan antar jemput bandara.",
  foto: [
    "/media/mobil/Toyota Voxy/voxy1.png",
    "/media/mobil/Toyota Voxy/voxy2.png",
    "/media/mobil/Toyota Voxy/voxy3.png",
    "/media/mobil/Toyota Voxy/voxy4.png"
  ],
  unggulan: false,
  tersedia: true,
  },

  // Lexus LM
  {
  id: "lexus-lm350h",
  slug: "lexus-lm350h",
  nama: "Lexus LM 350h",
  tipe: "mobil",
  kategori: "driver",
  spesifikasi: {
    kapasitas: 7,
    transmisi: "Automatic",
    bbm: "Hybrid",
    tahun: 2024,
    fitur: [
      "Captain Seat",
      "Ottoman Seat",
      "Panoramic Roof",
      "Premium Audio",
      "Electric Sliding Door",
      "Ambient Lighting"
      ],
    },
    deskripsi:
      "MPV ultra premium untuk tamu VIP, eksekutif, dan perjalanan mewah dengan kenyamanan kelas atas.",
    foto: [
      "/media/mobil/Lexus LM/lexus2.png",
      "/media/mobil/Lexus LM/lexus1.png",
      "/media/mobil/Lexus LM/lexus3.png",
      "/media/mobil/Lexus LM/lexus4.png",
      "/media/mobil/Lexus LM/lexus5.png"
    ],
    unggulan: true,
    tersedia: true,
  },

  // land cruiser
  {
  id: "toyota-land-cruiser-gr",
  slug: "toyota-land-cruiser-gr",
  nama: "Toyota Land Cruiser GR",
  tipe: "mobil",
  kategori: "driver",
  spesifikasi: {
    kapasitas: 7,
    transmisi: "Automatic",
    bbm: "Diesel",
    tahun: 2023,
    fitur: [
      "4WD",
      "Sunroof",
      "Leather Seat",
      "Toyota Safety Sense",
      "Premium Audio"
      ],
    },
    deskripsi:
      "SUV premium berperforma tinggi untuk perjalanan VIP, wisata, dan medan berbagai kondisi jalan.",
    foto: [
      "/media/mobil/Land-Cruiser /land1.png",
      "/media/mobil/Land-Cruiser /land2.png",
      "/media/mobil/Land-Cruiser /land3.png",
      "/media/mobil/Land-Cruiser /land4.png",
      "/media/mobil/Land-Cruiser /land5.png"
    ],
    unggulan: true,
    tersedia: true,
  },

  // big and medium bus
{
  id: "bus-pariwisata",
  slug: "bus-pariwisata",
  nama: "Bus Pariwisata",
  tipe: "mobil",
  kategori: "driver",
  spesifikasi: {
    kapasitas: 59,
    transmisi: "Manual",
    bbm: "Diesel",
    tahun: 2023,
    fitur: [
      "Full AC",
      "Reclining Seat",
      "TV LED",
      "Audio Entertainment",
      "Microphone",
      "Bagasi Luas",
    ],
  },
  deskripsi:
    "Tersedia Medium Bus (29–35 seat) dan Big Bus (45–59 seat) untuk wisata, outing kantor, study tour, dan perjalanan rombongan.",
  foto: [
    "/media/mobil/big and medium bus/bus4.png",
    "/media/mobil/big and medium bus/bus2.png",
    "/media/mobil/big and medium bus/bus3.png",
    "/media/mobil/big and medium bus/bus1.png",
    "/media/mobil/big and medium bus/bus5.png",
    "/media/mobil/big and medium bus/bus6.png",
    "/media/mobil/big and medium bus/bus7.png",
  ],
  unggulan: true,
  tersedia: true,
},
  // ── MOTOR ───────────────────────────────────────────────────────────────

  // scoopy keyless 2026
  {
    id: "honda-scoopy",
    slug: "honda-scoopy",
    nama: "Honda Scoopy Keyless 2026",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 145000,
    hargaLabel: "145.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2026,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor matic stylish untuk mobilitas harian di Cikarang.",
    foto: ["/media/motor/scoopy2026/scoopy.jpg", "/media/motor/scoopy2026/scoopy1.jpg", "/media/motor/scoopy2026/scoopy4.jpg", "/media/motor/scoopy2026/scoopy6.jpg", "/media/motor/scoopy2026/scoopy7.jpg", "/media/motor/scoopy2026/scoopy8.jpg", "/media/motor/scoopy2026/scoopy9.jpg"],
    unggulan: true,
    tersedia: true,
  },

  // scoopy keyless 2025
  {
    id: "honda-scoopy-2025",
    slug: "honda-scoopy-2025",
    nama: "Honda Scoopy keyless 2025",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 135000,
    hargaLabel: "135.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2025,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor matic stylish untuk mobilitas harian di Cikarang.",
    foto: ["/media/motor/scoopy2025/scoopy1.png", "/media/motor/scoopy2025/scoopy2.png","/media/motor/scoopy2025/scoopy3.png","/media/motor/scoopy2025/scoopy4.png"],
    unggulan: false,
    tersedia: true,
  },

  // scoopy 2023
  {
    id: "honda-scoopy-2023",
    slug: "honda-scoopy-2023",
    nama: "Honda Scoopy 2023",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 125000,
    hargaLabel: "125.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor matic stylish untuk mobilitas harian di Cikarang.",
    foto: ["/media/motor/scoopy2023/scoopy4.png","/media/motor/scoopy2023/scoopy2.png","/media/motor/scoopy2023/scoopy3.png","/media/motor/scoopy2023/scoopy1.png"],
    unggulan: false,
    tersedia: true,
  },

  // scoopy 2019
  {
    id: "honda-scoopy-2019",
    slug: "honda-scoopy-2019",
    nama: "Honda Scoopy 2019",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 115000,
    hargaLabel: "115.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2019,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor matic stylish untuk mobilitas harian di Cikarang.",
    foto: ["/media/motor/scoopy2019/scoopy1.png","/media/motor/scoopy2019/scoopy2.png","/media/motor/scoopy2019/scoopy3.png","/media/motor/scoopy2019/scoopy4.png"],
    unggulan: false,
    tersedia: true,
  },

  // Yamaha Aerox
  {
    id: "yamaha-aerox",
    slug: "yamaha-aerox",
    nama: "Yamaha Aerox Modif",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 300000,
    hargaLabel: "Rp300.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2024,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor irit dan ringkas, paling populer untuk harian.",
    foto: ["/media/motor/yamaha aerox/aerox1.jpg", "/media/motor/yamaha aerox/aerox2.jpg", "/media/motor/yamaha aerox/aerox3.jpg", "/media/motor/yamaha aerox/aerox4.jpg", "/media/motor/yamaha aerox/aerox5.jpg", "/media/motor/yamaha aerox/aerox6.jpg","/media/motor/yamaha aerox/aerox7.jpg", "/media/motor/yamaha aerox/aerox8.jpeg"],
    unggulan: false,
    tersedia: true,
  },

  // fazzio
  {
    id: "yamaha-fazzio",
    slug: "yamaha-fazzio",
    nama: "Yamaha Fazzio",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 125000,
    hargaLabel: "Rp125.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor retro modern dengan desain unik dan nyaman dikendarai.",
    foto: ["/media/motor/fazzio/fazzio.jpeg", "/media/motor/fazzio/fazzio1.jpeg", "/media/motor/fazzio/fazzio2.jpeg", "/media/motor/fazzio/fazzio3.jpeg", "/media/motor/fazzio/fazzio4.jpeg", "/media/motor/fazzio/fazzio5.jpeg"],
    unggulan: false,
    tersedia: true,
  },

  // nmax
  {
    id: "yamaha-nmax",
    slug: "yamaha-nmax",
    nama: "Yamaha Nmax",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 175000,
    hargaLabel: "Rp175.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2022,
      fitur: ["Helm", "Jas Hujan", "USB Charger"],
    },
    deskripsi: "Maxi scooter nyaman untuk perjalanan lebih jauh.",
    foto: ["/media/motor/nmax2022/namx4.png","/media/motor/nmax2022/nmax1.png","/media/motor/nmax2022/nmax2.png","/media/motor/nmax2022/nmax3.png"],
    unggulan: true,
    tersedia: true,
  },

  // pcx
  {
    id: "honda-pcx",
    slug: "honda-pcx",
    nama: "Honda PCX 160",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 185000,
    hargaLabel: "Rp185.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2024,
      fitur: ["Helm", "Jas Hujan", "Smart Key"],
    },
    deskripsi: "Premium scooter dengan storage besar dan fitur modern.",
    foto: ["/media/motor/pcx/pcx.jpg", "/media/motor/pcx/pcx1.jpg", "/media/motor/pcx/PCX3.jpg", "/media/motor/pcx/PCX4.jpg"],
    unggulan: true,
    tersedia: true,
  },

// vario
  {
    id: "honda-vario",
    slug: "honda-vario",
    nama: "Honda Vario",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 135000,
    hargaLabel: "Rp135.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor matic populer untuk mobilitas harian di Cikarang.",
    foto: ["/media/motor/vario/vario1.jpeg", "/media/motor/vario/vario2.jpeg", "/media/motor/vario/vario3.jpeg", "/media/motor/vario/vario4.jpeg", "/media/motor/vario/vario5.jpeg"],
    unggulan: false,
    tersedia: true,
  },

  // beat
  {
    id: "honda-beat",
    slug: "honda-beat",
    nama: "Honda Beat",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 125000,
    hargaLabel: "Rp125.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor irit dan ringkas, paling populer untuk harian.",
    foto: ["/media/motor/beat/baet3.png","/media/motor/beat/beat1.png","/media/motor/beat/beat2.png","/media/motor/beat/beat4.jpeg"],
    unggulan: false,
    tersedia: true,
  },

  // stylo
  {
    id: "honda-stylo",
    slug: "honda-stylo",
    nama: "Honda Stylo 160",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 185000,
    hargaLabel: "Rp185.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2025,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor retro stylish dengan desain premium dan nyaman dikendarai.",
    foto: ["/media/motor/stylo/stylo1.png", "/media/motor/stylo/stylo2.png","/media/motor/stylo/stylo3.png","/media/motor/stylo/stylo4.png"],
    unggulan: true,
    tersedia: true,
  },

  // Xmax
  {
  id: "yamaha-xmax-2025",
  slug: "yamaha-xmax-2025",
  nama: "Yamaha X-MAX",
  tipe: "motor",
  kategori: "lepas_kunci",
  harga: 350000,
  hargaLabel: "350.000/hari",
  spesifikasi: {
    kapasitas: 2,
    transmisi: "Matic",
    bbm: "Bensin",
    tahun: 2025,
    fitur: ["Helm", "Jas Hujan"],
  },
  deskripsi: "Motor matic premium berkapasitas besar untuk perjalanan nyaman di Cikarang.",
  foto: ["/media/motor/xmax/xmax.jpg","/media/motor/xmax/Xmax1.jpg","/media/motor/xmax/Xmax3.jpg","/media/motor/xmax/xmax4.jpg"],
  unggulan: true,
  tersedia: true,
},

// Nmax turbo hitam 
{
  id: "yamaha-nmax-turbo-2024",
  slug: "yamaha-nmax-turbo-2024",
  nama: "Yamaha NMAX Turbo",
  tipe: "motor",
  kategori: "lepas_kunci",
  harga: 185000,
  hargaLabel: "185.000/hari",
  spesifikasi: {
    kapasitas: 2,
    transmisi: "Matic",
    bbm: "Bensin",
    tahun: 2024,
    fitur: ["Helm", "Jas Hujan"],
  },
  deskripsi: "Motor matic premium NMAX Turbo warna hitam untuk perjalanan nyaman di Cikarang.",
  foto: ["/media/motor/nmax2024/nmax revisi.png","/media/motor/nmax2024/nmax1.png","/media/motor/nmax2024/nmax2.png","/media/motor/nmax2024/nmax5.png"],
  unggulan: true,
  tersedia: true,
},

// nmax neo s
{
  id: "yamaha-nmax-neo-s-2025",
  slug: "yamaha-nmax-neo-s-2025",
  nama: "Yamaha NMAX Neo S 2025",
  tipe: "motor",
  kategori: "lepas_kunci",
  harga: 200000,
  hargaLabel: "200.000/hari",
  spesifikasi: {
    kapasitas: 2,
    transmisi: "Matic",
    bbm: "Bensin",
    tahun: 2025,
    fitur: ["Helm", "Jas Hujan"],
  },
  deskripsi: "Motor matic premium NMAX Neo S terbaru untuk perjalanan nyaman di Cikarang.",
  foto: ["/media/motor/nmax2025/nmax1.png","/media/motor/nmax2025/nmax2.png","/media/motor/nmax2025/nmax3.png","/media/motor/nmax2025/nmax4.png"],
  unggulan: false,
  tersedia: true,
},
];

export function getUnitBySlug(slug: string): Unit | undefined {
  return UNITS.find((u) => u.slug === slug);
}

export function getUnitById(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id);
}

export function getUnggulanUnits(): Unit[] {
  return UNITS.filter((u) => u.unggulan);
}

export function formatHarga(harga: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(harga);
}
