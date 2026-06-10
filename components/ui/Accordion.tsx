"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={clsx("divide-y divide-line-200", className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-ink-900 hover:text-blue-600 transition-colors cursor-pointer"
            aria-expanded={open === i}
          >
            <span>{item.question}</span>
            <ChevronDown
              size={20}
              className={clsx(
                "shrink-0 text-ink-500 transition-transform duration-200",
                open === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={clsx(
              "overflow-hidden transition-all duration-200",
              open === i ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <p className="text-ink-500 text-sm leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
