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
    foto: ["/media/mobil/avanza/avanza2.jpg", "/media/mobil/avanza/avanza3.png", "/media/mobil/avanza/avanza4.png", "/media/mobil/avanza/avanza5.png", "/media/mobil/avanza/avanza6.png", "/media/mobil/avanza/avanza7.png"],
    unggulan: false,
    tersedia: true,
  },

  // brio
  {
    id: "brio-satya",
    slug: "honda-brio-satya",
    nama: "Honda Brio Satya",
    tipe: "mobil",
    kategori: "keduanya",
    spesifikasi: {
      kapasitas: 5,
      transmisi: "Manual",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["AC", "Audio System", "Power Window"],
    },
    deskripsi: "Lincah di jalanan kota, irit BBM, cocok untuk mobilitas harian.",
    foto: ["/media/mobil/brio/brio.jpg", "/media/mobil/brio/brio1.png", "/media/mobil/brio/brio2.png", "/media/mobil/brio/brio3.png", "/media/mobil/brio/brio4.png"],
    unggulan: false,
    tersedia: true,
  },

  // innova
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
    foto: ["/media/mobil/innova/innova.jpg", "/media/mobil/innova/innova1.jpg", "/media/mobil/innova/innova2.png", "/media/mobil/innova/innova3.png", "/media/mobil/innova/innova4.png"],
    unggulan: true,
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
    foto: ["/media/mobil/pajero/pajero.jpg", "/media/mobil/pajero/pajero1.png", "/media/mobil/pajero/pajero2.png", "/media/mobil/pajero/pajero3.png", "/media/mobil/pajero/pajero4.png", "/media/mobil/pajero/pajero5.png", "/media/mobil/pajero/pajero6.png"],
    unggulan: true,
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
      tahun: 2023,
      fitur: ["GR Sport", "Leather Seat", "TSS", "360 Camera"],
    },
    deskripsi: "Tampilan sporty & bertenaga, ideal representasi bisnis.",
    foto: ["/media/mobil/fortuner/fortuner.jpeg", "/media/mobil/fortuner/fortuner.jpg", "/media/mobil/fortuner/fortuner2.jpg", "/media/mobil/fortuner/fortuner3.jpg", "/media/mobil/fortuner/fortuner4.png", "/media/mobil/fortuner/fortuner5.png"],
    unggulan: true,
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
    foto: ["/media/mobil/alphard/alphard.jpg", "/media/mobil/alphard/alphard1.jpg", "/media/mobil/alphard/alphard3.jpg", "/media/mobil/alphard/alphard4.jpg", "/media/mobil/alphard/alphard5.jpg", "/media/mobil/alphard/alphard6.jpg", "/media/mobil/alphard/alphard7.jpg", "/media/mobil/alphard/alphard8.jpg", "/media/mobil/alphard/alphard9.jpg","/media/mobil/alphard/alphard10.jpg", "/media/mobil/alphard/alphard11.jpg", "/media/mobil/alphard/Toyota Voxy.jpg"],
    unggulan: true,
    tersedia: true,
  },

  // ── MOTOR ───────────────────────────────────────────────────────────────

  // scoopy
  {
    id: "honda-scoopy",
    slug: "honda-scoopy",
    nama: "Honda Scoopy Tahun 2026",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 125000 - 145000,
    hargaLabel: "Rp125.000 - 145.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2026,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor matic stylish untuk mobilitas harian di Cikarang.",
    foto: ["/media/motor/scoopy/scoopy.jpg", "/media/motor/scoopy/scoopy1.jpg", "/media/motor/scoopy/scoopy4.jpg", "/media/motor/scoopy/scoopy6.jpg", "/media/motor/scoopy/scoopy7.jpg", "/media/motor/scoopy/scoopy8.jpg", "/media/motor/scoopy/scoopy9.jpg"],
    unggulan: true,
    tersedia: true,
  },

  // Yamaha Aerox
  {
    id: "yamaha-aerox",
    slug: "yamaha-aerox",
    nama: "Yamaha Aerox",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 115000,
    hargaLabel: "Rp115.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
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
    foto: ["/media/motor/nmax/nmax.jpg", "/media/motor/nmax/nmax1.jpg", "/media/motor/nmax/nmax.jpg", "/media/motor/nmax/nmax3.jpg", "/media/motor/nmax/nmax4.jpg", "/media/motor/nmax/nmax5.jpg"],
    unggulan: true,
    tersedia: true,
  },

  // pcx
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
    nama: "Honda Stylo",
    tipe: "motor",
    kategori: "lepas_kunci",
    harga: 185000,
    hargaLabel: "Rp185.000/hari",
    spesifikasi: {
      kapasitas: 2,
      transmisi: "Matic",
      bbm: "Bensin",
      tahun: 2023,
      fitur: ["Helm", "Jas Hujan"],
    },
    deskripsi: "Motor retro stylish dengan desain premium dan nyaman dikendarai.",
    foto: ["/media/motor/stylo/stylo1.png", "/media/motor/stylo/stylo2.png","/media/motor/stylo/stylo3.png","/media/motor/stylo/stylo4.png"],
    unggulan: true,
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
