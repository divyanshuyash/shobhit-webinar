import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Crown,
  DollarSign,
  Mail,
  MonitorUp,
  NotebookPen,
  Sparkles,
  Target
} from "lucide-react";
import type { CSSProperties } from "react";
import {
  XAccent,
  XButton,
  XCta,
  XGrid,
  XHero,
  XHeroActions,
  XMediaCard,
  XSection,
  XTitle
} from "@/components/ExactBlocks";

const articles = [
  ["/images/stock/strategy-still-life.png", "Chanakya on competition", "Why most consultants lose without a strategy"],
  ["/images/editorial/offer-blueprint.png", "High-ticket consulting", "How to build an offer that sells"],
  ["/images/editorial/sales-psychology.png", "Sales psychology", "The psychology behind premium buying decisions"],
  ["/images/editorial/ai-systems.png", "AI for consultants", "10 ways AI can multiply your consulting business"],
  ["/images/editorial/corporate-freedom.png", "Corporate freedom", "Design a business that buys your freedom"],
  ["/images/founder/founder-desk.png", "Personal brand", "Build a personal brand around useful thinking"],
  ["/images/editorial/framework-architecture.png", "Bhagavad Gita & business", "Timeless lessons every consultant should know"],
  ["/images/stock/workshop-community.png", "Client case studies", "How a consultant can scale with clarity"]
];

export default function BlogsPage() {
  return (
    <>
      <XHero
        mode="editorial"
        image="/images/generated/blogs-hero.png"
        eyebrow="Insights. Strategy. Freedom."
        title={<>Shobhit's <XAccent>writings</XAccent></>}
        copy="Business, consulting, money, mindset and Modern Chanakya thinking."
      ><XHeroActions video={false} /></XHero>

      <XSection>
        <div className="x-split-grid x-panel !p-0 overflow-hidden">
          <div className="relative min-h-[300px]"><XMediaCard image="/images/founder/founder-desk.png" title="" /></div>
          <div className="flex flex-col justify-center p-7">
            <p className="mb-3 text-[9px] font-black uppercase text-gold">Featured article</p>
            <h2 className="font-display text-4xl uppercase leading-none">The new consulting game: why high-ticket is the only sustainable path</h2>
            <p className="mt-4 text-xs leading-6 text-muted">The future belongs to consultants who build high-ticket offers, deliver transformational results and design a life of true freedom.</p>
            <div className="mt-5"><XButton>Read featured article</XButton></div>
          </div>
        </div>
      </XSection>

      <XSection className="!py-3">
        <div className="x-category-row">
          {["All", "High-Ticket Consulting", "Organic Lead Generation", "Sales Psychology", "AI for Consultants", "Corporate Freedom", "Personal Brand", "Chanakya Strategy", "Client Case Studies"].map((category, index) => <button key={category} className={index === 0 ? "is-active" : ""}>{category}</button>)}
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">All articles</XTitle>
        <div className="x-media-grid" style={{ "--x-media-cols": 4 } as CSSProperties}>
          {articles.map(([image, label, title]) => <XMediaCard key={title} image={image} title={title} copy={label} />)}
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Popular articles</XTitle>
        <XGrid columns={5} numbered items={[
          { title: "Three shifts that take you from struggling to high-ticket", icon: NotebookPen },
          { title: "Pricing psychology: how to charge what you're worth", icon: DollarSign },
          { title: "Why niching down makes you more money", icon: Target },
          { title: "Content strategy for consultants", icon: MonitorUp },
          { title: "Mindset mastery for entrepreneurs", icon: BrainCircuit }
        ]} />
      </XSection>

      <XSection>
        <div className="x-panel flex flex-col items-center gap-5 md:flex-row">
          <Mail size={38} className="text-gold" />
          <div className="flex-1"><h3>Get weekly insights that <XAccent>grow your business</XAccent></h3><p className="!mb-0">Actionable strategies on consulting, leads, sales psychology and freedom.</p></div>
          <div className="flex w-full max-w-md"><input className="x-input rounded-r-none" placeholder="Enter your email address" /><button className="x-button rounded-l-none">Send me insights</button></div>
        </div>
      </XSection>

      <XSection><XCta /></XSection>
    </>
  );
}
