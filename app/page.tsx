import {
  BadgeIndianRupee,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  Crown,
  Gem,
  GraduationCap,
  Handshake,
  Landmark,
  Megaphone,
  MessageCircleMore,
  PlayCircle,
  ScanSearch,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  WandSparkles
} from "lucide-react";
import {
  XAccent,
  XButton,
  XCta,
  XFaq,
  XGrid,
  XHero,
  XHeroActions,
  XMediaCard,
  XSchedule,
  XSection,
  XStats,
  XSteps,
  XTestimonial,
  XTitle
} from "@/components/ExactBlocks";
import { faqs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <XHero
        mode="three"
        image="/images/founder/hero-founder.png"
        eyebrow="Strategy. Systems. Scale."
        title={<>Become a modern <XAccent>Chanakya</XAccent></>}
        copy="Build a high-ticket consulting business using your knowledge, experience & AI."
        aside={<XSchedule />}
      >
        <ul className="x-checks mt-4 max-w-xl">
          <li><span>✓</span>You don't need lakhs of followers.</li>
          <li><span>✓</span>You don't need to quit your job.</li>
          <li><span>✓</span>You need one clear problem, one powerful offer and one practical lead system.</li>
        </ul>
        <XHeroActions />
      </XHero>

      <XSection className="!py-3" >
        <div id="intro-video" className="x-split-grid mx-auto max-w-4xl items-center">
          <XMediaCard image="/images/founder/founder-webinar.png" title="Watch this before you join the webinar" video />
          <div className="x-panel border-0 bg-transparent">
            <h3>Watch this before you<br />join the webinar</h3>
            <p>A short introduction to the Digital Consultant Launchpad and the consulting journey it is built for.</p>
            <XButton quiet>Play introduction</XButton>
          </div>
        </div>
      </XSection>

      <XSection>
        <XTitle>Sound familiar? <XAccent>You're not alone.</XAccent></XTitle>
        <XGrid columns={6} items={[
          { title: "No clear niche", copy: "Confused about what problem to solve and who to serve.", icon: Target },
          { title: "No premium offer", copy: "Your knowledge is not packaged into a clear offer.", icon: Gem },
          { title: "No consulting structure", copy: "No repeatable way to deliver results.", icon: Settings2 },
          { title: "No lead system", copy: "Struggling to create consistent conversations.", icon: UsersRound },
          { title: "No personal brand", copy: "Low visibility and weak market positioning.", icon: Megaphone },
          { title: "No AI execution system", copy: "Not using AI to work faster and better.", icon: Bot }
        ]} />
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div>
            <XTitle align="left">Who is a <XAccent>modern Chanakya?</XAccent></XTitle>
            <XGrid columns={3} items={[
              { title: "Corporate professionals", icon: BriefcaseBusiness },
              { title: "Sales leaders", icon: TrendingUp },
              { title: "Teachers & trainers", icon: GraduationCap },
              { title: "Finance experts", icon: Landmark },
              { title: "Marketing professionals", icon: Megaphone },
              { title: "Experienced professionals", icon: Crown }
            ]} />
          </div>
          <div className="x-panel">
            <XTitle>Consulting is <XAccent>not complicated.</XAccent></XTitle>
            <XSteps compact items={[
              { title: "Specific problem", icon: Target },
              { title: "Proven solution", icon: Sparkles },
              { title: "Premium positioning", icon: Gem },
              { title: "High-ticket fees", icon: CircleDollarSign }
            ]} />
            <p className="mt-5 text-center">Solve a specific problem for a specific audience and charge for the value you deliver.</p>
          </div>
        </div>
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div>
            <XTitle>What you will learn in this <XAccent>free webinar</XAccent></XTitle>
            <XGrid columns={3} numbered items={[
              { title: "Profitable niche", icon: Target },
              { title: "High-ticket offer", icon: Gem },
              { title: "DCL framework", icon: Settings2 },
              { title: "Quality leads", icon: UsersRound },
              { title: "AI for delivery", icon: Bot },
              { title: "₹1 crore roadmap", icon: TrendingUp }
            ]} />
          </div>
          <div className="x-panel">
            <XTitle>This webinar is for you if...</XTitle>
            <ul className="x-checks">
              {["You have expertise but do not know how to monetize it.", "You want to start consulting alongside your job.", "You want a location-independent business.", "You are serious about a premium offer.", "You want a practical roadmap."].map((item) => <li key={item}><span>✓</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </XSection>

      <XSection>
        <div className="x-split-grid items-stretch">
          <XMediaCard image="/images/generated/about-hero.png" title="From survival to strategy" copy="The founder journey behind the Modern Chanakya method." />
          <div className="flex items-center">
            <XStats items={[
              { value: "15,000+", label: "Professionals impacted", icon: UsersRound },
              { value: "500+", label: "Webinars conducted", icon: CalendarDays },
              { value: "₹100Cr+", label: "Client business impact", icon: BadgeIndianRupee },
              { value: "10+", label: "Years of experience", icon: Clock3 }
            ]} />
          </div>
        </div>
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div>
            <XTitle align="left">What our <XAccent>community says</XAccent></XTitle>
            <div className="x-testimonial-grid">
              <XTestimonial />
              <XTestimonial />
              <XTestimonial />
            </div>
          </div>
          <XMediaCard image="/images/founder/founder-webinar.png" title="Video testimonial" copy="Verified client video to be added" video />
        </div>
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div>
            <XTitle>The <XAccent>DCL Framework</XAccent></XTitle>
            <XSteps compact items={[
              { title: "Drishti", copy: "Clarity", icon: ScanSearch },
              { title: "Niche", copy: "Problem", icon: Target },
              { title: "Offer", copy: "Solution", icon: Gem },
              { title: "Sabha", copy: "Audience", icon: UsersRound },
              { title: "Astra", copy: "Systems & AI", icon: WandSparkles }
            ]} />
          </div>
          <div>
            <XTitle>The ₹1 crore consultant <XAccent>roadmap</XAccent></XTitle>
            <XSteps compact items={[
              { title: "Foundation", copy: "0-30 days", icon: Target },
              { title: "Validation", copy: "31-60 days", icon: Handshake },
              { title: "Traction", copy: "61-90 days", icon: TrendingUp },
              { title: "Scaling", copy: "90-180 days", icon: Settings2 },
              { title: "Freedom", copy: "180+ days", icon: Crown }
            ]} />
          </div>
        </div>
      </XSection>

      <XSection>
        <div className="x-panel x-split-grid items-center">
          <h3 className="!text-4xl">AI is not the business.<br />Your wisdom is the business.<br />AI is the <XAccent>accelerator.</XAccent></h3>
          <p className="!text-xs">Use AI to research faster, create better, deliver deeper insights and scale without burning out.</p>
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Learn. Apply. <XAccent>Grow. Repeat.</XAccent></XTitle>
        <XGrid columns={4} items={[
          { title: "YouTube", copy: "In-depth strategy and consulting videos.", icon: PlayCircle },
          { title: "Instagram", copy: "Daily ideas, reels and behind the scenes.", icon: Sparkles },
          { title: "LinkedIn", copy: "Professional insights and thought leadership.", icon: BriefcaseBusiness },
          { title: "Blogs", copy: "Detailed articles and frameworks.", icon: MessageCircleMore }
        ]} />
      </XSection>

      <XSection><XCta /></XSection>

      <XSection>
        <XTitle align="left">Frequently asked <XAccent>questions</XAccent></XTitle>
        <XFaq items={faqs.slice(0, 6)} />
      </XSection>

      <XSection className="!py-4">
        <div className="x-panel flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div><h3>Stop overthinking. <XAccent>Start building.</XAccent></h3><p className="!mb-0">Your transformation starts this weekend.</p></div>
          <XButton>Join the free webinar now</XButton>
        </div>
      </XSection>
    </>
  );
}
