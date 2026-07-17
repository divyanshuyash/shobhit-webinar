import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Check, PlayCircle, Star } from "lucide-react";
import { GoldButton, OutlineButton } from "./Buttons";
import { Container } from "./Container";

export type GlyphName =
  | "ai"
  | "audience"
  | "calendar"
  | "clock"
  | "content"
  | "download"
  | "growth"
  | "lead"
  | "message"
  | "niche"
  | "offer"
  | "proof"
  | "strategy"
  | "system"
  | "target"
  | "video";

export type IconCardItem = {
  title: string;
  body?: string;
  meta?: string;
  icon?: ReactNode;
  glyph?: GlyphName;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type VisualItem = {
  title: string;
  eyebrow?: string;
  body?: string;
  image?: MediaVariant;
  video?: boolean;
};

export type MediaVariant =
  | "article"
  | "case"
  | "community"
  | "dark"
  | "platform"
  | "portrait"
  | "proof"
  | "resource"
  | "strategy"
  | "webinar"
  | "workshop";

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="gold-gradient-text">{children}</span>;
}

const glyphCycle: GlyphName[] = ["strategy", "target", "offer", "audience", "system", "growth", "proof", "ai"];

export function GlyphMark({ name = "strategy", className = "", size = 34 }: { name?: GlyphName; className?: string; size?: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8
  };

  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" className={`glyph-mark ${className}`}>
      <circle cx="24" cy="24" r="20" {...common} opacity="0.28" />
      {name === "target" ? (
        <>
          <circle cx="24" cy="24" r="11" {...common} />
          <circle cx="24" cy="24" r="3.5" {...common} />
          <path d="M24 8v7M24 33v7M8 24h7M33 24h7" {...common} />
        </>
      ) : name === "niche" ? (
        <>
          <path d="M13 29c7-14 16-14 22 0" {...common} />
          <path d="M18 24h12M21 19h6" {...common} />
          <circle cx="24" cy="29" r="4" {...common} />
        </>
      ) : name === "offer" ? (
        <>
          <path d="M14 18l10-6 10 6v12l-10 6-10-6z" {...common} />
          <path d="M14 18l10 6 10-6M24 24v12" {...common} />
        </>
      ) : name === "audience" ? (
        <>
          <circle cx="24" cy="17" r="5" {...common} />
          <path d="M14 35c1.5-8 18.5-8 20 0" {...common} />
          <circle cx="13" cy="23" r="3.5" {...common} />
          <circle cx="35" cy="23" r="3.5" {...common} />
        </>
      ) : name === "system" ? (
        <>
          <rect x="14" y="14" width="8" height="8" rx="1.5" {...common} />
          <rect x="26" y="14" width="8" height="8" rx="1.5" {...common} />
          <rect x="20" y="27" width="8" height="8" rx="1.5" {...common} />
          <path d="M22 18h4M24 22v5" {...common} />
        </>
      ) : name === "ai" ? (
        <>
          <path d="M18 15v18M30 15v18M15 21h18M15 27h18" {...common} />
          <path d="M12 18h4M12 30h4M32 18h4M32 30h4" {...common} />
        </>
      ) : name === "growth" ? (
        <>
          <path d="M14 33h20M17 30l6-7 5 4 7-10" {...common} />
          <path d="M29 17h6v6" {...common} />
        </>
      ) : name === "proof" ? (
        <>
          <path d="M16 25l6 6 11-14" {...common} />
          <path d="M15 14h18M15 36h18" {...common} opacity="0.55" />
        </>
      ) : name === "calendar" ? (
        <>
          <rect x="14" y="16" width="20" height="19" rx="2" {...common} />
          <path d="M18 12v7M30 12v7M14 22h20" {...common} />
          <path d="M19 27h3M26 27h3M19 31h3" {...common} />
        </>
      ) : name === "clock" ? (
        <>
          <circle cx="24" cy="24" r="12" {...common} />
          <path d="M24 17v8l6 3" {...common} />
        </>
      ) : name === "video" ? (
        <>
          <rect x="14" y="17" width="18" height="14" rx="2" {...common} />
          <path d="M32 22l6-4v12l-6-4" {...common} />
        </>
      ) : name === "message" ? (
        <>
          <path d="M15 16h18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H22l-7 5v-5a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3z" {...common} />
          <path d="M19 22h10M19 27h7" {...common} />
        </>
      ) : name === "download" ? (
        <>
          <path d="M24 13v16M18 23l6 6 6-6" {...common} />
          <path d="M15 34h18" {...common} />
        </>
      ) : name === "content" ? (
        <>
          <path d="M16 14h16v20H16z" {...common} />
          <path d="M20 20h8M20 25h8M20 30h5" {...common} />
        </>
      ) : name === "lead" ? (
        <>
          <circle cx="18" cy="18" r="5" {...common} />
          <path d="M12 35c1-7 11-7 12 0M28 16h8M28 24h8M28 32h5" {...common} />
        </>
      ) : (
        <>
          <path d="M15 30l9-18 9 18" {...common} />
          <path d="M18 25h12M20 34h8" {...common} />
        </>
      )}
    </svg>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  accent,
  copy,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-6 ${align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}>
      {eyebrow ? <p className="mb-2 text-[11px] font-black uppercase tracking-[0.22em] text-gold">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl uppercase leading-[0.92] tracking-wide text-offwhite md:text-4xl lg:text-5xl">
        {title} {accent ? <Highlight>{accent}</Highlight> : null}
      </h2>
      {copy ? <p className={`mt-4 text-sm leading-6 text-muted md:text-base ${align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>{copy}</p> : null}
    </div>
  );
}

export function FounderPhoto({
  variant = "cutout",
  className = "",
  priority = false
}: {
  variant?: "cutout" | "portrait";
  className?: string;
  priority?: boolean;
}) {
  const source =
    variant === "portrait"
      ? { src: "/images/founder-source/founder-portrait.jpg", width: 1425, height: 1476, alt: "Shobhit Singhal portrait" }
      : { src: "/images/founder-source/founder-cutout.png", width: 408, height: 612, alt: "Shobhit Singhal founder photo" };

  return (
    <Image
      src={source.src}
      width={source.width}
      height={source.height}
      alt={source.alt}
      preload={priority}
      loading={priority ? "eager" : undefined}
      className={`photo-vignette ${className}`}
    />
  );
}

function inferMediaVariant(label: string, variant: MediaVariant, video: boolean): MediaVariant {
  const text = label.toLowerCase();

  if (video) return text.includes("testimonial") || text.includes("invite") || text.includes("webinar") ? "webinar" : "platform";
  if (text.includes("blog") || text.includes("article") || text.includes("writing")) return "article";
  if (text.includes("payment") || text.includes("screenshot") || text.includes("proof") || text.includes("asset")) return "proof";
  if (text.includes("before") || text.includes("after") || text.includes("case") || text.includes("result") || text.includes("win")) return "case";
  if (text.includes("community") || text.includes("event") || text.includes("workshop")) return "community";
  if (text.includes("resource") || text.includes("blueprint") || text.includes("checklist") || text.includes("script") || text.includes("toolkit")) return "resource";
  if (text.includes("youtube") || text.includes("instagram") || text.includes("linkedin") || text.includes("content")) return "platform";
  if (text.includes("webinar") || text.includes("session")) return "webinar";

  return variant;
}

function mediaCopy(kind: MediaVariant, label: string) {
  const title = label.replace(/\s+placeholder$/i, "").replace(/\s+slot$/i, "");

  if (kind === "article") return { kicker: "Editorial Cover", title, note: "Draft cover system" };
  if (kind === "case") return { kicker: "Case Study Frame", title, note: "Client asset reserved" };
  if (kind === "community") return { kicker: "Community Frame", title, note: "Event media reserved" };
  if (kind === "platform") return { kicker: "Content Frame", title, note: "Channel asset reserved" };
  if (kind === "proof") return { kicker: "Verification Frame", title, note: "Proof asset reserved" };
  if (kind === "resource") return { kicker: "Download Frame", title, note: "PDF artwork reserved" };
  if (kind === "webinar") return { kicker: "Live Session Frame", title, note: "Video asset reserved" };
  if (kind === "portrait") return { kicker: "Founder Frame", title, note: "Portrait crop" };

  return { kicker: "Strategy Frame", title, note: "Visual asset reserved" };
}

function MediaArtwork({ kind, label, video }: { kind: MediaVariant; label: string; video: boolean }) {
  const copy = mediaCopy(kind, label);

  if (kind === "article") {
    return (
      <div className="media-art media-art-article">
        <div className="article-spine" />
        <div className="article-index">01</div>
        <div className="article-lines">
          <span />
          <span />
          <span />
        </div>
        <div className="article-seal"><GlyphMark name="content" size={38} /></div>
      </div>
    );
  }

  if (kind === "proof") {
    return (
      <div className="media-art media-art-proof">
        <div className="proof-card proof-card-a">
          <span>Verified Asset</span>
          <strong>Reserved</strong>
        </div>
        <div className="proof-card proof-card-b">
          <span>Source</span>
          <strong>Pending</strong>
        </div>
        <div className="proof-stamp">Proof</div>
      </div>
    );
  }

  if (kind === "case") {
    return (
      <div className="media-art media-art-case">
        <div className="case-pane">
          <span>Before</span>
          <i />
        </div>
        <div className="case-arrow"><ArrowRight size={22} /></div>
        <div className="case-pane case-pane-after">
          <span>After</span>
          <i />
        </div>
      </div>
    );
  }

  if (kind === "community") {
    return (
      <div className="media-art media-art-community">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    );
  }

  if (kind === "platform") {
    return (
      <div className="media-art media-art-platform">
        <div className="platform-screen">
          <span />
          <span />
          <span />
        </div>
        <div className="platform-sidebar">
          <i />
          <i />
          <i />
        </div>
        {video ? <div className="platform-play"><PlayCircle size={34} /></div> : null}
      </div>
    );
  }

  if (kind === "resource") {
    return (
      <div className="media-art media-art-resource">
        <div className="resource-sheet">
          <span />
          <span />
          <span />
          <strong>{copy.title.slice(0, 2)}</strong>
        </div>
        <div className="resource-tab"><GlyphMark name="download" size={24} /></div>
      </div>
    );
  }

  if (kind === "webinar") {
    return (
      <div className="media-art media-art-webinar">
        <div className="webinar-stage">
          <span />
          <span />
          <span />
        </div>
        <div className="webinar-live">Live</div>
      </div>
    );
  }

  return (
    <div className="media-art media-art-strategy">
      <div className="strategy-board">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="strategy-glyph"><GlyphMark name={kind === "portrait" ? "lead" : "strategy"} size={42} /></div>
    </div>
  );
}

export function MediaPlaceholder({
  label,
  variant = "dark",
  className = "",
  video = false,
  caption = true,
  priority = false
}: {
  label: string;
  variant?: MediaVariant;
  className?: string;
  video?: boolean;
  caption?: boolean;
  priority?: boolean;
}) {
  const visualKind = inferMediaVariant(label, variant, video);
  const stock =
    visualKind === "strategy" || visualKind === "article" || visualKind === "resource" || visualKind === "proof" || visualKind === "case"
      ? { src: "/images/stock/strategy-still-life.png", alt: "Strategy desk visual" }
      : visualKind === "workshop" || visualKind === "community"
        ? { src: "/images/stock/workshop-community.png", alt: "Workshop community visual" }
        : visualKind === "portrait"
          ? { src: "/images/founder-source/founder-portrait.jpg", alt: "Founder image placeholder" }
          : visualKind === "webinar" || visualKind === "platform"
            ? { src: "/images/founder/founder-webinar.png", alt: "Founder webinar visual" }
          : null;
  const copy = mediaCopy(visualKind, label);

  return (
    <div className={`placeholder-media media-${visualKind} relative isolate min-h-44 overflow-hidden rounded-[4px] border border-gold/25 ${className}`}>
      {stock ? (
        <Image
          src={stock.src}
          alt={stock.alt}
          fill
          preload={priority}
          loading={priority ? "eager" : undefined}
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover ${visualKind === "portrait" ? "object-top opacity-50 grayscale-[0.18]" : "opacity-45 saturate-[0.85]"}`}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_28%,rgba(217,165,32,0.18),transparent_33%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_20rem)]" />
      <div className="absolute inset-0 thin-grid opacity-25" />
      <MediaArtwork kind={visualKind} label={label} video={video} />
      {video ? (
        <span className="absolute left-1/2 top-1/2 z-20 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-black/70 text-gold shadow-[0_0_32px_rgba(217,165,32,0.24)]">
          <PlayCircle size={30} strokeWidth={1.8} />
        </span>
      ) : null}
      {caption ? (
        <div className="absolute inset-x-0 bottom-0 z-20 p-3">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-gold">{copy.kicker}</p>
          <h3 className="mt-1 font-display text-lg uppercase leading-none tracking-wide text-offwhite md:text-xl">{copy.title}</h3>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-offwhite/48">{copy.note}</p>
        </div>
      ) : null}
    </div>
  );
}

export function IconCard({
  item,
  index,
  compact = false
}: {
  item: IconCardItem;
  index?: number;
  compact?: boolean;
}) {
  const glyph = item.glyph ?? glyphCycle[(index ?? 0) % glyphCycle.length];

  return (
    <article className={`premium-panel flex h-full min-h-[170px] flex-col items-center justify-center rounded-[4px] border-gold/25 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/55 ${compact ? "p-3.5" : "p-4"}`}>
      <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold">
        <GlyphMark name={glyph} size={34} />
      </div>
      {item.meta ? <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-gold">{item.meta}</p> : null}
      <h3 className="mt-3 font-display text-lg uppercase leading-[1.05] tracking-wide text-offwhite md:text-xl">{item.title}</h3>
      {item.body ? <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-offwhite/65">{item.body}</p> : null}
    </article>
  );
}

export function IconGrid({
  items,
  columns = "sm:grid-cols-2 lg:grid-cols-4",
  compact = false
}: {
  items: IconCardItem[];
  columns?: string;
  compact?: boolean;
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((item, index) => (
        <IconCard key={`${item.title}-${index}`} item={item} index={index} compact={compact} />
      ))}
    </div>
  );
}

export function CheckList({ items, danger = false }: { items: string[]; danger?: boolean }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className={`flex gap-3 text-sm font-semibold leading-6 ${danger ? "text-red-200/80" : "text-offwhite/90"}`}>
          <span className={`mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border ${danger ? "border-red-500 text-red-400" : "border-gold bg-gold text-black"}`}>
            {danger ? "×" : <Check size={11} strokeWidth={4} />}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function WebinarCard({ className = "", cta = "Register Now" }: { className?: string; cta?: string }) {
  return (
    <aside className={`premium-panel rounded-[5px] p-5 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gold">Free Live Webinar</p>
        <span className="node-pulse size-2.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
      </div>
      <h3 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-offwhite">
        Digital<br />Consultant<br />Launchpad
      </h3>
      <p className="mt-3 text-sm font-bold text-gold">The Crorepati Consultant Blueprint</p>
      <div className="my-5 h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
      <div className="grid gap-4 text-xs font-bold uppercase tracking-wide text-offwhite">
        <p className="flex items-center gap-3"><GlyphMark name="calendar" size={20} className="text-gold" /> Every Saturday & Sunday</p>
        <p className="flex items-center gap-3"><GlyphMark name="clock" size={20} className="text-gold" /> 11:00 AM (IST)</p>
      </div>
      <GoldButton className="mt-6 w-full">{cta}</GoldButton>
    </aside>
  );
}

export function WebinarMetaBar() {
  return (
    <div className="grid gap-3 border-y border-gold/15 bg-black/45 py-4 text-center text-[10px] font-black uppercase tracking-wide text-offwhite/80 sm:grid-cols-2 lg:grid-cols-4">
      {["100% Free", "Live Interactive Session", "Q&A With Shobhit Singhal", "Limited Seats Every Weekend"].map((item) => (
        <p key={item} className="flex items-center justify-center gap-2"><span className="size-2 rounded-full bg-gold" /> {item}</p>
      ))}
    </div>
  );
}

export function StatStrip({ stats }: { stats: { value: string; label: string; icon?: ReactNode }[] }) {
  const columnClass =
    stats.length === 3
      ? "sm:grid-cols-3"
      : stats.length === 5
        ? "sm:grid-cols-2 lg:grid-cols-5"
        : stats.length >= 6
          ? "sm:grid-cols-2 lg:grid-cols-6"
          : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="premium-panel rounded-[4px] p-3">
      <div className={`grid gap-3 ${columnClass}`}>
        {stats.map((stat, index) => (
          <div key={`${stat.value}-${stat.label}-${index}`} className="border-gold/15 px-3 py-3 text-center lg:border-r last:border-r-0">
            <span className="mx-auto mb-2 flex justify-center text-gold">
              <GlyphMark name={glyphCycle[index % glyphCycle.length]} size={30} />
            </span>
            <p className="font-display text-2xl uppercase leading-none text-gold md:text-3xl">{stat.value}</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-offwhite/75">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CtaBand({
  title = "Your First Step Starts This Weekend.",
  copy = "Learn the exact thought process behind creating a high-ticket consulting business from your existing knowledge, skills, and experience.",
  button = "Reserve Your Seat Now"
}: {
  title?: string;
  copy?: string;
  button?: string;
}) {
  return (
    <div className="soft-gold-card overflow-hidden rounded-[5px] border border-gold/60 p-2 text-black shadow-gold">
      <div className="rounded-[4px] border border-black/20 border-dashed p-5 md:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.2fr_1fr_0.5fr] lg:items-center">
          <div className="hidden size-20 items-center justify-center rounded-full border border-black/25 bg-black/10 lg:flex">
            <GlyphMark name="calendar" size={42} />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/75">Upcoming Free Weekend Webinar</p>
            <h2 className="mt-2 font-display text-3xl uppercase leading-none md:text-5xl">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-black/75">{copy}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-black uppercase">
              {["Live Training", "Q&A Session", "Actionable Frameworks", "Lifetime Access To Replay"].map((item) => (
                <span key={item} className="flex items-center gap-1"><Check size={13} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[4px] border border-black/25 bg-black p-4 text-offwhite">
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wide text-gold"><GlyphMark name="calendar" size={18} /> Every Saturday & Sunday</p>
            <p className="mt-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-wide text-gold"><GlyphMark name="clock" size={18} /> 11:00 AM (IST)</p>
            <GoldButton className="mt-4 w-full">{button}</GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQGrid({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <details key={item.q} className="premium-panel group rounded-[4px] px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-offwhite">
            {item.q}
            <span className="flex size-7 shrink-0 items-center justify-center text-xl text-gold transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  image = "cutout",
  children
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  copy?: string;
  image?: "cutout" | "portrait";
  children?: ReactNode;
}) {
  return (
    <section className="page-hero relative overflow-hidden border-b border-gold/15 py-10 md:py-12">
      <Container className="relative z-10">
        <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            {eyebrow ? <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-gold">{eyebrow}</p> : null}
            <h1 className="max-w-5xl [overflow-wrap:anywhere] font-display text-[44px] uppercase leading-[0.9] tracking-wide text-offwhite text-glow sm:text-5xl md:text-6xl lg:text-[74px]">
              {title} {accent ? <span className="block text-gold">{accent}</span> : null}
            </h1>
            {copy ? <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-offwhite/85 md:text-lg">{copy}</p> : null}
            {children ? <div className="mt-7">{children}</div> : null}
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[4px] border border-gold/20 bg-black/35 md:min-h-[320px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_38%,rgba(217,165,32,0.18),transparent_46%)]" />
            <div className="absolute inset-0 thin-grid opacity-20" />
            {image === "portrait" ? (
              <>
                <FounderPhoto variant="portrait" className="absolute inset-0 h-full w-full object-cover object-top opacity-45 grayscale-[0.12]" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-black/50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_28%,transparent,rgba(0,0,0,0.78)_72%)]" />
              </>
            ) : (
              <FounderPhoto variant="cutout" className="hero-fade-bottom absolute bottom-0 left-1/2 z-10 h-[95%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.75)]" priority />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FrameworkRail({ items }: { items: { title: string; subtitle?: string; icon?: ReactNode }[] }) {
  return (
    <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <span className="absolute left-[10%] right-[10%] top-8 hidden border-t border-dashed border-gold/45 lg:block" />
      {items.map((item, index) => (
        <div key={item.title} className="relative z-10 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-gold bg-black text-gold shadow-[0_0_32px_rgba(217,165,32,0.24)] md:size-20">
            <GlyphMark name={glyphCycle[index % glyphCycle.length]} size={42} />
          </div>
          <h3 className="mt-3 font-display text-xl uppercase leading-none tracking-wide text-offwhite md:text-2xl">{item.title}</h3>
          {item.subtitle ? <p className="mt-1 text-xs font-bold text-gold">{item.subtitle}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function RoadmapCards({ items }: { items: string[] }) {
  return (
    <div className="blueprint-board rounded-[4px] p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-gold/15 pb-4">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gold">Consulting Build Board</p>
        <p className="hidden text-[11px] font-bold uppercase tracking-wide text-muted md:block">Not a mindmap. A working sequence.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-8">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="relative min-h-36 rounded-[4px] border border-gold/18 bg-black/45 p-4">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-5 font-display text-xl uppercase leading-none tracking-wide text-offwhite">{item}</h3>
            <span className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-gold/65 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function VideoRow({ label = "Watch This Before You Join The Webinar" }: { label?: string }) {
  return (
    <section id="intro-video" className="border-b border-gold/15 py-7">
      <Container>
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="visual-tile min-h-48">
            <MediaPlaceholder label="Webinar preview" variant="portrait" className="min-h-48 border-0" video caption={false} />
            <div className="absolute inset-x-0 bottom-0 z-10 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold">Preview Video</p>
              <h3 className="mt-1 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">Weekend Webinar Invite</h3>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase leading-none tracking-wide text-offwhite md:text-4xl">{label}</h2>
            <p className="mt-4 text-sm leading-6 text-muted">A short pre-webinar briefing area for the final invitation video.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ResourceCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="resource-card premium-panel grid h-full overflow-hidden rounded-[4px] p-0">
      <div className="resource-card-cover">
        <div className="resource-card-sheet">
          <span />
          <span />
          <span />
          <strong>{title.split(" ").slice(0, 2).map((word) => word[0]).join("")}</strong>
        </div>
        <div className="resource-card-badge">
          <GlyphMark name="download" size={24} />
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gold">Field Guide</p>
          <ArrowRight size={15} className="text-gold" />
        </div>
        <h3 className="font-display text-xl uppercase leading-none tracking-wide text-offwhite">{title}</h3>
        <p className="mt-3 line-clamp-2 text-[11px] leading-5 text-muted">{body}</p>
        <OutlineButton className="mt-5 w-full" icon="none">Download Now</OutlineButton>
      </div>
    </article>
  );
}

export function RatingStars() {
  return (
    <div className="mt-4 flex justify-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={15} fill="currentColor" />
      ))}
    </div>
  );
}

export function VisualLedger({
  items,
  columns = "md:grid-cols-3"
}: {
  items: VisualItem[];
  columns?: string;
}) {
  return (
    <div className={`grid items-stretch gap-4 ${columns}`}>
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="visual-tile group">
          <MediaPlaceholder
            label={item.title}
            variant={item.image ?? inferMediaVariant(`${item.eyebrow ?? ""} ${item.title}`, "dark", Boolean(item.video))}
            video={item.video}
            caption={false}
            className="min-h-[220px] border-0"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/32 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold">{item.eyebrow ?? `0${index + 1}`}</p>
            <h3 className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item.title}</h3>
            {item.body ? <p className="mt-2 line-clamp-2 text-xs leading-5 text-offwhite/70">{item.body}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProcessBoard({
  title,
  accent,
  items
}: {
  title: string;
  accent?: string;
  items: { label: string; detail?: string }[];
}) {
  const processColumns =
    items.length <= 3
      ? "sm:grid-cols-3"
      : items.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : items.length === 5
          ? "sm:grid-cols-2 lg:grid-cols-5"
          : items.length === 6
            ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            : items.length === 8
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="blueprint-board rounded-[4px] p-5 md:p-6">
      <div className="mx-auto mb-6 max-w-5xl text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gold">Operating System</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-none tracking-wide text-offwhite md:text-5xl">
          {title} {accent ? <Highlight>{accent}</Highlight> : null}
        </h2>
      </div>
      <div className={`grid items-stretch gap-3 ${processColumns}`}>
        {items.map((item, index) => (
          <div key={`${item.label}-${index}`} className="relative flex min-h-[178px] flex-col items-center justify-center rounded-[4px] border border-gold/18 bg-black/45 p-4 text-center">
            <span className="absolute left-4 top-4 text-[11px] font-black uppercase tracking-[0.2em] text-gold/85">{String(index + 1).padStart(2, "0")}</span>
            <div className="mb-4 flex size-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
              <GlyphMark name={glyphCycle[index % glyphCycle.length]} size={28} />
            </div>
            <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item.label}</h3>
            {item.detail ? <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted">{item.detail}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FounderEditorial({
  title,
  accent,
  eyebrow,
  points,
  image = "cutout"
}: {
  title: string;
  accent?: string;
  eyebrow?: string;
  points: string[];
  image?: "portrait" | "cutout";
}) {
  return (
    <div className="editorial-panel grid gap-6 rounded-[4px] border border-gold/20 p-4 md:p-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="relative min-h-[360px] overflow-hidden rounded-[4px] bg-black">
        {image === "portrait" ? (
          <FounderPhoto variant="portrait" className="absolute inset-0 h-full w-full object-cover object-top opacity-55" />
        ) : (
          <FounderPhoto variant="cutout" className="hero-fade-bottom absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2 object-contain" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/38 to-black/10" />
        <div className="absolute inset-0 thin-grid opacity-20" />
      </div>
      <div className="flex flex-col justify-between p-1 md:p-4">
        <div>
          {eyebrow ? <p className="text-[11px] font-black uppercase tracking-[0.22em] text-gold">{eyebrow}</p> : null}
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide text-offwhite md:text-6xl">
            {title} {accent ? <Highlight>{accent}</Highlight> : null}
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {points.map((point, index) => (
            <div key={`${point}-${index}`} className="border-l border-gold/45 bg-white/[0.025] px-4 py-3">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-offwhite/85">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SignalStrip({ items }: { items: string[] }) {
  const signalColumns =
    items.length === 3
      ? "sm:grid-cols-3"
      : items.length === 5
        ? "sm:grid-cols-2 lg:grid-cols-5"
        : items.length === 6
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid items-stretch gap-3 ${signalColumns}`}>
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="signal-chip">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
