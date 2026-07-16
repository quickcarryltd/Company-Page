import { ArrowRight } from "lucide-react";
import { trackingMilestones } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function StepCard({
  label,
  icon: Icon,
  index,
  isLast,
}: {
  label: string;
  icon: (typeof trackingMilestones)[number]["icon"];
  index: number;
  isLast: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col gap-3 border-2 border-ink p-4 ${
        isLast ? "bg-ink text-cream" : "bg-cream text-ink"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-xs font-bold ${isLast ? "text-volt" : "text-ink/40"}`}
        >
          {index + 1}/{trackingMilestones.length}
        </span>
        <Icon
          className={`h-5 w-5 ${isLast ? "text-volt" : "text-ink"}`}
          strokeWidth={2.25}
        />
      </div>
      <p className="text-sm font-bold uppercase leading-tight tracking-tight">
        {label}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="How it works"
          title="Track it, milestone by milestone."
          description="No vague 'on the way' messages — know exactly where your package is, every step of the trip."
        />

        {/* Desktop: single row workflow with arrow connectors */}
        <ol className="mt-14 hidden items-stretch gap-2 lg:flex">
          {trackingMilestones.map(({ label, icon }, i) => {
            const isLast = i === trackingMilestones.length - 1;
            return (
              <li key={label} className="flex flex-1 items-stretch gap-2">
                <div className="flex-1">
                  <StepCard label={label} icon={icon} index={i} isLast={isLast} />
                </div>
                {!isLast && (
                  <div className="flex shrink-0 items-center" aria-hidden>
                    <ArrowRight className="h-5 w-5 text-ink/30" strokeWidth={2.5} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {/* Mobile / tablet: wrapped grid, no connectors */}
        <ol className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
          {trackingMilestones.map(({ label, icon }, i) => {
            const isLast = i === trackingMilestones.length - 1;
            return (
              <li key={label}>
                <StepCard label={label} icon={icon} index={i} isLast={isLast} />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
