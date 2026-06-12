export interface Testimonial {
  id: string;
  nama: string;
  avatar?: string;
  rating: number;
  kutipan: string;
  tanggal: string;
  unitTerkait?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    nama: "Budi Santoso",
    rating: 5,
    kutipan: "Pelayanan sangat ramah dan responsif. Mobilnya bersih dan terawat. Highly recommended untuk rental di Cikarang!",
    tanggal: "Mei 2025",
    unitTerkait: "toyota-avanza-at",
  },
  {
    id: "2",
    nama: "Rina Kusuma",
    rating: 5,
    kutipan: "Sudah 3x sewa di FAZA, selalu puas. Proses booking via WA cepat, unit sesuai foto. Harga juga bersaing.",
    tanggal: "April 2025",
    unitTerkait: "honda-brio-satya",
  },
  {
    id: "3",
    nama: "Agus Firmansyah",
    rating: 5,
    kutipan: "Sewa motor untuk keperluan kerja sehari-hari. Kondisi motor prima, helm dan jas hujan sudah disediakan.",
    tanggal: "Juni 2025",
    unitTerkait: "honda-beat",
  },
  {
    id: "4",
    nama: "Dewi Rahayu",
    rating: 5,
    kutipan: "Dengan driver nya profesional dan tepat waktu. Anak-anak nyaman di perjalanan. Terima kasih FAZA!",
    tanggal: "Maret 2025",
    unitTerkait: "toyota-innova-reborn",
  },
  {
    id: "5",
    nama: "PT Maju Bersama",
    rating: 5,
    kutipan: "Kami langganan untuk kebutuhan operasional kantor. Armada banyak pilihan, ada invoice resmi PT. Sangat membantu.",
    tanggal: "Februari 2025",
  },
  {
    id: "6",
    nama: "Hendra Wijaya",
    rating: 4,
    kutipan: "Motor Nmax nya mulus banget. Cocok buat keliling industri. Proses sewa mudah, tidak ribet.",
    tanggal: "Januari 2025",
    unitTerkait: "yamaha-nmax",
  },
];
