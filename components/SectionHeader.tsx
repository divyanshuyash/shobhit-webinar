export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-8 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-gold">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl uppercase leading-none tracking-wide text-offwhite md:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{copy}</p> : null}
    </div>
  );
}
