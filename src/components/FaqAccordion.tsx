"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import type { FaqItem } from "@/lib/content";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-2 border-ink">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={i === 0 ? "" : "border-t-2 border-ink"}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 bg-cream px-6 py-5 text-left transition-colors hover:bg-ink/[0.03]"
            >
              <span className="text-base font-bold uppercase tracking-tight text-ink sm:text-lg">
                {item.question}
              </span>
              {isOpen ? (
                <MinusIcon className="h-5 w-5 shrink-0 text-ink" />
              ) : (
                <PlusIcon className="h-5 w-5 shrink-0 text-ink" />
              )}
            </button>
            {isOpen && (
              <div className="border-t-2 border-ink bg-volt/10 px-6 py-5">
                <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
