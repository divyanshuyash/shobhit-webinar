import { dclSteps, roadmap } from "@/data/site";

export function FrameworkSteps({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-4 ${compact ? "md:grid-cols-5" : "md:grid-cols-5"}`}>
      {dclSteps.map((step, index) => (
        <article key={step.name} className="premium-panel group rounded-sm p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/55">
          <div className="mb-5 flex items-center justify-between">
            <span className="flex size-11 items-center justify-center rounded-full border border-gold/55 bg-gold/10 font-display text-xl text-gold shadow-[0_0_28px_rgba(217,165,32,0.18)]">
              0{index + 1}
            </span>
            <span className="h-px flex-1 data-stream opacity-40 transition group-hover:opacity-90" />
          </div>
          <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite md:text-3xl">{step.name}</h3>
          <p className="mt-3 text-sm font-black uppercase tracking-wide text-gold">{step.title}</p>
          {!compact ? <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function Roadmap({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {roadmap.map((stage, index) => (
        <div key={stage} className="premium-panel group relative rounded-sm p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-gold bg-gold text-sm font-black text-black">
              {index + 1}
            </span>
            {index < roadmap.length - 1 ? <span className="hidden h-px flex-1 data-stream opacity-45 md:ml-4 md:block" /> : null}
          </div>
          <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{stage}</h3>
          {detailed ? <p className="mt-3 text-sm leading-6 text-muted">Roadmap stage from the Digital Consultant Launchpad brief.</p> : null}
        </div>
      ))}
    </div>
  );
}
