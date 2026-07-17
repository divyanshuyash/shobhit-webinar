import {
  BadgeDollarSign,
  BadgeIndianRupee,
  BadgeCheck,
  Bot,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  Clock3,
  Crosshair,
  Handshake,
  Magnet,
  MessageCircleMore,
  PackageCheck,
  Presentation,
  ScanSearch,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  Video
} from "lucide-react";
import type { CSSProperties } from "react";
import {
  XAccent,
  XCta,
  XFaq,
  XGrid,
  XHero,
  XHeroActions,
  XMediaCard,
  XMeta,
  XSchedule,
  XSection,
  XStats,
  XSteps,
  XTitle
} from "@/components/ExactBlocks";
import { faqs, notFor, webinarFor } from "@/data/site";

export default function WebinarPage() {
  return (
    <>
      <XHero
        mode="three"
        image="/images/founder/hero-founder.png"
        eyebrow="Join the free weekend webinar"
        title={<>Digital consultant<br /><XAccent>launchpad</XAccent></>}
        copy="The Crorepati Consultant Blueprint. Build a high-ticket consulting business using your knowledge, experience & AI."
        aside={<XSchedule />}
      ><XHeroActions video={false} /></XHero>

      <XMeta items={[
        { title: "100% free", icon: BadgeCheck },
        { title: "Live interactive session", icon: Video },
        { title: "Q&A with Shobhit Singhal", icon: MessageCircleMore },
        { title: "Limited seats every weekend", icon: CalendarDays }
      ]} />

      <XSection>
        <XTitle>What you will learn</XTitle>
        <XGrid columns={6} numbered items={[
          { title: "Choose your niche", copy: "Find a high-ticket consulting niche that sells.", icon: Crosshair },
          { title: "Build the offer", copy: "Create an irresistible offer clients understand.", icon: BadgeDollarSign },
          { title: "Attract clients", copy: "Build demand without depending on paid ads.", icon: Magnet },
          { title: "Close with confidence", copy: "Lead high-ticket sales conversations.", icon: Handshake },
          { title: "Deliver results", copy: "Create case studies and strong client outcomes.", icon: PackageCheck },
          { title: "Scale consistently", copy: "Build toward a ₹1 crore consulting business.", icon: ChartNoAxesCombined }
        ]} />
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div className="x-panel">
            <XTitle align="left"><XAccent>This webinar is for you if...</XAccent></XTitle>
            <ul className="x-checks">{webinarFor.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
          </div>
          <div className="x-panel">
            <XTitle align="left"><span className="text-red-500">Not for you if...</span></XTitle>
            <ul className="x-checks is-negative">{notFor.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul>
          </div>
        </div>
      </XSection>

      <XSection>
        <XTitle>What makes this webinar different</XTitle>
        <XGrid columns={5} items={[
          { title: "Proven framework", copy: "Not theory.", icon: BrainCircuit },
          { title: "100% practical", copy: "Actionable strategies you can apply.", icon: Presentation },
          { title: "Real case studies", copy: "Verified client stories can be added.", icon: BadgeCheck },
          { title: "Live Q&A", copy: "Get your questions answered live.", icon: MessageCircleMore },
          { title: "AI-powered edge", copy: "Use AI to save time and scale faster.", icon: Bot }
        ]} />
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div className="x-panel">
            <XTitle align="left">The <XAccent>DCL Framework</XAccent></XTitle>
            <XSteps compact items={[
              { title: "Positioning", icon: Crosshair },
              { title: "Attraction", icon: Magnet },
              { title: "Offer", icon: BadgeDollarSign },
              { title: "Sales", icon: Handshake },
              { title: "Freedom", icon: ChartNoAxesCombined }
            ]} />
          </div>
          <div className="x-panel flex items-center">
            <div><h3>DCL = <XAccent>Direction. Clarity. Leverage.</XAccent></h3><p>A step-by-step system built to help consultants create profitable and purposeful businesses.</p></div>
          </div>
        </div>
      </XSection>

      <XSection>
        <div className="x-panel x-split-grid items-center">
          <h3 className="!text-4xl">AI is not the business.<br />Your wisdom is the business.<br />AI is the <XAccent>accelerator.</XAccent></h3>
          <XGrid columns={4} items={[
            { title: "Research faster", icon: ScanSearch },
            { title: "Automate content", icon: Bot },
            { title: "Deliver value", icon: Sparkles },
            { title: "Scale leverage", icon: ChartNoAxesCombined }
          ]} />
        </div>
      </XSection>

      <XSection>
        <XStats items={[
          { value: "15,000+", label: "Professionals impacted", icon: UsersRound },
          { value: "500+", label: "Workshops conducted", icon: CalendarDays },
          { value: "₹100Cr+", label: "Client revenue impact", icon: BadgeIndianRupee },
          { value: "10+", label: "Years of experience", icon: Clock3 },
          { value: "4.9/5", label: "Average attendee rating", icon: Sparkles }
        ]} />
      </XSection>

      <XSection>
        <XTitle align="left">Loved by consultants & entrepreneurs</XTitle>
        <div className="x-media-grid" style={{ "--x-media-cols": 4 } as CSSProperties}>
          {["/images/editorial/testimonial-leadership.png", "/images/editorial/testimonial-finance.png", "/images/editorial/testimonial-career.png", "/images/stock/workshop-community.png"].map((image, index) => (
            <XMediaCard key={image} image={image} title={["Clarity that changed everything", "Practical and powerful", "The DCL framework works", "A system I can follow"][index]} copy="Illustrative preview · verified testimonial to be added" video />
          ))}
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Frequently asked questions</XTitle>
        <XFaq items={faqs.slice(0, 6)} />
      </XSection>

      <XSection><XCta title="Reserve your seat now!" /></XSection>
    </>
  );
}
