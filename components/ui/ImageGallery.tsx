"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const thumbRef = useRef<HTMLDivElement>(null);

  // touch swipe state
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(images.length - 1, index));
      setActive(clamped);
      // scroll thumbnail into view
      const thumb = thumbRef.current?.children[clamped] as HTMLElement | undefined;
      thumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    },
    [images.length]
  );

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="flex flex-col gap-3">
      {/* ── Main image ── */}
      <div
        className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-line-200 select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={active}
          src={images[active]}
          alt={`${alt} - foto ${active + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-opacity duration-200"
          priority={active === 0}
        />

        {/* Counter badge */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
          {active + 1} / {images.length}
        </div>

        {/* Arrow prev */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              disabled={active === 0}
              aria-label="Foto sebelumnya"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={20} className="text-ink-800" />
            </button>

            {/* Arrow next */}
            <button
              type="button"
              onClick={next}
              disabled={active === images.length - 1}
              aria-label="Foto berikutnya"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={20} className="text-ink-800" />
            </button>
          </>
        )}
      </div>

      {/* ── Thumbnail strip ── */}
      {images.length > 1 && (
        <div
          ref={thumbRef}
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
        >
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Lihat foto ${i + 1}`}
              className={`relative shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                i === active
                  ? "border-blue-500 shadow-md scale-[1.04]"
                  : "border-line-200 hover:border-blue-300 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
