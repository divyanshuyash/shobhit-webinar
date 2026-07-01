"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand } from "@/data/constants";
import { navigation } from "@/data/navigation";
import { GoldButton } from "./Buttons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-black/90 shadow-[0_14px_44px_rgba(0,0,0,0.38)] backdrop-blur-xl">
        <div className="mx-auto flex h-[66px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm border border-gold/45 bg-gold/10 font-display text-2xl leading-none text-gold shadow-[0_0_28px_rgba(217,165,32,0.18)]">
              {brand.monogram}
            </span>
            <span>
              <span className="block text-[13px] font-black uppercase leading-none tracking-[0.16em] text-offwhite">{brand.name}</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-muted">{brand.hub}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-6 text-[11px] font-black uppercase tracking-wide transition hover:text-gold ${
                    active ? "text-gold" : "text-offwhite"
                  }`}
                >
                  {item.label}
                  {active ? <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gold shadow-[0_0_18px_rgba(217,165,32,0.75)]" /> : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <GoldButton>Join Free Webinar</GoldButton>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-gold/30 text-gold lg:hidden"
          >
            <span className="font-black">{open ? "X" : "Menu"}</span>
          </button>
        </div>

        {open ? (
          <nav className="border-t border-gold/15 bg-black px-4 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-sm border border-gold/15 px-4 py-3 text-sm font-black uppercase tracking-wide ${
                    pathname === item.href ? "bg-gold text-black" : "text-offwhite"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-black/95 p-3 backdrop-blur-xl lg:hidden">
        <GoldButton className="w-full">Register For Weekend Webinar</GoldButton>
      </div>
    </>
  );
}
