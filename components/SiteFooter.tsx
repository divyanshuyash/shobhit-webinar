import Link from "next/link";
import { brand } from "@/data/constants";
import { legalLinks, navigation } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-black pb-24 pt-9 lg:pb-6">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.15fr_0.75fr_0.75fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm border border-gold/45 bg-gold/10 font-display text-2xl leading-none text-gold">
              {brand.monogram}
            </span>
            <div>
              <p className="text-[13px] font-black uppercase leading-none tracking-[0.16em] text-offwhite">{brand.name}</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-muted">{brand.hub}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Helping professionals transform their knowledge into profitable consulting businesses.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["YT", "IG", "IN", "Mail"].map((item) => (
              <span key={item} className="inline-flex h-8 min-w-8 items-center justify-center rounded-sm border border-gold/20 bg-white/[0.03] px-2 text-[10px] font-black uppercase tracking-wide text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-gold">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-gold">Legal</h3>
          <div className="mt-4 grid gap-2">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-gold">Let’s Connect</h3>
          <div className="mt-4 grid gap-2 text-sm text-muted">
            <a href="mailto:hello@shobhitsinghal.com" className="transition hover:text-gold">hello@shobhitsinghal.com</a>
            <a href="tel:+919999543210" className="transition hover:text-gold">+91 9999 543 210</a>
            <Link href="/contact" className="transition hover:text-gold">Contact Form</Link>
            <p>Learn. Apply. Impact. Repeat.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-9 flex max-w-7xl flex-col gap-3 border-t border-gold/10 px-4 pt-5 text-xs text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Shobhit Singhal. All rights reserved.</p>
        <p>Built for impact. Designed for transformation.</p>
      </div>
    </footer>
  );
}
