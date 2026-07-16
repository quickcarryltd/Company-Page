import { differentiators } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Differentiators() {
  return (
    <section id="features" className="bg-volt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Why QuickCarry"
          title="Built to beat the usual suspects."
          description="Competitors can always drop their prices. They can't copy an experience this considered overnight."
          theme="volt"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-2 border-ink bg-cream p-6 transition-transform hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#0e0e10]"
            >
              <span className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-ink">
                <Icon className="h-5 w-5 text-volt" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 text-base font-black uppercase tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
