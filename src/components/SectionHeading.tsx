type Theme = "cream" | "ink" | "volt" | "navy" | "gold";

const textColor: Record<Theme, string> = {
  cream: "text-ink",
  ink: "text-cream",
  volt: "text-ink",
  navy: "text-cream",
  gold: "text-ink",
};

const mutedColor: Record<Theme, string> = {
  cream: "text-ink/60",
  ink: "text-cream/60",
  volt: "text-ink/70",
  navy: "text-cream/70",
  gold: "text-ink/70",
};

const eyebrowBorder: Record<Theme, string> = {
  cream: "border-ink",
  ink: "border-volt",
  volt: "border-ink",
  navy: "border-volt",
  gold: "border-ink",
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  theme = "cream",
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  theme?: Theme;
}) {
  return (
    <div className="max-w-2xl">
      <span
        className={`inline-flex items-center gap-2 border-2 px-2.5 py-1 text-xs font-bold uppercase tracking-widest ${eyebrowBorder[theme]} ${textColor[theme]}`}
      >
        {index} — {eyebrow}
      </span>
      <h2
        className={`mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl ${textColor[theme]}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${mutedColor[theme]}`}>
          {description}
        </p>
      )}
    </div>
  );
}
