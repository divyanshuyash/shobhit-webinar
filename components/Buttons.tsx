import type { ReactNode } from "react";
import { WEBINAR_URL } from "@/data/constants";
import { ArrowRight, PlayCircle } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: "chevron" | "play" | "none";
};

export function GoldButton({ children, href = WEBINAR_URL, className = "", icon = "chevron" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-[3px] bg-gold px-5 py-3 text-[11px] font-black uppercase tracking-wide text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:bg-[#efc64a] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black sm:whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      {icon !== "none" && (
        <span aria-hidden="true" className="relative ml-3 inline-flex size-[20px] items-center justify-center rounded-full bg-black text-gold transition group-hover:translate-x-0.5">
          {icon === "chevron" ? <ArrowRight size={13} strokeWidth={4} /> : <PlayCircle size={13} />}
        </span>
      )}
    </a>
  );
}

export function OutlineButton({ children, href = "#", className = "", icon = "chevron" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center rounded-[3px] border border-gold/45 bg-black/40 px-5 py-3 text-[11px] font-black uppercase tracking-wide text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black sm:whitespace-nowrap ${className}`}
    >
      <span className="relative">{children}</span>
      {icon !== "none" && (
        <span aria-hidden="true" className="ml-3 flex items-center text-offwhite transition group-hover:translate-x-0.5 group-hover:text-gold">
          {icon === "chevron" ? <ArrowRight size={16} strokeWidth={3} /> : <PlayCircle size={16} strokeWidth={2.5} />}
        </span>
      )}
    </a>
  );
}

export function GoldSubmitButton({ children, className = "", icon = "chevron" }: { children: ReactNode; className?: string, icon?: "chevron" | "play" | "none" }) {
  return (
    <button
      type="submit"
      className={`group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-[3px] bg-gold px-5 py-3 text-[11px] font-black uppercase tracking-wide text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:bg-[#efc64a] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black sm:whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      {icon !== "none" && (
        <span aria-hidden="true" className="relative ml-3 inline-flex size-[20px] items-center justify-center rounded-full bg-black text-gold transition group-hover:translate-x-0.5">
          {icon === "chevron" ? <ArrowRight size={13} strokeWidth={4} /> : <PlayCircle size={13} />}
        </span>
      )}
    </button>
  );
}
