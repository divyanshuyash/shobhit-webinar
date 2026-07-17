"use client";

import Image from "next/image";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Download,
  Eye,
  FileCheck2,
  Layers3,
  Magnet,
  MessageSquareText,
  PackageOpen,
  Play,
  Rocket,
  Search,
  Sparkles,
  UsersRound,
  WandSparkles
} from "lucide-react";

const frameworkIcons: LucideIcon[] = [Eye, Compass, PackageOpen, UsersRound, Rocket];

export type FrameworkStep = {
  name: string;
  title: string;
  body: string;
};

export function FrameworkConsole({ steps }: { steps: FrameworkStep[] }) {
  const [active, setActive] = useState(0);
  const selected = steps[active] ?? steps[0];
  const Icon = frameworkIcons[active] ?? Eye;

  return (
    <div className="exp-framework-console">
      <div className="exp-framework-tabs" role="tablist" aria-label="DCL Framework pillars">
        {steps.map((step, index) => {
          const StepIcon = frameworkIcons[index] ?? Compass;
          return (
            <button key={step.name} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <StepIcon size={22} />
              <strong>{step.name}</strong>
            </button>
          );
        })}
      </div>
      <div className="exp-framework-stage">
        <div className="exp-framework-symbol"><Icon size={78} strokeWidth={1.2} /></div>
        <div>
          <p>Pillar {String(active + 1).padStart(2, "0")}</p>
          <h3>{selected.name}</h3>
          <strong>{selected.title}</strong>
          <span>{selected.body}</span>
        </div>
        <div className="exp-framework-outcome">
          <span>Outcome</span>
          <b>{["Clear direction", "A focused market", "A premium offer", "A trusted audience", "A scalable system"][active]}</b>
        </div>
      </div>
    </div>
  );
}

type EvidenceItem = {
  label: string;
  title: string;
  copy: string;
  state?: string;
};

export function EvidenceRoom({ items }: { items: EvidenceItem[] }) {
  const [active, setActive] = useState(0);
  const selected = items[active] ?? items[0];
  const icons = [Play, BadgeCheck, FileCheck2, MessageSquareText];
  const Icon = icons[active] ?? BadgeCheck;

  return (
    <div className="exp-evidence-room">
      <div className="exp-evidence-stage">
        <div className="exp-evidence-watermark">{String(active + 1).padStart(2, "0")}</div>
        <Icon size={54} strokeWidth={1.25} />
        <p>{selected.label}</p>
        <h3>{selected.title}</h3>
        <span>{selected.copy}</span>
        <b><BadgeCheck size={15} /> {selected.state ?? "Verified asset will appear here"}</b>
      </div>
      <div className="exp-evidence-index">
        {items.map((item, index) => (
          <button key={item.title} type="button" onClick={() => setActive(index)} className={active === index ? "is-active" : ""}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><small>{item.label}</small><strong>{item.title}</strong></div>
            <ArrowRight size={17} />
          </button>
        ))}
      </div>
    </div>
  );
}

type Article = {
  title: string;
  category: string;
  summary: string;
  image: string;
};

export function ArticleExplorer({ articles, categories }: { articles: Article[]; categories: string[] }) {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? articles : articles.filter((article) => article.category === category);

  return (
    <div className="exp-article-explorer">
      <div className="exp-filter-row" role="tablist" aria-label="Article categories">
        {["All", ...categories].map((item) => (
          <button key={item} type="button" className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <div className="exp-article-grid">
        {filtered.map((article, index) => (
          <article key={article.title}>
            <div className="exp-article-image">
              <Image src={article.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p>{article.category}</p>
            <h3>{article.title}</h3>
            <span>{article.summary}</span>
            <a href="#">Read article <ArrowRight size={15} /></a>
          </article>
        ))}
      </div>
    </div>
  );
}

type Channel = {
  name: string;
  title: string;
  copy: string;
  image: string;
};

export function ContentStudio({ channels }: { channels: Channel[] }) {
  const [active, setActive] = useState(0);
  const selected = channels[active] ?? channels[0];
  const icons = [Play, WandSparkles, BriefcaseBusiness, BookOpen];
  const Icon = icons[active] ?? Sparkles;

  return (
    <div className="exp-content-studio">
      <div className="exp-content-image">
        <Image src={selected.image} alt="" fill sizes="(max-width: 900px) 100vw, 58vw" />
        <span><Play size={20} fill="currentColor" /></span>
      </div>
      <div className="exp-content-copy">
        <Icon size={34} strokeWidth={1.5} />
        <p>{selected.name}</p>
        <h3>{selected.title}</h3>
        <span>{selected.copy}</span>
        <a href="#">Explore {selected.name} <ArrowRight size={15} /></a>
      </div>
      <div className="exp-content-tabs">
        {channels.map((channel, index) => (
          <button key={channel.name} type="button" className={active === index ? "is-active" : ""} onClick={() => setActive(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>{channel.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ResourceLibrary({ resources }: { resources: Array<{ title: string; copy: string }> }) {
  const [active, setActive] = useState(0);
  const selected = resources[active] ?? resources[0];
  const icons = [Layers3, Magnet, Search, MessageSquareText, Rocket, WandSparkles];
  const Icon = icons[active] ?? Layers3;

  return (
    <div className="exp-resource-library">
      <div className="exp-resource-cover">
        <p>Free field guide</p>
        <Icon size={58} strokeWidth={1.25} />
        <h3>{selected.title}</h3>
        <span>{selected.copy}</span>
        <button type="button">Download guide <Download size={15} /></button>
      </div>
      <div className="exp-resource-spines">
        {resources.map((resource, index) => (
          <button key={resource.title} type="button" className={active === index ? "is-active" : ""} onClick={() => setActive(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{resource.title}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
