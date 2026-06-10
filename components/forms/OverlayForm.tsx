"use client";
import { useState, FormEvent } from "react";
import { MessageCircle, Loader2 } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { Input, Select } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import type { Unit } from "@/lib/data/units";
import { buildWaLink, buildWaMessage } from "@/lib/whatsapp";

interface OverlayFormProps {
  unit: Unit;
  open: boolean;
  onClose: () => void;
}

interface FormState {
  nama: string;
  tglMulai: string;
  durasi: string;
  layanan: "lepas_kunci" | "driver";
  lokasi: string;
}

interface FormErrors {
  nama?: string;
  tglMulai?: string;
  durasi?: string;
}

const today = () => new Date().toISOString().split("T")[0];

export default function OverlayForm({ unit, open, onClose }: OverlayFormProps) {
  const [form, setForm] = useState<FormState>({
    nama: "",
    tglMulai: "",
    durasi: "1",
    layanan: "lepas_kunci",
    lokasi: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.nama.trim()) errs.nama = "Nama wajib diisi";
    if (!form.tglMulai) errs.tglMulai = "Tanggal mulai wajib dipilih";
    else if (form.tglMulai < today()) errs.tglMulai = "Tanggal tidak boleh di masa lalu";
    if (!form.durasi || Number(form.durasi) < 1) errs.durasi = "Durasi minimal 1 hari";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const leadPayload = {
      nama: form.nama,
      unit_id: unit.id,
      unit_name: unit.nama,
      unit_type: unit.tipe,
      layanan: form.layanan,
      tgl_mulai: form.tglMulai,
      durasi: `${form.durasi} hari`,
      lokasi: form.lokasi || undefined,
      source_page: "detail",
      jalur: "form",
    };

    // Simpan lead (fire-and-forget; jangan blokir user jika gagal)
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadPayload),
    }).catch(() => {});

    const message = buildWaMessage({
      nama: form.nama,
      unitNama: unit.nama,
      unitTipe: unit.tipe,
      layanan: form.layanan,
      tglMulai: form.tglMulai,
      durasi: `${form.durasi} hari`,
      lokasi: form.lokasi || undefined,
    });
    const waLink = buildWaLink(message);
    setLoading(false);
    window.open(waLink, "_blank", "noopener,noreferrer");
    onClose();
  };

  const durasiOptions = Array.from({ length: 14 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} hari`,
  }));

  const layananOptions = [
    { value: "lepas_kunci", label: "Lepas Kunci (Tanpa Driver)" },
    { value: "driver", label: "Dengan Driver" },
  ];

  return (
    <Modal open={open} onClose={onClose} title={`Book — ${unit.nama}`}>
      {/* Unit context */}
      <div className="px-6 py-3 bg-surface-100 border-b border-line-200 text-sm text-ink-500">
        <span className="font-medium text-ink-700">{unit.nama}</span>
        {unit.tipe === "motor" && unit.hargaLabel && (
          <span className="ml-2 text-blue-600 font-semibold">{unit.hargaLabel}</span>
        )}
        {unit.tipe === "mobil" && (
          <span className="ml-2 text-blue-600 font-medium">Chat untuk harga terbaik</span>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="px-6 py-5 flex flex-col gap-4">
        {/* Honeypot (anti-spam) */}
        <input type="text" name="_hp" className="hidden" tabIndex={-1} aria-hidden="true" />

        <Input
          label="Nama Lengkap"
          placeholder="Masukkan nama Anda"
          value={form.nama}
          onChange={(e) => set("nama", e.target.value)}
          error={errors.nama}
          autoComplete="name"
          required
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Tanggal Mulai"
            type="date"
            value={form.tglMulai}
            min={today()}
            onChange={(e) => set("tglMulai", e.target.value)}
            error={errors.tglMulai}
            required
          />
          <Select
            label="Durasi"
            options={durasiOptions}
            value={form.durasi}
            onChange={(e) => set("durasi", e.target.value)}
            error={errors.durasi}
          />
        </div>

        <Select
          label="Jenis Layanan"
          options={layananOptions}
          value={form.layanan}
          onChange={(e) => set("layanan", e.target.value as "lepas_kunci" | "driver")}
        />

        <Input
          label="Lokasi Antar/Jemput (opsional)"
          placeholder="mis. Jl. Industri Bekasi No.12"
          value={form.lokasi}
          onChange={(e) => set("lokasi", e.target.value)}
        />

        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          fullWidth
          loading={loading}
          className="mt-1"
        >
          {!loading && <MessageCircle size={18} />}
          Cek Ketersediaan via WhatsApp
        </Button>

        <p className="text-xs text-center text-ink-500">
          Data Anda aman. Kami hanya menghubungi Anda terkait pemesanan ini.
        </p>
      </form>
    </Modal>
  );
}
