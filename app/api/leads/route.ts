import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nama, unit_id, unit_name, unit_type, layanan, tgl_mulai, durasi } = body;

    if (!nama || !unit_id || !unit_name || !layanan || !tgl_mulai || !durasi) {
      return NextResponse.json({ error: "Field wajib tidak lengkap" }, { status: 400 });
    }

    await saveLead({
      nama,
      no_wa: body.no_wa,
      unit_id,
      unit_name,
      unit_type,
      layanan,
      tgl_mulai,
      durasi,
      lokasi: body.lokasi,
      source_page: body.source_page ?? "unknown",
      jalur: body.jalur ?? "form",
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[leads] save error:", err);
    return NextResponse.json({ error: "Gagal menyimpan lead" }, { status: 500 });
  }
}
