import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MessageCircle, CheckCircle, ChevronRight } from "lucide-react";
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
    title: `${article.judul} — FAZA Rent Car`,
    description: article.ringkasan,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const KATEGORI_COLOR: Record<string, string> = {
    Tips: "bg-blue-100/60 text-blue-700",
    Panduan: "bg-emerald-100/60 text-emerald-700",
    Wisata: "bg-orange-100/60 text-orange-700",
  };

  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-surface-100">
      {/* ── Hero banner ── */}
      <div
        className={`bg-gradient-to-br ${article.coverGradient ?? "from-blue-600 to-blue-400"} text-white`}
      >
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 pt-10 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-white/40 truncate max-w-[160px]">{article.judul}</span>
          </nav>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${KATEGORI_COLOR[article.kategori] ?? "bg-white/20 text-white"}`}
            >
              {article.kategori}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <Clock size={12} /> {article.estimasiBaca} baca
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <Calendar size={12} /> {article.tanggal}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            {article.judul}
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-prose">
            {article.ringkasan}
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 -mt-6 pb-16">
        <div className="bg-white rounded-2xl border border-line-200 shadow-sm overflow-hidden">

          {article.content ? (
            <article className="p-6 sm:p-8 lg:p-10">
              {/* Intro */}
              <div className="mb-8">
                {article.content.intro.split("\n\n").map((para, i) => (
                  <p key={i} className="text-ink-700 leading-relaxed text-base mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-line-200 mb-8" />

              {/* Sections */}
              <div className="space-y-10">
                {article.content.sections.map((section, idx) => (
                  <section key={idx}>
                    {/* Section heading */}
                    <div className="flex items-start gap-3 mb-4">
                      {section.nomor !== undefined && (
                        <span className="shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                          {section.nomor}
                        </span>
                      )}
                      <h2 className="text-lg sm:text-xl font-bold text-ink-900 leading-snug">
                        {section.judul}
                      </h2>
                    </div>

                    {/* Body text */}
                    <div className={section.nomor !== undefined ? "pl-11" : ""}>
                      {section.isi.split("\n\n").map((para, i) => (
                        <p key={i} className="text-ink-700 leading-relaxed mb-4 last:mb-0">
                          {para}
                        </p>
                      ))}

                      {/* List */}
                      {section.list && section.list.length > 0 && (
                        <ul className="mt-4 space-y-2.5">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-ink-700 text-sm">
                              <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Highlight / callout box */}
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

              {/* Divider */}
              <div className="border-t border-line-200 my-8" />

              {/* Kesimpulan */}
              <section>
                <h2 className="text-lg font-bold text-ink-900 mb-4">Kesimpulan</h2>
                {article.content.kesimpulan.split("\n\n").map((para, i) => (
                  <p key={i} className="text-ink-700 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </section>

              {/* Author note */}
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-line-200">
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  F
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-800">{article.penulisLabel}</p>
                  <p className="text-xs text-ink-400">Diterbitkan {article.tanggal}</p>
                </div>
              </div>
            </article>
          ) : (
            /* Placeholder for articles without content yet */
            <div className="p-6 sm:p-8">
              <p className="text-ink-500 leading-relaxed">
                Konten artikel ini sedang disiapkan. Sementara itu, hubungi kami via WhatsApp untuk
                pertanyaan seputar rental kendaraan di Cikarang.
              </p>
            </div>
          )}
        </div>

        {/* ── CTA card ── */}
        <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">Siap menyewa kendaraan?</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Hubungi tim FAZA Rent Car sekarang — respon cepat, harga transparan, armada terawat.
            </p>
          </div>
          <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button variant="white" size="md">
              <MessageCircle size={16} />
              Chat WhatsApp
            </Button>
          </a>
        </div>

        {/* ── Back + Related ── */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium mb-6"
          >
            <ArrowLeft size={15} />
            Kembali ke Blog
          </Link>

          {related.length > 0 && (
            <>
              <h3 className="text-base font-bold text-ink-800 mb-4">Artikel Lainnya</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group flex gap-4 items-start bg-white rounded-xl border border-line-200 p-4 hover:shadow-card-hover transition-all"
                  >
                    <div
                      className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${a.coverGradient ?? "from-blue-500 to-blue-400"} flex items-center justify-center text-2xl`}
                    >
                      {a.coverEmoji ?? "📰"}
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-ink-400">{a.kategori}</span>
                      <p className="text-sm font-semibold text-ink-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mt-0.5">
                        {a.judul}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
