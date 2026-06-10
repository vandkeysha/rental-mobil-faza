const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "6281234567890";

export interface LeadFormData {
  nama: string;
  unitNama: string;
  unitTipe: string;
  layanan: "lepas_kunci" | "driver";
  tglMulai: string;
  durasi: string;
  lokasi?: string;
}

export function buildWaMessage(data: LeadFormData): string {
  const layananLabel = data.layanan === "lepas_kunci" ? "Lepas Kunci" : "Dengan Driver";
  return (
    `Halo FAZA Rent Car, saya ingin menyewa:\n` +
    `• Unit      : ${data.unitNama} (${data.unitTipe})\n` +
    `• Layanan   : ${layananLabel}\n` +
    `• Nama      : ${data.nama}\n` +
    `• Mulai     : ${data.tglMulai}\n` +
    `• Durasi    : ${data.durasi}\n` +
    `• Lokasi    : ${data.lokasi || "-"}\n\n` +
    `Apakah unit tersedia pada tanggal tersebut? Terima kasih.`
  );
}

export function buildWaLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildQuickWaLink(unitNama: string): string {
  const msg = `Halo FAZA Rent Car, saya tertarik menyewa *${unitNama}*. Boleh info ketersediaan dan harganya? Terima kasih.`;
  return buildWaLink(msg);
}

export function buildGeneralWaLink(): string {
  return `https://wa.me/${WA_NUMBER}`;
}
