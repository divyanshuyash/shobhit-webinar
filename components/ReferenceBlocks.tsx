import type { ReactNode } from "react";
import { GoldButton, OutlineButton } from "./Buttons";
import { ImagePlaceholder } from "./ImagePlaceholder";

type CardItem = {
  title: string;
  body?: string;
  eyebrow?: string;
};

type StatItem = {
  value: string;
  label: string;
};

function MarkIcon({ label, index = 0 }: { label?: string; index?: number }) {
  return (
    <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold/55 bg-gold/10 text-gold shadow-[0_0_28px_rgba(217,165,32,0.16)]">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="size-8 fill-none stroke-current stroke-[2.4]">
        <circle cx="24" cy="24" r="14" />
        <path d="M24 10v28M10 24h28" opacity="0.25" />
        <path d={index % 3 === 0 ? "M15 26l6 6 13-16" : index % 3 === 1 ? "M14 30l10-16 10 16" : "M16 18h16v16H16z"} />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}

export function ReferenceTitle({
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
    <div className={`mb-7 ${align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}>
      {eyebrow ? <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-gold">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-offwhite md:text-6xl">
        {title} {accent ? <span className="gold-gradient-text">{accent}</span> : null}
      </h2>
      {copy ? <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{copy}</p> : null}
    </div>
  );
}

export function IconCardGrid({
  items,
  columns = "md:grid-cols-3 lg:grid-cols-6",
  compact = false
}: {
  items: CardItem[];
  columns?: string;
  compact?: boolean;
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className={`premium-panel rounded-sm text-center transition duration-300 hover:-translate-y-1 hover:border-gold/55 ${compact ? "p-4" : "p-5"}`}>
          <MarkIcon label={item.title} index={index} />
          {item.eyebrow ? <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-gold">{item.eyebrow}</p> : null}
          <h3 className="mt-4 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item.title}</h3>
          {item.body ? <p className="mt-3 text-xs leading-5 text-muted">{item.body}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function StatStrip({ stats }: { stats: StatItem[] }) {
  return (
    <div className="premium-panel rounded-sm p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-gold/15 px-4 py-3 text-center lg:border-r last:border-r-0">
            <p className="font-display text-4xl uppercase leading-none text-gold md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wide text-offwhite/75">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MediaTile({
  title,
  subtitle,
  assetPath,
  className = "",
  video = false
}: {
  title: string;
  subtitle?: string;
  assetPath?: string;
  className?: string;
  video?: boolean;
}) {
  return (
    <article className={`premium-panel overflow-hidden rounded-sm ${className}`}>
      <ImagePlaceholder label={video ? `${title} video` : title} assetPath={assetPath} className="min-h-56 rounded-none border-0" />
      <div className="p-4">
        <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{title}</h3>
        {subtitle ? <p className="mt-2 text-xs font-semibold leading-5 text-muted">{subtitle}</p> : null}
      </div>
    </article>
  );
}

export function ProcessRail({
  items,
  result
}: {
  items: string[];
  result?: string;
}) {
  return (
    <div className="premium-panel rounded-sm p-5 md:p-7">
      <div className="grid gap-4 md:grid-cols-5">
        {items.map((item, index) => (
          <div key={item} className="relative text-center">
            <MarkIcon label={item} index={index} />
            <p className="mt-3 font-display text-2xl uppercase leading-none tracking-wide text-offwhite">{item}</p>
            {index < items.length - 1 ? <span className="absolute left-[64%] top-7 hidden h-px w-[72%] bg-gradient-to-r from-gold to-transparent md:block" /> : null}
          </div>
        ))}
      </div>
      {result ? (
        <div className="mx-auto mt-7 max-w-3xl rounded-sm border border-gold/30 bg-gold/10 px-5 py-4 text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">Output</p>
          <p className="mt-1 font-display text-3xl uppercase leading-none text-offwhite">{result}</p>
        </div>
      ) : null}
    </div>
  );
}

export function RoadmapLane({ items }: { items: string[] }) {
  return (
    <div className="premium-panel rounded-sm p-5 md:p-7">
      <div className="relative grid gap-4 md:grid-cols-4 lg:grid-cols-8">
        <span className="absolute left-8 right-8 top-6 hidden border-t border-dashed border-gold/45 lg:block" />
        {items.map((item, index) => (
          <div key={item} className="relative rounded-sm border border-gold/20 bg-black/50 p-4 text-center">
            <span className="mx-auto -mt-1 flex size-8 items-center justify-center rounded-full border border-gold bg-black text-xs font-black text-gold">
              {index + 1}
            </span>
            <h3 className="mt-4 font-display text-xl uppercase leading-none tracking-wide text-offwhite">{item}</h3>
            <p className="mt-3 text-[11px] leading-5 text-muted">{index < items.length - 1 ? "Build the next layer with clarity and execution." : "Build a business with impact and income."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SplitVisualFeature({
  eyebrow,
  title,
  accent,
  copy,
  bullets,
  imageLabel,
  reverse = false,
  children
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  copy?: string;
  bullets?: string[];
  imageLabel: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`grid gap-6 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <ImagePlaceholder label={imageLabel} className="min-h-[340px]" />
      <div>
        <ReferenceTitle eyebrow={eyebrow} title={title} accent={accent} copy={copy} align="left" />
        {bullets ? (
          <ul className="grid gap-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm font-semibold leading-6 text-offwhite/80">
                <span className="mt-1 text-gold">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </div>
  );
}

export function GoldCTA({
  title,
  copy,
  button = "Reserve Your Seat Now"
}: {
  title: string;
  copy?: string;
  button?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-gold/60 bg-gradient-to-r from-[#d6a02a] via-[#efc64a] to-[#c89121] p-5 text-black shadow-gold md:p-7">
      <div className="grid gap-5 md:grid-cols-[0.85fr_1.7fr_0.95fr] md:items-center">
        <div className="flex size-20 items-center justify-center rounded-full border border-black/25 bg-black/10 font-display text-4xl">01</div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em]">Upcoming Free Weekend Webinar</p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none md:text-5xl">{title}</h2>
          {copy ? <p className="mt-2 text-sm font-semibold text-black/75">{copy}</p> : null}
        </div>
        <div className="rounded-sm border border-black/25 bg-black p-4 text-offwhite">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">Every Saturday & Sunday</p>
          <p className="mt-2 font-display text-3xl uppercase leading-none">11:00 AM</p>
          <GoldButton className="mt-4 w-full">{button}</GoldButton>
        </div>
      </div>
    </div>
  );
}

export function MiniTestimonials({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <article key={item} className="premium-panel rounded-sm p-5">
          <p className="font-display text-5xl leading-none text-gold">“</p>
          <p className="text-sm font-semibold leading-6 text-offwhite/80">{item}</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-xs font-black text-gold">
              0{index + 1}
            </span>
            <div>
              <p className="text-sm font-black text-offwhite">{["Rahul Mehta", "Priya Sharma", "Ankit Agarwal"][index % 3]}</p>
              <p className="text-xs text-muted">{["Business Coach", "Marketing Consultant", "Finance Advisor"][index % 3]}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ActionCard({
  title,
  body,
  action,
  href = "#"
}: {
  title: string;
  body?: string;
  action?: string;
  href?: string;
}) {
  return (
    <article className="premium-panel rounded-sm p-5">
      <MarkIcon label={title} />
      <h3 className="mt-5 font-display text-3xl uppercase leading-none tracking-wide text-offwhite">{title}</h3>
      {body ? <p className="mt-3 text-sm leading-6 text-muted">{body}</p> : null}
      {action ? <OutlineButton href={href} className="mt-5 w-full">{action}</OutlineButton> : null}
    </article>
  );
}
