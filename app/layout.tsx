import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FAZA Rent Car — Rental Mobil & Motor Cikarang",
    template: "%s | FAZA Rent Car",
  },
  description:
    "Rental mobil dan motor terpercaya di Cikarang sejak 2012. PT FAZA Cemerlang Abadi — layanan lepas kunci & dengan driver, armada terawat, harga terbaik.",
  keywords: ["rental mobil cikarang", "sewa motor cikarang", "rental mobil bekasi", "FAZA rent car"],
  openGraph: {
    siteName: "FAZA Rent Car",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
