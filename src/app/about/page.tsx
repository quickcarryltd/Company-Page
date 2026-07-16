import type { Metadata } from "next";
import { ArrowRight, Compass, Handshake, Layers, ScanEye } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About — QuickCarry",
  description:
    "QuickCarry is building Abuja's logistics operating system — instant delivery, sending anything, and business logistics, run on convenience and transparency instead of a race to the bottom on price.",
};

const values = [
  {
    icon: ScanEye,
    title: "Transparency",
    description:
      "Prices locked for 10 minutes, photo verification at pickup and drop-off, and live milestone tracking. No vague ETAs, no surprise fees.",
  },
  {
    icon: Handshake,
    title: "Fairness",
    description:
      "Riders scored on more than stars — punctuality, professionalism, and delivery quality — with instant cash out and shift planning that respects their time.",
  },
  {
    icon: Compass,
    title: "Convenience",
    description:
      "One app for instant delivery, sending anything, scheduled runs, and multi-stop pickups. Group delivery and price comparison built in, not bolted on.",
  },
  {
    icon: Layers,
    title: "Ecosystem thinking",
    description:
      "Business wallets, delivery credits, and merchant analytics turn QuickCarry from an app into infrastructure for how Abuja moves things.",
  },
];

const roadmap = [
  { year: "Now", title: "Abuja launch", description: "Instant delivery, send-anything, and scheduled runs across Abuja." },
  { year: "Next", title: "Intercity & corporate logistics", description: "Same-day intercity delivery and fulfillment for growing businesses." },
  { year: "Later", title: "Platform & API", description: "Warehousing, e-commerce API integrations, and AI-powered route optimization." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About QuickCarry"
        title="Nigeria's logistics operating system, starting in Abuja."
        description="Competitors can always drop their prices. We're building something harder to copy: an experience built on convenience, transparency, and a real ecosystem for customers, riders, and businesses."
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 border-2 border-ink px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              Our position
            </span>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Faster, fairer, smarter delivery.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/60">
              If QuickCarry tried to be &ldquo;another delivery app with
              cheaper prices,&rdquo; it would be easy for competitors to
              undercut us right back. So instead we&apos;re competing on
              experience: locked-in pricing, honest ETAs, protection on every
              package, and a rewards system that actually compounds — while
              subsidized pricing does the work of getting people to try us
              in the first place.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 border border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="border-ink/15 p-7 [border-width:0_1px_1px_0]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-ink/40">
                    0{i + 1}
                  </span>
                  <Icon className="h-6 w-6 text-ink" />
                </div>
                <h3 className="mt-8 text-lg font-black uppercase tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 border-2 border-volt px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-volt">
            Where we&apos;re headed
          </span>
          <h2 className="mt-5 max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            From delivery app to logistics infrastructure.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px border border-cream/20 bg-cream/20 sm:grid-cols-3">
            {roadmap.map(({ year, title, description }) => (
              <div key={title} className="bg-ink p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-volt">
                  {year}
                </span>
                <h3 className="mt-4 text-xl font-black uppercase tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-volt py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-8">
          <h2 className="max-w-lg text-3xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
            Want to build Abuja&apos;s delivery ecosystem with us?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#waitlist"
              className="group flex items-center justify-center gap-2 border-2 border-ink bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center border-2 border-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
