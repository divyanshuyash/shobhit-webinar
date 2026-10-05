"use client";

import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating?: number;
}

export interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
  variant?: "standalone" | "paired";
}

export function AnimatedTestimonials({
  title = "Real Results. Real Momentum.",
  subtitle = "Mindset shifts, decisive action and meaningful business wins from inside the community.",
  badgeText = "Voices of the community",
  testimonials,
  autoRotateInterval = 4000,
  className = "",
  variant = "standalone"
}: AnimatedTestimonialsProps) {
  const isPaired = variant === "paired";
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
    if (autoRotateInterval <= 0 || testimonials.length <= 1 || isPaused) return;

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, autoRotateInterval);

    return () => window.clearInterval(interval);
  }, [autoRotateInterval, isPaused, testimonials.length]);

  if (testimonials.length === 0) return null;

  const activeTestimonial = testimonials[activeIndex];

  const showTestimonial = (index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`relative overflow-hidden ${isPaired ? "testimonial-paired-panel" : "border-y border-conclave-gold/10"} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_48%,rgba(217,165,32,.10),transparent_32%)]" />
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.6 }}
        className={isPaired ? "testimonial-paired-shell relative" : "section-shell relative"}
      >
        <div className={isPaired ? "testimonial-paired-heading" : "section-heading"}>
          <div className="inline-flex items-center gap-2 border border-conclave-gold/35 bg-conclave-gold/[0.06] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-conclave-gold">
            <Star aria-hidden="true" size={14} fill="currentColor" />
            {badgeText}
          </div>
          <h2 className={`section-title ${isPaired ? "testimonial-duo-title" : ""}`}>{title}</h2>
          <p className="section-copy">{subtitle}</p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={showPrevious}
              className="grid h-11 w-11 place-items-center border border-conclave-gold/35 text-conclave-offwhite transition hover:border-conclave-gold/75 hover:bg-conclave-gold/10 hover:text-conclave-gold focus:outline-none focus:ring-2 focus:ring-conclave-gold focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Show previous testimonial"
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="grid h-11 w-11 place-items-center border border-conclave-gold/35 text-conclave-offwhite transition hover:border-conclave-gold/75 hover:bg-conclave-gold/10 hover:text-conclave-gold focus:outline-none focus:ring-2 focus:ring-conclave-gold focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Show next testimonial"
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
            <span className="ml-2 font-display text-2xl tracking-[0.08em] text-conclave-gold">
              {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className={`relative mx-auto max-w-4xl ${isPaired ? "mt-8" : "mt-12"}`}>
          <div aria-hidden="true" className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-conclave-gold/25" />
          <div aria-hidden="true" className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-conclave-gold/25" />

          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: direction * 55 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="relative flex min-h-[440px] flex-col border border-conclave-gold/35 bg-[linear-gradient(140deg,rgba(24,21,13,.96),rgba(7,7,7,.98)_64%)] p-7 text-left shadow-gold sm:min-h-[400px] sm:p-10"
              aria-live="polite"
            >
              <div className="flex items-start justify-between gap-5">
                <Quote aria-hidden="true" className="text-conclave-gold/35" size={48} strokeWidth={1.2} />
                <div className="flex gap-1 text-conclave-gold" role="img" aria-label={`${activeTestimonial.rating ?? 5} out of 5 stars`}>
                  {Array.from({ length: activeTestimonial.rating ?? 5 }).map((_, index) => (
                    <Star key={index} aria-hidden="true" size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              <blockquote className="my-auto py-8">
                <p className="text-base font-semibold leading-7 text-conclave-offwhite/82 sm:text-lg sm:leading-8">
                  “{activeTestimonial.content}”
                </p>
              </blockquote>

              <div className="border-t border-conclave-gold/20 pt-6">
                <p className="font-display text-3xl leading-none text-conclave-gold">{activeTestimonial.name}</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-conclave-offwhite/42">
                  Transformers Hub Community
                </p>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Select a testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => showTestimonial(index)}
                className={`h-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-conclave-gold focus:ring-offset-4 focus:ring-offset-black ${
                  activeIndex === index ? "w-8 bg-conclave-gold" : "w-3 bg-conclave-offwhite/20 hover:bg-conclave-gold/50"
                }`}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
