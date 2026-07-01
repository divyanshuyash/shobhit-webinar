type Signal = {
  value: string;
  label: string;
};

type ProofSignal = {
  title: string;
  body: string;
  note: string;
};

type PlatformSignal = {
  platform: string;
  title: string;
  body: string;
  cta: string;
};

const orbitNodes = [
  { label: "Niche", className: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
  { label: "Offer", className: "right-0 top-1/3 translate-x-1/3" },
  { label: "Leads", className: "bottom-2 right-10" },
  { label: "Sales", className: "bottom-2 left-10" },
  { label: "AI", className: "left-0 top-1/3 -translate-x-1/3" }
];

export function SignalStrip({ items }: { items: Signal[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="premium-panel rounded-lg px-4 py-3">
          <p className="font-display text-3xl uppercase leading-none text-gold">{item.value}</p>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-offwhite/70">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function HeroVisual() {
  const meters = [
    { label: "Clarity", value: "92%" },
    { label: "Offer", value: "76%" },
    { label: "AI Speed", value: "88%" }
  ];

  return (
    <aside className="holo-panel rounded-lg p-5 md:p-6">
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-electric">DCL Operating System</p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none tracking-wide text-offwhite">Consulting Engine</h2>
        </div>
        <span className="node-pulse signal-flicker inline-flex size-3 rounded-full bg-electric" />
      </div>

      <div className="relative z-10 mx-auto mt-8 aspect-square max-w-[340px] rounded-full border border-gold/25 bg-black/30 p-8">
        <div className="orbital-ring inset-3" />
        <div className="orbital-ring inset-12 [animation-direction:reverse] [animation-duration:18s]" />
        <div className="absolute inset-7 rounded-full border border-electric/20" />
        <div className="absolute inset-16 rounded-full border border-gold/20" />
        <div className="absolute inset-0 rounded-full bg-soft-radial opacity-75" />
        <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/45 bg-black/70 shadow-gold">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="font-display text-5xl leading-none text-gold">MC</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-offwhite/70">Strategy Core</p>
          </div>
        </div>
        {orbitNodes.map((node) => (
          <div
            key={node.label}
            className={`absolute ${node.className} rounded-full border border-electric/35 bg-black px-3 py-2 text-xs font-black uppercase tracking-wide text-offwhite shadow-panel`}
          >
            {node.label}
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-7 grid gap-3 sm:grid-cols-3">
        {meters.map((meter) => (
          <div key={meter.label} className="rounded-md border border-gold/15 bg-black/45 p-3">
            <div className="flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wide">
              <span className="text-muted">{meter.label}</span>
              <span className="text-gold">{meter.value}</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="data-stream h-full rounded-full" style={{ width: meter.value }} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function TechFlow({ items, result }: { items: string[]; result: string }) {
  return (
    <div className="premium-panel rounded-lg p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="relative rounded-lg border border-gold/20 bg-black/45 p-4 text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-electric/40 bg-electric/10 font-display text-2xl text-electric">
              {index + 1}
            </div>
            <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item}</h3>
            {index < items.length - 1 ? (
              <span className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-gold to-electric md:block" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-gold/30 bg-gold p-5 text-center text-black shadow-gold">
        <p className="text-xs font-black uppercase tracking-[0.2em]">Output</p>
        <p className="mt-1 font-display text-4xl uppercase leading-none tracking-wide">{result}</p>
      </div>
    </div>
  );
}

export function VisualTileGrid({ items, columns = "md:grid-cols-3" }: { items: string[]; columns?: string }) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((item, index) => (
        <article key={item} className="premium-panel group rounded-lg p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="flex size-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-2xl text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/50 to-electric/40" />
          </div>
          <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item}</h3>
          <div className="mt-5 grid grid-cols-5 gap-1">
            {Array.from({ length: 5 }).map((_, barIndex) => (
              <span
                key={`${item}-${barIndex}`}
                className="h-1.5 rounded-full bg-gradient-to-r from-gold/80 to-electric/70 opacity-50 transition group-hover:opacity-100"
                style={{ width: `${54 + barIndex * 10}%` }}
              />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ImpactConsole({ items }: { items: string[] }) {
  return (
    <div className="holo-panel rounded-lg p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-electric">Impact Console</p>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-gold" />
          <span className="size-2 rounded-full bg-electric" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <div key={item} className="rounded-md border border-gold/15 bg-black/45 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted">Signal {index + 1}</p>
            <p className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MindMapVisual({ core, items }: { core: string; items: string[] }) {
  return (
    <div className="holo-panel rounded-lg p-5 md:p-8">
      <div className="relative mx-auto min-h-[auto] max-w-5xl md:grid md:min-h-[520px] md:place-items-center">
        <div className="absolute inset-6 hidden rounded-full border border-electric/10 md:block" />
        <div className="absolute inset-16 hidden rounded-full border border-gold/10 md:block" />
        <div className="absolute left-1/2 top-1/2 hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric/45 to-transparent md:block" />
        <div className="absolute left-1/2 top-1/2 hidden h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/45 to-transparent md:block" />

        <div className="relative z-10 mx-auto flex size-40 items-center justify-center rounded-full border border-gold/45 bg-black/75 p-6 text-center shadow-gold md:size-44">
          <p className="font-display text-4xl uppercase leading-none tracking-wide text-gold">{core}</p>
        </div>

        <div className="relative z-10 mt-6 grid gap-3 md:hidden">
          {items.slice(0, 8).map((item, index) => (
            <div key={item} className="rounded-lg border border-gold/20 bg-black/45 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-electric">Node {index + 1}</p>
              <p className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item}</p>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 hidden gap-4 md:grid md:grid-cols-3 md:grid-rows-3">
          {items.slice(0, 8).map((item, index) => {
            const positions = [
              "md:col-start-1 md:row-start-1",
              "md:col-start-2 md:row-start-1",
              "md:col-start-3 md:row-start-1",
              "md:col-start-1 md:row-start-2",
              "md:col-start-3 md:row-start-2",
              "md:col-start-1 md:row-start-3",
              "md:col-start-2 md:row-start-3",
              "md:col-start-3 md:row-start-3"
            ];

            return (
              <div key={item} className={`${positions[index]} flex items-center justify-center`}>
                <div className="premium-panel w-full rounded-lg px-4 py-4 text-center md:max-w-[230px]">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-electric">Node {index + 1}</p>
                  <p className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function TransformationMap() {
  const stages = [
    { label: "Experience", value: "Raw material" },
    { label: "Clarity", value: "One problem" },
    { label: "Offer", value: "Premium model" },
    { label: "Trust", value: "Audience" },
    { label: "Sales", value: "Conversations" },
    { label: "Scale", value: "AI systems" }
  ];

  return (
    <div className="premium-panel rounded-lg p-5 md:p-8">
      <div className="grid gap-4 lg:grid-cols-6">
        {stages.map((stage, index) => (
          <div key={stage.label} className="relative rounded-lg border border-gold/20 bg-black/45 p-5">
            <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="data-stream h-full rounded-full" style={{ width: `${52 + index * 8}%` }} />
            </div>
            <p className="font-display text-3xl uppercase leading-none text-gold">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{stage.label}</h3>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-muted">{stage.value}</p>
            {index < stages.length - 1 ? (
              <span className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-electric/30 bg-black text-electric lg:flex">
                +
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FitMatrix({ forItems, notForItems }: { forItems: string[]; notForItems: string[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="holo-panel rounded-lg p-5 md:p-6">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-electric">Best Fit</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {forItems.slice(0, 8).map((item) => (
            <div key={item} className="rounded-lg border border-gold/15 bg-black/45 p-4">
              <span className="mb-3 block size-2 rounded-full bg-gold shadow-[0_0_18px_rgba(217,165,32,0.75)]" />
              <p className="text-sm font-bold leading-6 text-offwhite">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="premium-panel rounded-lg p-5 md:p-6">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Not The Right Room</p>
        <div className="mt-5 grid gap-3">
          {notForItems.map((item) => (
            <div key={item} className="rounded-lg border border-red-400/20 bg-red-950/10 p-4">
              <p className="text-sm font-bold leading-6 text-offwhite/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProofMap({ items }: { items: ProofSignal[] }) {
  return (
    <div className="holo-panel rounded-lg p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.title} className="rounded-lg border border-gold/20 bg-black/45 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-display text-4xl leading-none text-gold">{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-20 bg-gradient-to-r from-gold to-electric" />
            </div>
            <h3 className="font-display text-3xl uppercase leading-none tracking-wide text-offwhite">{item.title}</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-offwhite/75">{item.body}</p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-electric">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AIWorkflowMap({ items }: { items: string[] }) {
  return (
    <div className="premium-panel rounded-lg p-5 md:p-8">
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-full border border-electric/25 bg-black/55 p-10 text-center shadow-panel">
          <p className="font-display text-7xl uppercase leading-none text-gold">AI</p>
          <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-offwhite/70">Execution Accelerator</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {items.map((item, index) => (
            <div key={item} className="rounded-lg border border-gold/15 bg-black/45 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-electric">Workflow {index + 1}</p>
              <p className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContentHubMap({ platforms }: { platforms: PlatformSignal[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {platforms.map((platform) => (
        <div key={platform.platform} className="premium-panel rounded-lg p-5">
          <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-electric/35 bg-electric/10 font-display text-3xl uppercase text-electric">
            {platform.platform.slice(0, 2)}
          </div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{platform.platform}</p>
          <h3 className="mt-3 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{platform.title}</h3>
        </div>
      ))}
    </div>
  );
}

export function ArticleMap({ articles }: { articles: string[] }) {
  return (
    <div className="premium-panel rounded-lg p-5 md:p-8">
      <div className="grid gap-3 md:grid-cols-4">
        {articles.map((article, index) => (
          <div key={article} className="rounded-lg border border-gold/15 bg-black/45 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-electric">Insight {index + 1}</p>
            <h3 className="mt-3 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{article}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
