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
  {
    id: "avanza-at",
    slug: "toyota-avanza-at",
    nama: "Toyota Avanza AT",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 7,
      transmisi: "Automatic",
      bbm: "Bensin",
      tahun: 2022,
      fitur: ["AC", "Power Steering", "Audio System", "Central Lock"],
    },
    deskripsi: "Ideal untuk keluarga & perjalanan kota, nyaman untuk 7 penumpang.",
    foto: ["/media/mobil/avanza.jpg", "/media/mobil/mobil-extra-01.jpg", "/media/mobil/mobil-extra-02.jpg"],
    unggulan: true,
    tersedia: true,
  },
  {
    id: "brio-satya",
    slug: "honda-brio-satya",
    nama: "Honda Brio Satya",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 4,
      transmisi: "Manual",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["AC", "Audio System", "Power Window"],
    },
    deskripsi: "Lincah di jalanan kota, irit BBM, cocok untuk mobilitas harian.",
    foto: ["/media/mobil/brio.jpg", "/media/mobil/mobil-extra-03.jpg", "/media/mobil/mobil-extra-04.jpg"],
    unggulan: true,
    tersedia: true,
  },
  {
    id: "innova-reborn",
    slug: "toyota-innova-reborn-mt",
    nama: "Toyota Innova Reborn MT",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 8,
      transmisi: "Manual",
      bbm: "Bensin",
      tahun: 2021,
      fitur: ["AC Double Blower", "Airbag", "Audio System", "Power Steering"],
    },
    deskripsi: "MPV premium untuk keluarga besar & kunjungan bisnis klien.",
    foto: ["/media/mobil/innova.jpg", "/media/mobil/mobil-extra-05.jpg", "/media/mobil/mobil-extra-06.jpg"],
    unggulan: true,
    tersedia: true,
  },
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
    foto: ["/media/mobil/pajero.jpg", "/media/mobil/mobil-extra-07.jpg", "/media/mobil/mobil-extra-08.jpg"],
    unggulan: true,
    tersedia: true,
  },
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
      tahun: 2023,
      fitur: ["GR Sport", "Leather Seat", "TSS", "360 Camera"],
    },
    deskripsi: "Tampilan sporty & bertenaga, ideal representasi bisnis.",
    foto: ["/media/mobil/fortuner.jpg", "/media/mobil/mobil-extra-09.jpg", "/media/mobil/mobil-extra-10.jpg"],
    unggulan: false,
    tersedia: true,
  },
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
    foto: ["/media/mobil/alphard.jpg", "/media/mobil/mobil-extra-11.jpg", "/media/mobil/mobil-extra-12.jpg"],
    unggulan: true,
    tersedia: true,
  },

  // ── MOTOR ───────────────────────────────────────────────────────────────
  {
    id: "honda-scoopy",
    slug: "honda-scoopy",
    nama: "Honda Scoopy",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 115000,
    hargaLabel: "Rp115.000/hari",
    spesifikasi: {
      kapasitas: 1,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2022,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor matic stylish untuk mobilitas harian di Cikarang.",
    foto: ["/media/motor/scoopy.jpg", "/media/motor/motor-extra-01.jpg", "/media/motor/motor-extra-02.jpg"],
    unggulan: true,
    tersedia: true,
  },
  {
    id: "honda-beat",
    slug: "honda-beat",
    nama: "Honda Beat",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 115000,
    hargaLabel: "Rp115.000/hari",
    spesifikasi: {
      kapasitas: 1,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor irit dan ringkas, paling populer untuk harian.",
    foto: ["/media/motor/beat.jpg", "/media/motor/motor-extra-03.jpg", "/media/motor/motor-extra-04.jpg"],
    unggulan: true,
    tersedia: true,
  },
  {
    id: "yamaha-fazzio",
    slug: "yamaha-fazzio",
    nama: "Yamaha Fazzio",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 125000,
    hargaLabel: "Rp125.000/hari",
    spesifikasi: {
      kapasitas: 1,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor retro modern dengan desain unik dan nyaman dikendarai.",
    foto: ["/media/motor/fazzio.jpg", "/media/motor/motor-extra-05.jpg", "/media/motor/motor-extra-06.jpg"],
    unggulan: true,
    tersedia: true,
  },
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
    foto: ["/media/motor/nmax.jpg", "/media/motor/motor-extra-07.jpg", "/media/motor/motor-extra-08.jpg"],
    unggulan: true,
    tersedia: true,
  },
  {
    id: "honda-pcx",
    slug: "honda-pcx",
    nama: "Honda PCX",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 175000,
    hargaLabel: "Rp175.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan", "Smart Key"],
    },
    deskripsi: "Premium scooter dengan storage besar dan fitur modern.",
    foto: ["/media/motor/pcx.jpg", "/media/motor/motor-extra-09.jpg", "/media/motor/motor-extra-10.jpg"],
    unggulan: false,
    tersedia: true,
  },
  {
    id: "honda-stylo",
    slug: "honda-stylo-160",
    nama: "Honda Stylo 160",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 200000,
    hargaLabel: "Rp200.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2024,
      fitur: ["Helm", "Jas Hujan", "TFT Display"],
    },
    deskripsi: "Motor retro premium terbaru, tampil beda di jalan.",
    foto: ["/media/motor/stylo.jpg", "/media/motor/motor-extra-11.jpg", "/media/motor/motor-extra-12.jpg"],
    unggulan: false,
    tersedia: true,
  },
  {
    id: "yamaha-xmax",
    slug: "yamaha-xmax-250",
    nama: "Yamaha X-Max 250",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 350000,
    hargaLabel: "Rp350.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan", "Smart Key", "TFT Display"],
    },
    deskripsi: "Big scooter premium untuk touring nyaman jarak jauh.",
    foto: ["/media/motor/xmax.jpg", "/media/motor/motor-extra-13.jpg", "/media/motor/motor-extra-14.jpg"],
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
