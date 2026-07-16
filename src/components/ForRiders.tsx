import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { riderFeatures } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function ForRiders() {
  return (
    <section id="riders" className="cut-top-left bg-gold py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="04"
            eyebrow="For riders"
            title="Earn on your terms."
            description="Score beyond stars, demand heat maps, instant cash out, and shift planning that respects your time."
            theme="gold"
          />
          <a
            href="#waitlist"
            className="group flex shrink-0 items-center gap-2 border-2 border-ink bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
          >
            Sign up to ride
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {riderFeatures.map(({ icon: Icon, title, description }) => (
            <div key={title} className="border-2 border-ink bg-cream p-6">
              <span className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-ink">
                <Icon className="h-6 w-6 text-gold" />
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
