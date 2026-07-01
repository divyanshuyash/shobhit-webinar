import type { ReactNode } from "react";
import { WEBINAR_URL } from "@/data/constants";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function GoldButton({ children, href = WEBINAR_URL, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-gold px-5 py-3 text-sm font-black uppercase tracking-wide text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:bg-[#efc64a] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <span aria-hidden="true" className="relative ml-3 inline-flex size-5 items-center justify-center rounded-full bg-black text-xs text-gold transition group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

export function OutlineButton({ children, href = "#", className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center rounded-sm border border-gold/40 bg-black/25 px-5 py-3 text-sm font-black uppercase tracking-wide text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black ${className}`}
    >
      {children}
      <span aria-hidden="true" className="ml-3 text-gold transition group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

export function GoldSubmitButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="submit"
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-gold px-5 py-3 text-sm font-black uppercase tracking-wide text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:bg-[#efc64a] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <span aria-hidden="true" className="relative ml-3 inline-flex size-5 items-center justify-center rounded-full bg-black text-xs text-gold transition group-hover:translate-x-0.5">
        →
      </span>
    </button>
  );
}
