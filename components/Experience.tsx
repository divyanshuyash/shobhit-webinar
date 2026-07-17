import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Play,
  Sparkles,
  Video
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { WEBINAR_URL } from "@/data/constants";

export type Feature = {
  title: string;
  copy?: string;
  icon: LucideIcon;
  index?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`exp-shell ${className}`}>{children}</div>;
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="exp-accent">{children}</span>;
}

export function PageHero({
  image,
  eyebrow,
  title,
  copy,
  children,
  aside,
  align = "left",
  imagePosition = "center"
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
  children?: ReactNode;
  aside?: ReactNode;
  align?: "left" | "center";
  imagePosition?: string;
}) {
  return (
    <section className={`exp-hero exp-hero-${align}`}>
      <Image
        src={image}
        alt=""
        fill
        preload
        sizes="100vw"
        className="exp-hero-image"
        style={{ objectPosition: imagePosition }}
      />
      <div className="exp-hero-shade" />
      <Shell className={`exp-hero-inner ${aside ? "has-aside" : "is-solo"}`}>
        <div className="exp-hero-copy">
          <p className="exp-kicker"><span />{eyebrow}</p>
          <h1>{title}</h1>
          <p className="exp-hero-intro">{copy}</p>
          {children}
        </div>
        {aside ? <div className="exp-hero-aside">{aside}</div> : null}
      </Shell>
    </section>
  );
}

export function HeroActions({ secondary = true }: { secondary?: boolean }) {
  return (
    <div className="exp-actions">
      <Link href={WEBINAR_URL} className="exp-button exp-button-primary">
        Join Free Webinar <ArrowRight size={17} />
      </Link>
      {secondary ? (
        <a href="#discover" className="exp-button exp-button-quiet">
          Explore the method <Play size={15} fill="currentColor" />
        </a>
      ) : null}
    </div>
  );
}

export function SchedulePanel({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`exp-schedule ${compact ? "is-compact" : ""}`}>
      <div className="exp-schedule-live"><span /> Free live webinar</div>
      <h2>Digital Consultant<br />Launchpad</h2>
      <p>The Crorepati Consultant Blueprint</p>
      <div className="exp-schedule-grid">
        <span><CalendarDays size={18} /> Every Saturday & Sunday</span>
        <span><Clock3 size={18} /> 11:00 AM (IST)</span>
        <span><Video size={18} /> Live online</span>
      </div>
      <Link href={WEBINAR_URL}>Reserve your seat <ArrowRight size={15} /></Link>
    </aside>
  );
}

export function MetaRibbon({ items }: { items: Feature[] }) {
  return (
    <div className="exp-ribbon">
      <Shell className="exp-ribbon-grid">
        {items.map(({ title, copy, icon: Icon }) => (
          <div key={title}>
            <Icon size={18} />
            <span><strong>{title}</strong>{copy ? <small>{copy}</small> : null}</span>
          </div>
        ))}
      </Shell>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center"
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={`exp-section-head exp-section-head-${align}`}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </header>
  );
}

export function FeatureRail({ items, numbered = false }: { items: Feature[]; numbered?: boolean }) {
  return (
    <div className={`exp-feature-rail ${numbered ? "is-numbered" : ""}`} style={{ "--rail-count": items.length } as CSSProperties}>
      {items.map(({ title, copy, icon: Icon, index }, itemIndex) => (
        <article key={title}>
          {numbered ? <b>{index ?? String(itemIndex + 1).padStart(2, "0")}</b> : null}
          <Icon size={29} strokeWidth={1.6} />
          <h3>{title}</h3>
          {copy ? <p>{copy}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function MetricRail({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="exp-metric-rail" style={{ "--metric-count": metrics.length } as CSSProperties}>
      {metrics.map((metric) => (
        <div key={metric.value + metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export function EditorialSplit({
  image,
  eyebrow,
  title,
  copy,
  points = [],
  reverse = false,
  imageAlt = "Shobhit Singhal"
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
  points?: string[];
  reverse?: boolean;
  imageAlt?: string;
}) {
  return (
    <div className={`exp-editorial ${reverse ? "is-reverse" : ""}`}>
      <div className="exp-editorial-media">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div className="exp-editorial-copy">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{copy}</span>
        {points.length ? (
          <ul>
            {points.map((point) => <li key={point}><Check size={16} />{point}</li>)}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export function QuoteBand({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="exp-quote-band">
      <Sparkles size={26} />
      <blockquote>“{quote}”</blockquote>
      <span>{attribution}</span>
    </div>
  );
}

export function Checklist({ items, tone = "gold" }: { items: string[]; tone?: "gold" | "red" }) {
  return (
    <ul className={`exp-checklist exp-checklist-${tone}`}>
      {items.map((item) => <li key={item}><span><Check size={14} /></span>{item}</li>)}
    </ul>
  );
}

export function MediaMosaic({
  items
}: {
  items: Array<{ image: string; label: string; title: string; className?: string }>;
}) {
  return (
    <div className="exp-mosaic">
      {items.map((item) => (
        <article key={item.title} className={item.className ?? ""}>
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 40vw" />
          <div>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="exp-faq-list">
      {items.map((item, index) => (
        <details key={item.q} open={index === 0}>
          <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<b>+</b></summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, copy = "Your first step starts this weekend." }: { title: ReactNode; copy?: string }) {
  return (
    <div className="exp-cta-band">
      <div>
        <p>Free weekend webinar</p>
        <h2>{title}</h2>
        <span>{copy}</span>
      </div>
      <Link href={WEBINAR_URL} className="exp-button exp-button-dark">
        Reserve your seat <ArrowRight size={17} />
      </Link>
    </div>
  );
}

export function PlayBadge() {
  return <span className="exp-play"><Play size={21} fill="currentColor" /></span>;
}
