import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { brand } from "@/data/constants";
import { legalLinks, navigation } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="x-site-footer">
      <div className="x-site-footer-grid">
        <div>
          <div className="x-site-brand"><span>SS</span><div><strong>{brand.name}</strong><small>{brand.hub}</small></div></div>
          <p>Helping professionals transform their experience into focused, premium consulting businesses.</p>
          <div className="x-site-social"><span><FaYoutube /></span><span><FaInstagram /></span><span><FaLinkedin /></span></div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="x-site-links">{navigation.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="x-site-links">{navigation.slice(4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </div>
        <div>
          <h3>Legal & Contact</h3>
          <div className="x-site-links">{legalLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <div className="x-site-contact"><span><Mail size={13} /> {brand.email}</span><span><MapPin size={13} /> {brand.location}</span></div>
        </div>
      </div>
      <div className="x-site-footer-bottom"><span>© 2026 Shobhit Singhal. All rights reserved.</span><span>Build impact. Create freedom. Live your legacy.</span></div>
    </footer>
  );
}
