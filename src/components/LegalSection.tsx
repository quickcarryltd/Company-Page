export default function LegalSection({
  index,
  title,
  paragraphs,
  list,
}: {
  index: number;
  title: string;
  paragraphs: string[];
  list?: string[];
}) {
  return (
    <section className="border-t-2 border-ink py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-black uppercase tracking-tight text-ink">
        <span className="text-ink/40">{String(index).padStart(2, "0")} — </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-ink/75 sm:text-base">
            {p}
          </p>
        ))}
        {list && (
          <ul className="space-y-2 pl-1">
            {list.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-ink/75 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
