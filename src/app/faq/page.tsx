import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQs — QuickCarry",
  description:
    "Answers to common questions about QuickCarry's Abuja launch, AI Price Lock, Delivery Insurance, becoming a rider, the Business Wallet, and QuickCarry Plus.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered."
        description="Everything we get asked most about launching in Abuja, pricing, riding, and business accounts."
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FaqAccordion items={faqs} />

          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-2 border-ink bg-ink p-8 text-cream sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-black uppercase tracking-tight">
                Still have a question?
              </p>
              <p className="mt-1 text-sm text-cream/60">
                Call +234 803 365 1598 or send us a message.
              </p>
            </div>
            <Link
              href="/contact"
              className="group flex shrink-0 items-center gap-2 border-2 border-volt bg-volt px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              Contact us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
