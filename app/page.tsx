import Image, { getImageProps } from "next/image";
import {
  BadgeDollarSign,
  BadgeIndianRupee,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  Clock3,
  ContactRound,
  Crosshair,
  Crown,
  Handshake,
  Landmark,
  Magnet,
  Megaphone,
  Newspaper,
  PackageCheck,
  Play,
  Presentation,
  ScanSearch,
  Target,
  UserRoundSearch,
  UsersRound,
  Workflow
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Reveal } from "@/components/ExactMotion";
import {
  XAccent,
  XButton,
  XCta,
  XFaq,
  XGrid,
  XSection,
  XTestimonial,
  XTitle,
  XWrap
} from "@/components/ExactBlocks";
import { faqs } from "@/data/site";

const problems = [
  { title: "No clear niche", copy: "You know a lot, but the market cannot see the one problem you solve.", icon: Crosshair },
  { title: "No premium offer", copy: "Your experience has not yet been packaged into a valuable transformation.", icon: BadgeDollarSign },
  { title: "No consulting structure", copy: "Delivery depends on effort instead of a repeatable client system.", icon: Workflow },
  { title: "No lead system", copy: "Visibility is inconsistent and conversations arrive unpredictably.", icon: UserRoundSearch },
  { title: "No personal brand", copy: "Your expertise is real, but your authority is not visible yet.", icon: ContactRound },
  { title: "No AI execution system", copy: "Too much time goes into work that better systems can accelerate.", icon: BrainCircuit }
];

const occupations = [
  { title: "Corporate professionals", copy: "Turn years of experience into a focused advisory business.", image: "/images/editorial/testimonial-finance.png", icon: Building2 },
  { title: "Sales leaders", copy: "Convert commercial instinct into a premium consulting method.", image: "/images/editorial/occupation-sales.png", icon: ChartNoAxesCombined },
  { title: "Teachers & trainers", copy: "Package your teaching ability into a clear transformation.", image: "/images/editorial/testimonial-leadership.png", icon: Presentation },
  { title: "Finance experts", copy: "Build an authority-led offer around your analytical expertise.", image: "/images/editorial/occupation-finance.png", icon: Landmark },
  { title: "Marketing professionals", copy: "Move from execution work to high-value strategic guidance.", image: "/images/editorial/testimonial-career.png", icon: Megaphone },
  { title: "Experienced professionals", copy: "Use your lived insight to create impact, income and freedom.", image: "/images/founder/founder-desk.png", icon: BriefcaseBusiness }
];

const consultingEquation = [
  { title: "Specific problem", copy: "Choose one valuable result.", icon: Crosshair },
  { title: "Proven solution", copy: "Turn your method into a path.", icon: PackageCheck },
  { title: "Premium positioning", copy: "Make the value easy to see.", icon: BadgeDollarSign },
  { title: "High-ticket fees", copy: "Charge for transformation.", icon: BadgeIndianRupee }
];

const learnItems = [
  { title: "Profitable niche", copy: "Choose a specific market problem that people value.", icon: Crosshair },
  { title: "High-ticket offer", copy: "Package your knowledge into a premium transformation.", icon: BadgeDollarSign },
  { title: "DCL framework", copy: "Use a five-part path from clarity to scale.", icon: Workflow },
  { title: "Quality leads", copy: "Create consistent conversations without random outreach.", icon: Magnet },
  { title: "AI for delivery", copy: "Research, create and serve clients with greater leverage.", icon: BrainCircuit },
  { title: "₹1 crore roadmap", copy: "See the stages from foundation to consulting freedom.", icon: ChartNoAxesCombined }
];

const fitItems = [
  "You have expertise but do not know how to monetize it.",
  "You want to begin consulting alongside your current job.",
  "You want a focused business that is not tied to one location.",
  "You are ready to build a premium offer around real value.",
  "You want a proven sequence, not another list of random tactics."
];

const metrics = [
  { value: "15,000+", label: "Professionals impacted", icon: UsersRound },
  { value: "500+", label: "Webinars conducted", icon: CalendarDays },
  { value: "₹100Cr+", label: "Client business impact", icon: BadgeIndianRupee },
  { value: "10+", label: "Years of experience", icon: Clock3 }
];

const reviewLayouts = [
  "The framework gave me a clearer way to think about my niche and premium offer.",
  "I finally understood how my existing experience could become a consulting business.",
  "The sequence from clarity to leads made the whole journey feel practical.",
  "The biggest shift was moving from scattered ideas to one focused transformation.",
  "The session connected positioning, sales and delivery in a way I could act on.",
  "I left with a roadmap instead of another folder full of disconnected tactics."
];

const dclSteps = [
  { title: "Drishti", copy: "Clarity", icon: ScanSearch },
  { title: "Niche", copy: "Problem", icon: Crosshair },
  { title: "Offer", copy: "Solution", icon: BadgeDollarSign },
  { title: "Sabha", copy: "Audience", icon: UsersRound },
  { title: "Astra", copy: "Systems & AI", icon: BrainCircuit }
];

const croreSteps = [
  { title: "Foundation", copy: "0–30 days", icon: Target },
  { title: "Validation", copy: "31–60 days", icon: Handshake },
  { title: "Traction", copy: "61–90 days", icon: Magnet },
  { title: "Scaling", copy: "90–180 days", icon: Workflow },
  { title: "Freedom", copy: "180+ days", icon: Crown }
];

export default function HomePage() {
  const heroAlt = "Shobhit Singhal and Chanakya in an elegant strategy library";
  const { props: { srcSet: desktopHeroSrcSet, ...desktopHeroProps } } = getImageProps({
    src: "/images/generated/home-hero-v2.png",
    alt: heroAlt,
    width: 1922,
    height: 818,
    quality: 95,
    sizes: "100vw",
    fetchPriority: "high"
  });
  const { props: { srcSet: mobileHeroSrcSet } } = getImageProps({
    src: "/images/generated/home-hero-mobile-v2.png",
    alt: heroAlt,
    width: 941,
    height: 1672,
    quality: 95,
    sizes: "100vw"
  });

  return (
    <>
      <section className="home-hero">
        <picture className="home-hero-picture">
          <source media="(max-width: 760px)" srcSet={mobileHeroSrcSet} sizes="100vw" />
          <img {...desktopHeroProps} srcSet={desktopHeroSrcSet} className="home-hero-image" />
        </picture>
        <div className="home-hero-shade" />
        <XWrap className="home-hero-content">
          <Reveal>
            <div className="home-hero-copy">
              <span className="home-hero-spark" aria-hidden="true" />
              <h1>Become a Modern <XAccent>Chanakya</XAccent></h1>
              <strong>Build a premium, freedom-first business with a clear niche, a valuable offer, consistent leads and AI-powered leverage.</strong>
              <div className="home-hero-actions">
                <XButton>Reserve my free seat</XButton>
                <XButton quiet href="#intro-video">Watch 3-minute introduction</XButton>
              </div>
            </div>
          </Reveal>
        </XWrap>
      </section>

      <XSection className="home-intro-section">
        <article id="intro-video" className="home-intro-card">
          <div className="home-intro-media">
            <Image src="/images/founder/founder-webinar.png" alt="Shobhit introducing the webinar" fill sizes="(max-width: 760px) 100vw, 44vw" />
            <button type="button" aria-label="Play the webinar introduction"><Play size={25} fill="currentColor" /></button>
            <span>03:18</span>
          </div>
          <div className="home-intro-copy">
            <p>Start here · 3 minute orientation</p>
            <h2>Watch this before you <XAccent>join the webinar</XAccent></h2>
            <span>See what the Digital Consultant Launchpad is, who it is designed for, and the exact clarity you should expect to leave with.</span>
            <div className="home-intro-points"><b>01 · The opportunity</b><b>02 · The framework</b><b>03 · Your next step</b></div>
            <XButton quiet href="#learn">Play introduction</XButton>
          </div>
        </article>
      </XSection>

      <XSection>
        <div className="home-section-heading">
          <XTitle>Sound familiar? <XAccent>You&apos;re not alone.</XAccent></XTitle>
          <p>Most consulting businesses do not have an effort problem. They have a clarity-and-system problem.</p>
        </div>
        <div className="home-problem-grid">
          {problems.map(({ title, copy, icon: Icon }, index) => (
            <article key={title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span className="home-problem-icon"><Icon size={27} strokeWidth={1.55} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <i />
            </article>
          ))}
        </div>
        <div className="home-problem-answer"><span>Six symptoms. One missing operating system.</span><b>The solution is clarity, structure and leverage.</b></div>
      </XSection>

      <XSection className="is-alt">
        <XTitle>Who is a <XAccent>modern Chanakya?</XAccent></XTitle>
        <div className="home-occupation-grid">
          {occupations.map(({ title, copy, image, icon: Icon }) => (
            <article key={title}>
              <div className="home-occupation-image"><Image src={image} alt={`Illustrative ${title.toLowerCase()} portrait`} fill sizes="(max-width: 760px) 72vw, 17vw" /></div>
              <div><span><Icon size={16} /> Modern Chanakya path</span><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </XSection>

      <XSection>
        <div className="home-equation">
          <div className="home-equation-heading"><p>The consulting equation</p><h2>Consulting is <XAccent>not complicated.</XAccent></h2><span>Four balanced parts turn expertise into a premium business.</span></div>
          <div className="home-equation-steps">
            {consultingEquation.map(({ title, copy, icon: Icon }, index) => (
              <article key={title}><small>0{index + 1}</small><span><Icon size={28} strokeWidth={1.45} /></span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <strong>Specific value, delivered through a clear system—that&apos;s the Modern Chanakya way.</strong>
        </div>
      </XSection>

      <XSection className="is-alt" >
        <div id="learn" className="home-nowrap-title"><XTitle>What you will learn in this <XAccent>free webinar</XAccent></XTitle></div>
        <div className="home-learn-grid"><XGrid columns={6} numbered items={learnItems} /></div>
      </XSection>

      <XSection className="home-fit-section">
        <article className="home-fit-banner">
          <Image src="/images/editorial/framework-architecture.png" alt="Dark gold-lit strategic architecture" fill sizes="100vw" />
          <div className="home-fit-shade" />
          <div className="home-fit-top"><div><p>Not for everyone · built for builders</p><h2>Your experience is valuable.<br /><XAccent>Now give it direction.</XAccent></h2></div><span>This room is for professionals ready to turn expertise into a focused, premium consulting business.</span></div>
          <div className="home-fit-list">{fitItems.map((item, index) => <span key={item}><i>0{index + 1}</i><b><Check size={13} /></b><em>{item}</em></span>)}</div>
          <div className="home-fit-footer"><strong>If three or more signals sound like you, you are in the right room.</strong><span>Real experience is the raw material. The webinar gives it clarity, structure and leverage.</span></div>
        </article>
      </XSection>

      <XSection>
        <div className="home-proof-grid">
          <article className="home-proof-story">
            <Image src="/images/generated/about-hero.png" alt="Shobhit Singhal seated in a strategy library" fill sizes="(max-width: 760px) 100vw, 34vw" />
            <div />
            <span><small>Founder journey</small><b>From survival to strategy</b><p>A consulting philosophy shaped through experience, experimentation and systems.</p></span>
          </article>
          <div className="home-proof-metrics">
            {metrics.map(({ value, label, icon: Icon }) => <article key={label}><Icon size={27} strokeWidth={1.45} /><strong>{value}</strong><span>{label}</span></article>)}
          </div>
        </div>
      </XSection>

      <XSection className="is-alt">
        <div className="home-community-layout">
          <div className="home-community-intro"><p>Community proof</p><h2>What our <XAccent>community says</XAccent></h2><span>Six balanced story cards fill the section now. Replace the sample layout copy with verified client words before publishing.</span></div>
          <div className="home-review-wall">
            {reviewLayouts.map((quote, index) => (
              <XTestimonial key={quote} quote={quote} role="Sample layout · verified review required" image={["/images/editorial/testimonial-leadership.png", "/images/editorial/testimonial-finance.png", "/images/editorial/testimonial-career.png"][index % 3]} />
            ))}
          </div>
        </div>
      </XSection>

      <XSection>
        <div className="home-system-heading"><p>One operating system · two connected journeys</p><h2>From first clarity to <XAccent>crore-scale consulting</XAccent></h2></div>
        <div className="home-dual-roadmaps">
          <RoadmapBoard eyebrow="The 5 pillars" title="The DCL Framework" steps={dclSteps} />
          <RoadmapBoard eyebrow="The growth path" title="The ₹1 Crore Consultant Roadmap" steps={croreSteps} />
        </div>
      </XSection>

      <section className="home-ai-parallax">
        <div className="home-ai-shade" />
        <XWrap className="home-ai-content">
          <div><p>Leverage without losing your wisdom</p><h2>AI is not the business.<br />Your wisdom is the business.<br />AI is the <XAccent>accelerator.</XAccent></h2><span>Use AI to research faster, create better, deliver deeper insight and build systems without burning out.</span></div>
          <div className="home-ai-signals">
            <span><ScanSearch size={20} /><b>Research</b><small>Find insight faster</small></span>
            <span><BrainCircuit size={20} /><b>Create</b><small>Turn ideas into assets</small></span>
            <span><PackageCheck size={20} /><b>Deliver</b><small>Serve clients deeply</small></span>
            <span><Workflow size={20} /><b>Scale</b><small>Build repeatable leverage</small></span>
          </div>
        </XWrap>
      </section>

      <XSection>
        <XTitle align="left">Learn. Apply. <XAccent>Grow. Repeat.</XAccent></XTitle>
        <div className="x-platform-grid"><XGrid columns={4} items={[
          { title: "YouTube", copy: "In-depth strategy and consulting videos.", icon: FaYoutube },
          { title: "Instagram", copy: "Daily ideas, reels and behind the scenes.", icon: FaInstagram },
          { title: "LinkedIn", copy: "Professional insights and thought leadership.", icon: FaLinkedinIn },
          { title: "Blogs", copy: "Detailed articles and practical frameworks.", icon: Newspaper }
        ]} /></div>
      </XSection>

      <XSection className="is-alt"><XCta /></XSection>

      <XSection>
        <XTitle align="left">Frequently asked <XAccent>questions</XAccent></XTitle>
        <XFaq items={faqs.slice(0, 6)} />
      </XSection>

      <XSection className="home-final-section">
        <article className="home-final-cta">
          <div className="home-final-person"><Image src="/images/founder/hero-founder.png" alt="Shobhit Singhal" fill sizes="220px" /></div>
          <div><p>Ready when you are</p><h2>Stop overthinking. <XAccent>Start building.</XAccent></h2><span>Join professionals who are turning hard-earned experience into focused, high-value consulting businesses.</span></div>
          <XButton>Join the free webinar now</XButton>
        </article>
      </XSection>
    </>
  );
}

function RoadmapBoard({ eyebrow, title, steps }: { eyebrow: string; title: string; steps: typeof dclSteps }) {
  return (
    <article className="home-roadmap-board">
      <header><span>{eyebrow}</span><h3>{title}</h3></header>
      <div>
        {steps.map(({ title: stepTitle, copy, icon: Icon }, index) => (
          <span key={stepTitle}><i>0{index + 1}</i><b><Icon size={19} strokeWidth={1.5} /></b><strong>{stepTitle}</strong><small>{copy}</small></span>
        ))}
      </div>
    </article>
  );
}
