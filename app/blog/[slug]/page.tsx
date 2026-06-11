import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MessageCircle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";
import { ARTICLES, getArticleBySlug } from "@/lib/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.judul} FAZA Rent Car`,
    description: article.ringkasan,
  };
}

const KATEGORI_COLOR: Record<string, string> = {
  Tips: "bg-blue-100 text-blue-700",
  Panduan: "bg-emerald-100 text-emerald-700",
  Wisata: "bg-orange-100 text-orange-700",
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-surface-100">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-line-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-ink-400">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <ChevronRight size={11} />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Galeri & Blog
            </Link>
            <ChevronRight size={11} />
            <span className="text-ink-300 truncate max-w-[220px]">
              {article.judul}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Layout ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-8 items-start relative">

          {/* ══════════════ MAIN ══════════════ */}
          <div className="flex-1 min-w-0">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  KATEGORI_COLOR[article.kategori] ?? "bg-surface-200 text-ink-500"
                }`}
              >
                {article.kategori}
              </span>
              <span className="flex items-center gap-1 text-xs text-ink-400">
                <Clock size={11} />
                {article.estimasiBaca} baca
              </span>
              <span className="flex items-center gap-1 text-xs text-ink-400">
                <Calendar size={11} />
                {article.tanggal}
              </span>
            </div>

            {/* Title + summary */}
            <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 leading-tight mb-3">
              {article.judul}
            </h1>
            <p className="text-ink-500 text-sm leading-relaxed mb-6">
              {article.ringkasan}
            </p>

            {/* Article card */}
            <div className="bg-white rounded-2xl border border-line-200 shadow-sm overflow-hidden">
              {article.content ? (
                <article className="p-6 sm:p-8">

                  {/* Intro */}
                  <div className="mb-8">
                    {article.content.intro.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-ink-700 leading-relaxed text-sm mb-4 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="border-t border-line-200 mb-8" />

                  {/* Sections */}
                  <div className="space-y-10">
                    {article.content.sections.map((section, idx) => (
                      <section key={idx}>
                        <div className="flex items-start gap-3 mb-4">
                          {section.nomor !== undefined && (
                            <span className="shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                              {section.nomor}
                            </span>
                          )}
                          <h2 className="text-base sm:text-lg font-bold text-ink-900 leading-snug">
                            {section.judul}
                          </h2>
                        </div>

                        <div className={section.nomor !== undefined ? "pl-10" : ""}>
                          {section.isi.split("\n\n").map((para, i) => (
                            <p
                              key={i}
                              className="text-ink-700 text-sm leading-relaxed mb-4 last:mb-0"
                            >
                              {para}
                            </p>
                          ))}

                          {section.list && section.list.length > 0 && (
                            <ul className="mt-4 space-y-2.5">
                              {section.list.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2.5 text-ink-700 text-sm"
                                >
                                  <CheckCircle
                                    size={15}
                                    className="text-blue-500 shrink-0 mt-0.5"
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}

                          {section.highlight && (
                            <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
                              <p className="text-sm text-blue-700 leading-relaxed font-medium">
                                💡 {section.highlight}
                              </p>
                            </div>
                          )}
                        </div>
                      </section>
                    ))}
                  </div>

                  <div className="border-t border-line-200 my-8" />

                  {/* Kesimpulan */}
                  <section>
                    <h2 className="text-base font-bold text-ink-900 mb-4">
                      Kesimpulan
                    </h2>
                    {article.content.kesimpulan.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-ink-700 text-sm leading-relaxed mb-4 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </section>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-3 pt-6 border-t border-line-200">
                    <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      F
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-800">
                        {article.penulisLabel}
                      </p>
                      <p className="text-xs text-ink-400">
                        Diterbitkan {article.tanggal}
                      </p>
                    </div>
                  </div>
                </article>
              ) : (
                <div className="p-6 sm:p-8">
                  <p className="text-ink-500 text-sm leading-relaxed">
                    Konten artikel ini sedang disiapkan. Sementara itu, hubungi
                    kami via WhatsApp untuk pertanyaan seputar rental kendaraan
                    di Cikarang.
                  </p>
                </div>
              )}
            </div>

            {/* Back */}
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <ArrowLeft size={14} />
                Kembali ke Blog
              </Link>
            </div>
          </div>

          {/* ══════════════ SIDEBAR ══════════════ */}
        <aside className="hidden lg:flex flex-col gap-5 w-[280px] shrink-0 sticky top-24 self-start">
            {/* Author / CTA card */}
            <div className="bg-white rounded-2xl border border-line-200 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  F
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-800">
                    Tim FAZA Rent Car
                  </p>
                  <p className="text-xs text-ink-400">{article.tanggal}</p>
                </div>
              </div>
              <a
                href={buildGeneralWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl py-2.5 transition-colors"
              >
                <MessageCircle size={15} />
                Chat WhatsApp
              </a>
            </div>

            {/* Artikel lainnya */}
            {related.length > 0 && (
              <div className="bg-white rounded-2xl border border-line-200 p-5">
                <h3 className="text-sm font-bold text-ink-800 mb-4">
                  Artikel Lainnya
                </h3>
                <div className="space-y-3">
                  {related.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/blog/${a.slug}`}
                      className="group flex gap-3 items-start hover:bg-surface-100 rounded-xl p-2 -mx-2 transition-colors"
                    >
                      <div
                        className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
                          a.coverGradient ?? "from-blue-500 to-blue-400"
                        } flex items-center justify-center text-xl`}
                      >
                        {a.coverEmoji ?? "📰"}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-semibold text-ink-400 uppercase tracking-wide">
                          {a.kategori}
                        </span>
                        <p className="text-xs font-semibold text-ink-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mt-0.5">
                          {a.judul}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}