import type { ReactNode } from "react";

export function Card({
  title,
  children,
  eyebrow,
  className = ""
}: {
  title: string;
  children?: ReactNode;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <article className={`premium-panel group rounded-sm p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/55 ${className}`}>
      <div className="mb-5 flex items-center justify-between gap-4">
        {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{eyebrow}</p> : <span className="h-px flex-1 bg-gold/25" />}
        <span className="size-2 rounded-full bg-gold opacity-80 shadow-[0_0_18px_rgba(217,165,32,0.65)] transition group-hover:scale-125" />
      </div>
      <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite md:text-3xl">{title}</h3>
      {children ? <div className="mt-3 text-sm leading-6 text-muted">{children}</div> : null}
    </article>
  );
}

export function NumberCard({ number, title, body }: { number: number; title: string; body?: string }) {
  return (
    <article className="premium-panel group rounded-sm p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/55">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-2xl text-gold">
          {String(number).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 data-stream opacity-45 transition group-hover:opacity-90" />
      </div>
      <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{title}</h3>
      {body ? <p className="mt-3 text-sm leading-6 text-muted">{body}</p> : null}
    </article>
  );
}

export function CheckList({ items, tone = "gold" }: { items: string[]; tone?: "gold" | "muted" | "danger" }) {
  const marker = tone === "danger" ? "×" : "✓";
  const markerClass = tone === "danger" ? "text-red-400" : tone === "muted" ? "text-muted" : "text-gold";

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-offwhite/85">
          <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-xs font-black ${markerClass}`}>
            {marker}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
