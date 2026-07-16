import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const stats = [
  { label: "Price locked for", value: "10 MIN", icon: ClockIcon },
  { label: "Package protection", value: "₦100 FLAT", icon: ShieldCheckIcon },
  { label: "Live tracking steps", value: "7 STOPS", icon: MapPinIcon },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="cut-bottom-right relative bg-ink pb-28 pt-16 text-cream sm:pb-36 sm:pt-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 border-2 border-volt px-3 py-1 text-xs font-bold uppercase tracking-widest text-volt">
          Launching in Abuja
        </span>

        <h1 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Faster.
          <br />
          Fairer.
          <br />
          <span className="text-volt">Smarter.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/70">
          QuickCarry isn&apos;t another delivery app racing to the bottom on
          price. It&apos;s a logistics ecosystem for Abuja — instant
          delivery, sending anything, scheduled and multi-stop runs — built
          to win on convenience and transparency.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="group flex items-center justify-center gap-2 border-2 border-volt bg-volt px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
          >
            Join the waitlist
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#riders"
            className="flex items-center justify-center border-2 border-cream/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:border-cream"
          >
            Become a rider
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-cream/20 bg-cream/20 sm:grid-cols-3">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 bg-ink p-5">
              <Icon className="h-5 w-5 shrink-0 text-volt" />
              <div>
                <p className="font-mono text-lg font-bold tracking-tight">
                  {value}
                </p>
                <p className="text-xs uppercase tracking-wide text-cream/50">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
