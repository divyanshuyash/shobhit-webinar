import {
  BadgeDollarSign,
  BadgeIndianRupee,
  BrainCircuit,
  ChartNoAxesCombined,
  Crosshair,
  Crown,
  Gem,
  Goal,
  UsersRound
} from "lucide-react";
import type { CSSProperties } from "react";
import {
  XAccent,
  XCta,
  XGrid,
  XHero,
  XHeroActions,
  XMediaCard,
  XSection,
  XStats,
  XTestimonial,
  XTitle
} from "@/components/ExactBlocks";

export default function TestimonialsPage() {
  return (
    <>
      <XHero
        image="/images/editorial/testimonials-hero.png"
        eyebrow="Proof. Purpose. Impact."
        title={<>Real people. Real clarity.<br /><XAccent>Real transformations.</XAccent></>}
        copy="From niche clarity to high-ticket offers, confidence breakthroughs to consulting growth."
      ><XHeroActions video={false} /></XHero>

      <XSection>
        <XTitle>Featured <XAccent>video testimonials</XAccent></XTitle>
        <div className="x-media-grid" style={{ "--x-media-cols": 3 } as CSSProperties}>
          <XMediaCard image="/images/editorial/testimonial-leadership.png" title="From confusion to a clear offer" copy="Illustrative preview · verified client video to be added" video label="3:24" />
          <XMediaCard image="/images/editorial/testimonial-finance.png" title="Niche clarity changed everything" copy="Illustrative preview · verified client video to be added" video label="2:48" />
          <XMediaCard image="/images/editorial/testimonial-career.png" title="Built confidence and a consulting business" copy="Illustrative preview · verified client video to be added" video label="3:07" />
        </div>
      </XSection>

      <XSection>
        <XTitle>Client <XAccent>testimonials</XAccent></XTitle>
        <div className="x-testimonial-grid" style={{ "--x-quote-cols": 5 } as CSSProperties}>
          <XTestimonial image="/images/editorial/testimonial-leadership.png" />
          <XTestimonial image="/images/editorial/testimonial-finance.png" />
          <XTestimonial image="/images/editorial/testimonial-career.png" />
          <XTestimonial image="/images/editorial/testimonial-leadership.png" />
          <XTestimonial image="/images/editorial/testimonial-finance.png" />
        </div>
      </XSection>

      <XSection>
        <XTitle>Success stories by <XAccent>category</XAccent></XTitle>
        <XGrid columns={5} items={[
          { title: "Niche clarity results", copy: "Found their profitable consulting niche.", icon: Crosshair, footer: "Verified result to be added" },
          { title: "High-ticket offer results", copy: "Created and launched premium offers.", icon: BadgeDollarSign, footer: "Verified result to be added" },
          { title: "Sales results", copy: "Built consistent sales conversations.", icon: ChartNoAxesCombined, footer: "Verified result to be added" },
          { title: "Confidence results", copy: "Moved past doubt and indecision.", icon: BrainCircuit, footer: "Verified result to be added" },
          { title: "Community results", copy: "Built collaboration and support.", icon: UsersRound, footer: "Verified result to be added" }
        ]} />
      </XSection>

      <XSection>
        <XTitle>Love from clients on <XAccent>WhatsApp</XAccent></XTitle>
        <div className="x-whatsapp-grid">
          {["Just closed my first client. Thank you so much!", "The niche clarity session changed my direction completely.", "The framework finally makes sense and feels practical.", "My confidence level has improved so much.", "Grateful to be part of the journey."].map((message) => (
            <article key={message}><p>{message}</p><span>Verified message screenshot to be added</span></article>
          ))}
        </div>
      </XSection>

      <XSection>
        <XTitle>Proof in <XAccent>numbers</XAccent></XTitle>
        <XStats items={[
          { value: "15,000+", label: "Community members", icon: UsersRound },
          { value: "₹250Cr+", label: "Client revenue generated", icon: BadgeIndianRupee },
          { value: "500+", label: "High-ticket offers launched", icon: Gem },
          { value: "₹100Cr+", label: "Offers sold by clients", icon: ChartNoAxesCombined },
          { value: "10+", label: "Countries impacted", icon: Crown },
          { value: "99%", label: "Client satisfaction", icon: Goal }
        ]} />
      </XSection>

      <XSection>
        <XTitle>Before - after <XAccent>case studies</XAccent></XTitle>
        <div className="x-media-grid" style={{ "--x-media-cols": 3 } as CSSProperties}>
          <XMediaCard image="/images/editorial/testimonial-leadership.png" title="Leadership consulting transformation" copy="Illustrative preview · verified case study to be added" />
          <XMediaCard image="/images/editorial/testimonial-finance.png" title="Financial consulting transformation" copy="Illustrative preview · verified case study to be added" />
          <XMediaCard image="/images/editorial/testimonial-career.png" title="Career consulting transformation" copy="Illustrative preview · verified case study to be added" />
        </div>
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div className="x-panel"><XTitle align="left">Payment proofs</XTitle><div className="x-whatsapp-grid !grid-cols-2"><article><p>Payment proof</p><span>Verified source to be added</span></article><article><p>Payment proof</p><span>Verified source to be added</span></article></div></div>
          <div className="x-panel"><XTitle align="left">Client wins & recognition</XTitle><div className="x-media-grid"><XMediaCard image="/images/stock/workshop-community.png" title="Recognition gallery" /><XMediaCard image="/images/editorial/sales-psychology.png" title="Client win" /></div></div>
        </div>
      </XSection>

      <XSection><XCta title="See how they did it. Now it's your turn." /></XSection>
    </>
  );
}
