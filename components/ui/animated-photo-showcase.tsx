"use client";

import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface ShowcasePhoto {
  src: string;
  alt: string;
}

export function AnimatedPhotoShowcase({ photos, autoRotateInterval = 4000 }: { photos: ShowcasePhoto[]; autoRotateInterval?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  useEffect(() => {
    if (autoRotateInterval <= 0 || photos.length <= 1 || isPaused) return;
    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % photos.length);
    }, autoRotateInterval);
    return () => window.clearInterval(interval);
  }, [autoRotateInterval, isPaused, photos.length]);

  if (photos.length === 0) return null;

  const activePhoto = photos[activeIndex];
  const showPhoto = (index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="testimonial-photo-panel relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
      }}
      aria-label="Moments of Momentum photo gallery"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(217,165,32,.1),transparent_34%)]" />
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.6 }}
        className="testimonial-paired-shell relative"
      >
        <div className="testimonial-paired-heading">
          <div className="inline-flex items-center gap-2 border border-conclave-gold/35 bg-conclave-gold/[0.06] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-conclave-gold">
            <Star aria-hidden="true" size={14} fill="currentColor" />
            Moments of momentum
          </div>
          <h2 className="section-title testimonial-duo-title">Recognition in motion.</h2>
          <p className="section-copy">The pride, connection, and big wins that bring the Transformers Hub community together.</p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button type="button" onClick={() => { setDirection(-1); setActiveIndex((current) => (current - 1 + photos.length) % photos.length); }} className="grid h-11 w-11 place-items-center border border-conclave-gold/35 text-conclave-offwhite transition hover:border-conclave-gold/75 hover:bg-conclave-gold/10 hover:text-conclave-gold focus:outline-none focus:ring-2 focus:ring-conclave-gold focus:ring-offset-2 focus:ring-offset-black" aria-label="Show previous photo">
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <button type="button" onClick={() => { setDirection(1); setActiveIndex((current) => (current + 1) % photos.length); }} className="grid h-11 w-11 place-items-center border border-conclave-gold/35 text-conclave-offwhite transition hover:border-conclave-gold/75 hover:bg-conclave-gold/10 hover:text-conclave-gold focus:outline-none focus:ring-2 focus:ring-conclave-gold focus:ring-offset-2 focus:ring-offset-black" aria-label="Show next photo">
              <ChevronRight aria-hidden="true" size={20} />
            </button>
            <span className="ml-2 font-display text-2xl tracking-[0.08em] text-conclave-gold">
              {String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl">
          <div aria-hidden="true" className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-conclave-gold/25" />
          <div aria-hidden="true" className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-conclave-gold/25" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={activePhoto.src}
              initial={{ opacity: 0, x: direction * 55 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="relative min-h-[440px] overflow-hidden border border-conclave-gold/35 bg-charcoal shadow-gold sm:min-h-[400px]"
              aria-live="polite"
            >
              <Image src={activePhoto.src} alt={activePhoto.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority={activeIndex === 0} />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-6 pb-6 pt-16 text-[10px] font-black uppercase tracking-[0.16em] text-conclave-offwhite/75">
                <ImageIcon aria-hidden="true" size={14} className="text-conclave-gold" />
                Transformers Hub Community
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Select a photo">
            {photos.map((photo, index) => (
              <button key={photo.src} type="button" onClick={() => showPhoto(index)} className={`h-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-conclave-gold focus:ring-offset-4 focus:ring-offset-black ${activeIndex === index ? "w-8 bg-conclave-gold" : "w-3 bg-conclave-offwhite/20 hover:bg-conclave-gold/50"}`} aria-label={`Show photo ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
