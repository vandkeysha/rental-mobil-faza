"use client";
import { MessageCircle } from "lucide-react";
import { buildGeneralWaLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildGeneralWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-modal hover:scale-110 active:scale-95 transition-transform duration-150"
    >
      <MessageCircle size={26} fill="white" stroke="none" />
    </a>
  );
}
