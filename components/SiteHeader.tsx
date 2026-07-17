"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { brand, WEBINAR_URL } from "@/data/constants";
import { navigation } from "@/data/navigation";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <header className={`x-site-header ${isHome ? "is-home" : ""} ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="x-site-header-inner">
          <Link href="/" className="x-site-brand" aria-label="Shobhit Singhal home">
            <span><BrandMark /></span>
            <div><strong>{brand.name}</strong><small>{brand.hub}</small></div>
          </Link>
          <nav className="x-site-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>{item.label}</Link>
            ))}
          </nav>
          <Link href={WEBINAR_URL} className="x-site-cta">Join Free Webinar <ArrowRight size={13} /></Link>
          <button className="x-site-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {open ? (
          <nav className="x-site-mobile" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div className="x-sticky-mobile"><Link href={WEBINAR_URL}>Join Free Webinar <ArrowRight size={14} /></Link></div>
    </>
  );
}
