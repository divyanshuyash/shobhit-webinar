import {
  Bot,
  BriefcaseBusiness,
  Camera,
  Clapperboard,
  Download,
  FileText,
  Mail,
  PlayCircle,
  Rocket
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
  XStats,
  XSteps,
  XTitle
} from "@/components/ExactBlocks";

export default function FreeContentPage() {
  return (
    <>
      <XHero
        image="/images/generated/content-hero.png"
        eyebrow="Learn. Apply. Grow."
        title={<>Learn from my<br /><XAccent>free content</XAccent></>}
        copy="Actionable strategies on consulting, AI, sales, organic leads and business growth."
      ><XHeroActions video={false} /></XHero>

      <XSection>
        <XGrid columns={4} items={[
          { title: "YouTube", copy: "In-depth videos on business models, strategy and AI.", icon: Clapperboard, footer: "Watch on YouTube" },
          { title: "Instagram", copy: "Daily tips, reels and insights on growth and sales.", icon: Camera, footer: "Follow on Instagram" },
          { title: "LinkedIn", copy: "Thought leadership, case studies and professional insight.", icon: BriefcaseBusiness, footer: "Follow on LinkedIn" },
          { title: "Blogs", copy: "In-depth articles, frameworks and business guides.", icon: FileText, footer: "Read blogs" }
        ]} />
      </XSection>

      <XSection>
        <XTitle align="left">Featured videos</XTitle>
        <div className="x-media-grid" style={{ "--x-media-cols": 4 } as CSSProperties}>
          <XMediaCard image="/images/founder/founder-webinar.png" title="Consulting business model explained" video label="12:45" />
          <XMediaCard image="/images/generated/webinar-hero.png" title="AI tools consultants must use" video label="14:32" />
          <XMediaCard image="/images/generated/home-hero.png" title="How to get high-ticket clients" video label="11:08" />
          <XMediaCard image="/images/generated/content-hero.png" title="Build systems, not just processes" video label="10:21" />
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Short-form content</XTitle>
        <div className="x-short-grid">
          {["One offer that sells itself", "Stop doing free consultations", "The consultant's weekly checklist", "3 ways to find premium clients", "Automate this. Save 10+ hours", "Pricing is not the problem", "Perfect your process", "How I run my consulting business"].map((title, index) => (
            <article key={title}><img src={["/images/generated/blogs-hero.png", "/images/generated/webinar-hero.png", "/images/generated/home-hero.png", "/images/generated/content-hero.png"][index % 4]} alt="" /><span>{title}</span><small>▶ {8.3 + index}K</small></article>
          ))}
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Free resources</XTitle>
        <XGrid columns={6} items={[
          { title: "Consulting business blueprint", copy: "Step-by-step guide to build your business.", icon: FileText, footer: "Download now" },
          { title: "High-ticket offer framework", copy: "Create offers premium clients understand.", icon: FileText, footer: "Download now" },
          { title: "Lead generation checklist", copy: "Organic strategies to attract quality leads.", icon: FileText, footer: "Download now" },
          { title: "Discovery call script", copy: "A structured script for better calls.", icon: FileText, footer: "Download now" },
          { title: "Business growth roadmap", copy: "A practical sequence for growth.", icon: FileText, footer: "Download now" },
          { title: "AI toolkit for consultants", copy: "Tools and prompts to save time.", icon: Bot, footer: "Download now" }
        ]} />
      </XSection>

      <XSection>
        <XTitle align="left">Start here</XTitle>
        <div className="x-panel">
          <XSteps items={[
            { title: "Watch this first", copy: "Start with the core business model.", icon: PlayCircle },
            { title: "Grab the blueprint", copy: "Download the free consulting roadmap.", icon: Download },
            { title: "Join the community", copy: "Follow the daily implementation journey.", icon: Rocket }
          ]} />
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Join <XAccent>15,000+</XAccent> growth-minded founders & consultants</XTitle>
        <div className="x-split-grid">
          <XStats items={[
            { value: "15,000+", label: "YouTube subscribers", icon: Clapperboard },
            { value: "28,000+", label: "Instagram followers", icon: Camera },
            { value: "25,000+", label: "LinkedIn followers", icon: BriefcaseBusiness },
            { value: "10,000+", label: "Email community", icon: Mail }
          ]} />
          <div className="x-media-grid"><XMediaCard image="/images/stock/workshop-community.png" title="Community" /><XMediaCard image="/images/generated/webinar-hero.png" title="Live learning" /></div>
        </div>
      </XSection>

      <XSection><XCta /></XSection>
    </>
  );
}
