import type { ReactNode } from "react";
import { GoldButton, OutlineButton } from "./Buttons";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";

const highlightedWords = new Set([
  "Chanakya",
  "Strategy",
  "Launchpad",
  "DCL",
  "Transformations",
  "Writings",
  "Content",
  "Journey",
  "Framework"
]);

function renderHeroTitle(title: string) {
  return title.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[^A-Za-z]/g, "");
    const highlighted = highlightedWords.has(cleanWord);

    return (
      <span key={`${word}-${index}`} className={highlighted ? "gold-gradient-text" : undefined}>
        {word}
        {index < title.split(" ").length - 1 ? " " : ""}
      </span>
    );
  });
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  copy,
  primary = "Join The Free Weekend Webinar",
  secondary,
  imageLabel = "Founder strategy visual",
  children
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  copy?: string;
  primary?: string;
  secondary?: string;
  imageLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className="ref-hero relative isolate overflow-hidden border-b border-gold/15 py-12 md:py-16">
      <div className="absolute inset-0 bg-soft-radial opacity-45" />
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div>
            {eyebrow ? <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-gold">{eyebrow}</p> : null}
            <h1 className="heading-balance font-display text-5xl uppercase leading-[0.92] tracking-wide text-offwhite text-glow md:text-7xl">
              {renderHeroTitle(title)}
            </h1>
            {subtitle ? <p className="mt-4 max-w-2xl text-2xl font-black leading-tight text-gold md:text-3xl">{subtitle}</p> : null}
            {copy ? <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-offwhite/80 md:text-lg">{copy}</p> : null}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <GoldButton>{primary}</GoldButton>
              {secondary ? <OutlineButton href="#intro-video">{secondary}</OutlineButton> : null}
            </div>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gold/10 blur-3xl" />
            <ImagePlaceholder label={imageLabel} assetPath="/images/founder/hero-founder.jpg" className="min-h-[430px]" wide />
            <div className="absolute -bottom-5 left-5 right-5 grid gap-2 rounded-sm border border-gold/25 bg-black/90 p-3 backdrop-blur md:grid-cols-3">
              {["Strategy", "Systems", "Scale"].map((item) => (
                <div key={item} className="rounded-sm border border-gold/15 bg-white/5 px-3 py-2 text-center text-xs font-black uppercase tracking-[0.16em] text-offwhite">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
