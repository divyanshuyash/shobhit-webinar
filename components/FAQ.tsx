export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <details key={item.q} className="premium-panel group rounded-sm p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-offwhite">
            {item.q}
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-xl text-gold transition group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-black">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
