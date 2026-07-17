import type { ReactNode } from "react";
import { GoldButton, OutlineButton } from "./Buttons";
import { Container } from "./Container";
import { getStockImage } from "@/data/stockImages";

const highlightedWords = new Set([
  "Chanakya",
  "Modern",
  "Strategy",
  "Launchpad",
  "DCL",
  "Transformations",
  "Writings",
  "Free",
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
  primary,
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
  const image = getStockImage(imageLabel);
  const portraitHero = image.url.includes("hero-founder");
  const imageClass = portraitHero
    ? "hero-photo-fade absolute bottom-0 right-[4%] z-0 hidden h-[116%] w-[46%] object-contain object-bottom opacity-[0.88] saturate-[0.86] sepia-[0.12] contrast-[1.08] lg:block"
    : "hero-photo-fade absolute inset-y-0 right-0 z-0 hidden h-full w-[62%] object-cover object-center opacity-90 saturate-[0.86] sepia-[0.12] contrast-[1.08] lg:block";

  return (
    <section className="ref-hero relative isolate min-h-[430px] overflow-hidden border-b border-gold/15 py-12 md:py-16">
      <img
        src={image.url}
        alt={image.alt}
        className={imageClass}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.96)_32%,rgba(3,3,3,0.42)_62%,rgba(3,3,3,0.68)_100%)]" />
      <div className="absolute inset-0 z-0 bg-soft-radial opacity-40" />
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            {eyebrow ? <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-gold">{eyebrow}</p> : null}
            <h1 className="heading-balance font-display text-5xl uppercase leading-[0.9] tracking-wide text-offwhite text-glow md:text-7xl">
              {renderHeroTitle(title)}
            </h1>
            {subtitle ? <p className="mt-4 max-w-2xl text-2xl font-black leading-tight text-gold md:text-3xl">{subtitle}</p> : null}
            {copy ? <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-offwhite/80 md:text-lg">{copy}</p> : null}
            {primary || secondary ? (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {primary ? <GoldButton>{primary}</GoldButton> : null}
                {secondary ? <OutlineButton href="#intro-video">{secondary}</OutlineButton> : null}
              </div>
            ) : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
          <div className="hidden min-h-[320px] lg:block" />
        </div>
      </Container>
    </section>
  );
}
