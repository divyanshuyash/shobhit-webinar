export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <details key={item.q} className="premium-panel group rounded-sm px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-offwhite">
            {item.q}
            <span className="flex size-7 shrink-0 items-center justify-center text-xl text-gold transition group-open:rotate-45 group-open:text-gold">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
