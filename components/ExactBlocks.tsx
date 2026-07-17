import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Play,
  Star,
  Video
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { WEBINAR_URL } from "@/data/constants";
import { Reveal } from "./ExactMotion";

export type ExactItem = {
  title: string;
  copy?: string;
  icon: LucideIcon;
  eyebrow?: string;
  footer?: string;
};

export function XWrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`x-wrap ${className}`}>{children}</div>;
}

export function XAccent({ children }: { children: ReactNode }) {
  return <span className="x-accent">{children}</span>;
}

export function XTitle({ children, eyebrow, align = "center" }: { children: ReactNode; eyebrow?: string; align?: "left" | "center" }) {
  return (
    <div className={`x-title x-title-${align}`}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{children}</h2>
    </div>
  );
}

export function XButton({ children, quiet = false, href = WEBINAR_URL }: { children: ReactNode; quiet?: boolean; href?: string }) {
  return (
    <Link href={href} className={`x-button ${quiet ? "x-button-quiet" : ""}`}>
      {children} {quiet ? <Play size={13} fill="currentColor" /> : <ArrowRight size={14} />}
    </Link>
  );
}

export function XSchedule() {
  return (
    <aside className="x-schedule">
      <p><span /> Free live webinar</p>
      <h2>Digital Consultant<br />Launchpad</h2>
      <strong>The Crorepati Consultant Blueprint</strong>
      <div>
        <span><CalendarDays size={17} /> Every Saturday & Sunday</span>
        <span><Clock3 size={17} /> 11:00 AM (IST)</span>
        <span><Video size={17} /> Live online</span>
      </div>
      <XButton>Register now</XButton>
    </aside>
  );
}

export function XHero({
  eyebrow,
  title,
  copy,
  image,
  mode = "split",
  aside,
  children,
  imagePosition = "center"
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: string;
  mode?: "split" | "three" | "editorial";
  aside?: ReactNode;
  children?: ReactNode;
  imagePosition?: string;
}) {
  return (
    <section className={`x-hero x-hero-${mode}`}>
      {mode !== "three" ? (
        <Image src={image} alt="" fill preload sizes="100vw" className="x-hero-bg" style={{ objectPosition: imagePosition }} />
      ) : null}
      <div className="x-hero-overlay" />
      <XWrap className="x-hero-grid">
        <Reveal>
          <div className="x-hero-copy">
            <p>{eyebrow}</p>
            <h1>{title}</h1>
            <span>{copy}</span>
            {children}
          </div>
        </Reveal>
        {mode === "three" ? (
          <div className="x-hero-founder">
            <Image src={image} alt="Shobhit Singhal" fill preload sizes="40vw" />
          </div>
        ) : null}
        {aside ? <div className="x-hero-aside">{aside}</div> : null}
      </XWrap>
    </section>
  );
}

export function XHeroActions({ video = true }: { video?: boolean }) {
  return (
    <div className="x-actions">
      <XButton>Join the free weekend webinar</XButton>
      {video ? <XButton quiet href="#intro-video">Watch introduction video</XButton> : null}
    </div>
  );
}

export function XMeta({ items }: { items: Array<{ icon: LucideIcon; title: string; copy?: string }> }) {
  return (
    <div className="x-meta">
      <XWrap>
        {items.map(({ icon: Icon, title, copy }) => (
          <div key={title}><Icon size={16} /><span><b>{title}</b>{copy ? <small>{copy}</small> : null}</span></div>
        ))}
      </XWrap>
    </div>
  );
}

export function XSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`x-section ${className}`}><XWrap><Reveal>{children}</Reveal></XWrap></section>;
}

export function XGrid({ items, columns = 5, numbered = false }: { items: ExactItem[]; columns?: number; numbered?: boolean }) {
  return (
    <div className="x-grid" style={{ "--x-cols": columns } as CSSProperties}>
      {items.map(({ title, copy, icon: Icon, eyebrow, footer }, index) => (
        <article key={`${title}-${index}`} className="x-card">
          {numbered ? <span className="x-card-number">{String(index + 1).padStart(2, "0")}</span> : null}
          <Icon size={31} strokeWidth={1.55} />
          {eyebrow ? <small>{eyebrow}</small> : null}
          <h3>{title}</h3>
          {copy ? <p>{copy}</p> : null}
          {footer ? <b>{footer}</b> : null}
        </article>
      ))}
    </div>
  );
}

export function XCheckList({ items, negative = false }: { items: string[]; negative?: boolean }) {
  return (
    <ul className={`x-checks ${negative ? "is-negative" : ""}`}>
      {items.map((item) => <li key={item}><span><Check size={12} /></span>{item}</li>)}
    </ul>
  );
}

export function XStats({ items }: { items: Array<{ value: string; label: string; icon?: LucideIcon }> }) {
  return (
    <div className="x-stats" style={{ "--x-stat-cols": items.length } as CSSProperties}>
      {items.map(({ value, label, icon: Icon }) => (
        <div key={value + label}>{Icon ? <Icon size={25} /> : null}<strong>{value}</strong><span>{label}</span></div>
      ))}
    </div>
  );
}

export function XSteps({ items, compact = false }: { items: ExactItem[]; compact?: boolean }) {
  return (
    <div className={`x-steps ${compact ? "is-compact" : ""}`} style={{ "--x-step-count": items.length } as CSSProperties}>
      {items.map(({ title, copy, icon: Icon }, index) => (
        <div key={title}>
          <span className="x-step-icon"><Icon size={compact ? 24 : 30} strokeWidth={1.5} /></span>
          <b>{title}</b>
          {copy ? <small>{copy}</small> : null}
          {index < items.length - 1 ? <ArrowRight className="x-step-arrow" size={19} /> : null}
        </div>
      ))}
    </div>
  );
}

export function XMediaCard({ image, title, copy, video = false, label }: { image: string; title: string; copy?: string; video?: boolean; label?: string }) {
  return (
    <article className="x-media-card">
      <div className="x-media-image">
        <Image src={image} alt={title} fill sizes="(max-width: 800px) 100vw, 33vw" />
        {video ? <span className="x-play"><Play size={20} fill="currentColor" /></span> : null}
        {label ? <small>{label}</small> : null}
      </div>
      <h3>{title}</h3>
      {copy ? <p>{copy}</p> : null}
    </article>
  );
}

export function XTestimonial({ quote = "Client testimonial to be added", role = "Verified client story", image = "/images/founder-source/founder-portrait.jpg" }: { quote?: string; role?: string; image?: string }) {
  return (
    <article className="x-testimonial">
      <div className="x-avatar"><Image src={image} alt="" fill sizes="44px" /></div>
      <div><Star size={13} fill="currentColor" /><p>{quote}</p><span>{role}</span></div>
    </article>
  );
}

export function XFaq({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="x-faq">
      {items.map((item, index) => (
        <details key={item.q} open={index === 0}>
          <summary>{item.q}<b>+</b></summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function XCta({ title = "Your first step starts this weekend.", copy = "Live training · Q&A session · Actionable frameworks" }: { title?: string; copy?: string }) {
  return (
    <div className="x-cta">
      <span className="x-cta-icon"><CalendarDays size={31} /></span>
      <div><p>Upcoming free weekend webinar</p><h2>{title}</h2><span>{copy}</span></div>
      <div className="x-cta-time"><b><CalendarDays size={15} /> Every Saturday & Sunday</b><b><Clock3 size={15} /> 11:00 AM (IST)</b></div>
      <XButton>Reserve your seat now</XButton>
    </div>
  );
}
