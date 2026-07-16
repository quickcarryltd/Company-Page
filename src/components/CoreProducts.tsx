import { coreProducts } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function CoreProducts() {
  return (
    <section id="products" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Core products"
          title="One app. A full logistics ecosystem."
          description="Not just another delivery service — QuickCarry covers everything that needs to move from A to B in Abuja."
        />

        <div className="mt-14 grid grid-cols-1 border border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {coreProducts.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group border-ink/15 p-7 [border-width:0_1px_1px_0] transition-colors hover:bg-ink"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-ink/40 group-hover:text-volt">
                  0{i + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-cream group-hover:border-volt">
                  <Icon className="h-6 w-6 text-ink" />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-black uppercase tracking-tight text-ink group-hover:text-cream">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 group-hover:text-cream/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
