export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="cut-bottom-right bg-ink pb-20 pt-16 text-cream sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 border-2 border-volt px-3 py-1 text-xs font-bold uppercase tracking-widest text-volt">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
