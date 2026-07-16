import WaitlistForm from "./WaitlistForm";

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="bg-volt py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 border-2 border-ink px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-ink">
          07 — Get on the list
        </span>
        <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
          Be first to move with QuickCarry
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">
          Join the waitlist as a customer, rider, or business — we&apos;ll
          let you know the moment we launch in Abuja.
        </p>

        <div className="mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
