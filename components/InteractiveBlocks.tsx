"use client";

import { useMemo, useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { GlyphMark, Highlight, type GlyphName, type MediaVariant, type VisualItem } from "./DesignBlocks";

type InteractiveItem = VisualItem & {
  cta?: string;
  glyph?: GlyphName;
  metric?: string;
};

type ResourceItem = {
  title: string;
  body: string;
};

const variantGlyph: Record<MediaVariant, GlyphName> = {
  article: "content",
  case: "growth",
  community: "audience",
  dark: "strategy",
  platform: "video",
  portrait: "lead",
  proof: "proof",
  resource: "download",
  strategy: "strategy",
  webinar: "calendar",
  workshop: "audience"
};

function inferVariant(item: InteractiveItem): MediaVariant {
  if (item.image) return item.image;
  if (item.video) return "webinar";

  const text = `${item.eyebrow ?? ""} ${item.title}`.toLowerCase();
  if (text.includes("proof") || text.includes("payment") || text.includes("asset")) return "proof";
  if (text.includes("case") || text.includes("result") || text.includes("win")) return "case";
  if (text.includes("community") || text.includes("event") || text.includes("workshop")) return "community";
  if (text.includes("blog") || text.includes("article")) return "article";
  if (text.includes("resource") || text.includes("blueprint") || text.includes("checklist")) return "resource";
  return "strategy";
}

function StageArt({ variant, video }: { variant: MediaVariant; video?: boolean }) {
  return (
    <div className={`stage-art stage-art-${variant}`}>
      {variant === "case" ? (
        <>
          <span className="case-before">Before</span>
          <span className="case-after">After</span>
          <i />
        </>
      ) : null}
      {variant === "proof" ? (
        <>
          <span className="proof-note proof-note-a" />
          <span className="proof-note proof-note-b" />
          <strong>Verified<br />Asset</strong>
        </>
      ) : null}
      {variant === "community" || variant === "workshop" ? (
        <div className="constellation">
          {Array.from({ length: 12 }).map((_, index) => <span key={index} />)}
        </div>
      ) : null}
      {variant === "article" ? (
        <>
          <span className="editorial-number">01</span>
          <span className="editorial-line editorial-line-a" />
          <span className="editorial-line editorial-line-b" />
          <span className="editorial-line editorial-line-c" />
        </>
      ) : null}
      {variant === "resource" ? (
        <div className="resource-open">
          <span />
          <span />
          <span />
        </div>
      ) : null}
      {variant === "platform" || variant === "webinar" ? (
        <>
          <span className="screen-main" />
          <span className="screen-side screen-side-a" />
          <span className="screen-side screen-side-b" />
          {video ? <span className="stage-play"><PlayCircle size={38} /></span> : null}
        </>
      ) : null}
      {variant === "strategy" || variant === "dark" || variant === "portrait" ? (
        <div className="strategy-radar">
          <span />
          <span />
          <span />
        </div>
      ) : null}
    </div>
  );
}

export function InteractiveShowcase({
  eyebrow,
  title,
  accent,
  copy,
  items,
  tone = "studio"
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  copy?: string;
  items: InteractiveItem[];
  tone?: "studio" | "proof" | "content";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];
  const variant = inferVariant(active);
  const glyph = active.glyph ?? variantGlyph[variant];

  return (
    <div className={`interactive-showcase interactive-showcase-${tone}`}>
      <div className="interactive-head">
        <div>
          {eyebrow ? <p>{eyebrow}</p> : null}
          <h2>{title} {accent ? <Highlight>{accent}</Highlight> : null}</h2>
        </div>
        {copy ? <span>{copy}</span> : null}
      </div>

      <div className="interactive-body">
        <div className="interactive-stage">
          <StageArt variant={variant} video={active.video} />
          <div className="stage-glow" />
          <div className="stage-meta">
            <div className="stage-mark">
              <GlyphMark name={glyph} size={44} />
            </div>
            <p>{active.eyebrow ?? `Selected ${activeIndex + 1}`}</p>
            <h3>{active.title}</h3>
            {active.body ? <span>{active.body}</span> : null}
            {active.metric ? <strong>{active.metric}</strong> : null}
          </div>
        </div>

        <div className="interactive-dock" role="tablist" aria-label={`${title} selector`}>
          {items.map((item, index) => {
            const itemVariant = inferVariant(item);
            const selected = index === activeIndex;

            return (
              <button
                key={`${item.title}-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <span className="dock-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="dock-copy">
                  <span>{item.eyebrow ?? itemVariant}</span>
                  <strong>{item.title}</strong>
                </span>
                <GlyphMark name={item.glyph ?? variantGlyph[itemVariant]} size={24} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ResourceShelf({ items }: { items: ResourceItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];
  const initials = useMemo(
    () => active.title.split(" ").slice(0, 2).map((word) => word[0]).join(""),
    [active.title]
  );

  return (
    <div className="resource-shelf">
      <div className="resource-preview">
        <div className="open-guide">
          <div>
            <p>Selected Guide</p>
            <h3>{active.title}</h3>
            <span>{active.body}</span>
          </div>
          <strong>{initials}</strong>
        </div>
      </div>
      <div className="book-rail" role="tablist" aria-label="Free resource selector">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}

export function ArticleIndex({ articles, categories }: { articles: string[]; categories: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = articles[activeIndex] ?? articles[0];
  const category = categories[activeIndex % categories.length];

  return (
    <div className="article-indexer">
      <div className="article-reader">
        <p>{category}</p>
        <h2>{active}</h2>
        <span>A clean editorial surface for the final article, designed as a reading console instead of a thumbnail grid.</span>
        <a href="#">
          Read Article <ArrowRight size={16} />
        </a>
      </div>
      <div className="article-list" role="tablist" aria-label="Article selector">
        {articles.map((article, index) => (
          <button
            key={article}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{article}</strong>
            <em>{categories[index % categories.length]}</em>
          </button>
        ))}
      </div>
    </div>
  );
}
