import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  nama: string;
  no_wa?: string;
  unit_id: string;
  unit_name: string;
  unit_type: string;
  layanan: "lepas_kunci" | "driver";
  tgl_mulai: string;
  durasi: string;
  lokasi?: string;
  source_page?: string;
  jalur?: "form" | "wa_cepat";
}

export async function saveLead(lead: Lead): Promise<void> {
  const { error } = await supabase.from("leads").insert([{ ...lead, status: "new" }]);
  if (error) throw new Error(error.message);
}
