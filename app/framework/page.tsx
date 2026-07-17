import Image from "next/image";
import {
  BadgeIndianRupee,
  Bot,
  BrainCircuit,
  Compass,
  Eye,
  Gem,
  Gift,
  Handshake,
  Infinity,
  Magnet,
  Rocket,
  Settings2,
  Target,
  TrendingUp,
  UsersRound
} from "lucide-react";
import {
  XAccent,
  XCta,
  XGrid,
  XSection,
  XSteps,
  XTestimonial,
  XTitle,
  XWrap
} from "@/components/ExactBlocks";
import { dclSteps, roadmap } from "@/data/site";

const pillarIcons = [Eye, Target, Gift, UsersRound, Rocket];
const journey = [
  { title: "Clarity", copy: "Know who you are and why you are here.", icon: BrainCircuit },
  { title: "Focus", copy: "Choose your niche and ideal client.", icon: Target },
  { title: "Offer", copy: "Create a high-value offer.", icon: Gift },
  { title: "Audience", copy: "Attract the right people.", icon: Magnet },
  { title: "Trust", copy: "Build trust and demonstrate value.", icon: Handshake },
  { title: "Results", copy: "Deliver transformation.", icon: TrendingUp },
  { title: "Scale", copy: "Scale with systems and AI.", icon: Rocket }
];
const roadmapIcons = [Compass, Gift, Gem, UsersRound, Handshake, Target, Bot, BadgeIndianRupee];

export default function FrameworkPage() {
  return (
    <>
      <section className="x-framework-hero">
        <Image src="/images/generated/contact-hero.png" alt="" fill preload sizes="100vw" />
        <div className="x-framework-shade" />
        <XWrap>
          <h1>The <XAccent>DCL</XAccent> Framework</h1>
          <p>How we convert your experience into a consulting business</p>
          <XSteps items={dclSteps.map((step, index) => ({ title: step.name, copy: step.title, icon: pillarIcons[index] }))} />
        </XWrap>
      </section>

      <XSection>
        <XTitle>The <XAccent>5 pillars</XAccent> of the DCL framework</XTitle>
        <XGrid columns={5} numbered items={dclSteps.map((step, index) => ({
          title: step.name,
          eyebrow: step.title,
          copy: step.body,
          footer: ["Absolute clarity & purpose", "Laser-sharp positioning", "A high-value offer", "A loyal audience", "Scalable consulting systems"][index],
          icon: pillarIcons[index]
        }))} />
      </XSection>

      <XSection>
        <div className="x-panel flex flex-col items-center gap-3 py-7 text-center md:flex-row md:justify-center">
          <Infinity size={58} className="text-gold" />
          <div><h3 className="!text-3xl">Ancient <XAccent>strategy.</XAccent> Modern <XAccent>business.</XAccent> AI-powered <XAccent>execution.</XAccent></h3><p className="!mb-0">Timeless wisdom gives the strategy. Modern systems give the structure. AI gives the speed.</p></div>
        </div>
      </XSection>

      <XSection>
        <XTitle>The journey: <XAccent>from clarity to consulting scale</XAccent></XTitle>
        <XSteps items={journey} />
      </XSection>

      <XSection>
        <div className="x-panel">
          <XTitle><XAccent>₹1 crore consultant roadmap</XAccent></XTitle>
          <XGrid columns={8} numbered items={roadmap.map((title, index) => ({
            title,
            copy: ["Find your purpose and strengths.", "Create and validate your first offer.", "Package a premium transformation.", "Build content that attracts leads.", "Lead high-converting sales calls.", "Deliver exceptional client results.", "Systemize and scale with AI.", "Build freedom, impact and income."][index],
            icon: roadmapIcons[index]
          }))} />
        </div>
      </XSection>

      <XSection>
        <XTitle>Why this works</XTitle>
        <XGrid columns={4} items={[
          { title: "Timeless principles", copy: "Rooted in wisdom that has stood the test of time.", icon: Infinity },
          { title: "Modern systems", copy: "Built with proven frameworks and processes.", icon: Settings2 },
          { title: "AI-powered execution", copy: "Use tools and automation to work faster.", icon: Bot },
          { title: "Results that compound", copy: "Each pillar strengthens the next.", icon: TrendingUp }
        ]} />
      </XSection>

      <XSection>
        <XTitle>Transformation in action</XTitle>
        <div className="x-testimonial-grid"><XTestimonial /><XTestimonial /><XTestimonial /></div>
      </XSection>

      <XSection><XCta title="Attend the free live webinar" copy="Learn the exact five-step framework to build your consulting business." /></XSection>
    </>
  );
}
