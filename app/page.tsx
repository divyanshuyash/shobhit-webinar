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
  PackageCheck,
  Presentation,
  ScanSearch,
  Target,
  UserRoundSearch,
  UsersRound,
  Workflow
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Reveal } from "@/components/ExactMotion";
import { HomeIntroVideo } from "@/components/HomeIntroVideo";
import {
  XAccent,
  XButton,
  XCta,
  XFaq,
  XGrid,
  XSection,
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
  { title: "Corporate professionals", copy: "Turn years of experience into a focused advisory business.", image: "/images/modern-chanakya/MUK08418.jpg", imagePosition: "62% center", icon: Building2 },
  { title: "Sales leaders", copy: "Convert commercial instinct into a premium consulting method.", image: "/images/modern-chanakya/MUK08781.jpg", imagePosition: "52% center", icon: ChartNoAxesCombined },
  { title: "Teachers & trainers", copy: "Package your teaching ability into a clear transformation.", image: "/images/modern-chanakya/MUK09238.jpg", imagePosition: "68% center", icon: Presentation },
  { title: "Finance experts", copy: "Build an authority-led offer around your analytical expertise.", image: "/images/modern-chanakya/MUK09379.jpg", imagePosition: "52% center", icon: Landmark },
  { title: "Marketing professionals", copy: "Move from execution work to high-value strategic guidance.", image: "/images/modern-chanakya/MUK09813.jpg", imagePosition: "38% center", icon: Megaphone },
  { title: "Experienced professionals", copy: "Use your lived insight to create impact, income and freedom.", image: "/images/modern-chanakya/MUK09927.jpg", imagePosition: "48% center", icon: BriefcaseBusiness }
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

const reviews = [
  { quote: "Happy to share that my second high-ticket client of ₹50,000 got confirmed today. I just received the token amount. Shobhit’s suggestion about speaking to the client’s husband worked for me.", name: "Dr. Archanaa Dongre" },
  { quote: "Happy and thrilled to share that I have signed a client for ₹6.5 lakh, which includes personal coaching, business consulting, and team training. I received ₹50,000 today, and the remaining amount will come from July. I am grateful for all the learnings and a special thanks to Shobhit Singhal for being available for guidance. He sat with me at 11 PM to finalize my proposal and give valuable inputs.", name: "Umesh Sharda" },
  { quote: "Small win, big mindset shift. I just closed a ₹40K client deal. The client was already warm, but the real win was something else. Earlier, I used to pitch around ₹15K and often added extra services for free because I felt uncomfortable charging separately. With Shobhit’s guidance, I confidently quoted an additional ₹25K for a five-month service instead of giving it away for free. This may sound like a small win, but for me, it is a big mindset shift. Learning to charge for the value I create has given me a new level of confidence.", name: "Shivangani Gupta" },
  { quote: "New perspectives and lots of learning. My takeaway was that content should appeal to the customer through relevance, identity, usefulness, emotion, novelty, and connection. Overall, it was an awesome session.", name: "Rajesh S" },
  { quote: "Great session. The biggest takeaway is that action needs to be taken.", name: "Agnes D’Costa" },
  { quote: "What a loss that the session was not recorded. It would have been great to go back to it as a reference.", name: "Udita Shah" }
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
                <XButton quiet href="#intro-video">Watch introduction</XButton>
              </div>
            </div>
          </Reveal>
        </XWrap>
      </section>

      <XSection className="home-intro-section">
        <article id="intro-video" className="home-intro-card">
          <div className="home-intro-copy">
            <p>Digital Consultant Launchpad</p>
            <h2>Start with the <XAccent>introduction.</XAccent></h2>
            <span>A short message from Shobhit on the opportunity, the framework, and what you will learn in the free webinar.</span>
          </div>
          <div className="home-intro-media">
            <HomeIntroVideo />
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
          {occupations.map(({ title, copy, image, imagePosition, icon: Icon }) => (
            <article key={title}>
              <div className="home-occupation-image"><Image src={image} alt={`${title} at a Modern Chanakya event`} fill sizes="(max-width: 760px) 72vw, 17vw" style={{ objectPosition: imagePosition }} /></div>
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
            <Image src="/images/founder/MUK08971.jpg" alt="Shobhit Singhal speaking at a Modern Chanakya event" fill sizes="(max-width: 760px) 100vw, 34vw" style={{ objectPosition: "54% 32%" }} />
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
          <div className="home-community-intro"><p>Community proof</p><h2>What our <XAccent>community says</XAccent></h2><span>Real outcomes and reflections from the Transformers Hub community.</span></div>
          <div className="home-review-wall">
            {reviews.map(({ quote, name }) => (
              <article className="home-review-card" key={name}>
                <span aria-hidden="true">“</span>
                <blockquote>{quote}</blockquote>
                <footer><strong>{name}</strong><small>Transformers Hub Community</small></footer>
              </article>
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
        <div className="x-platform-grid"><XGrid columns={3} items={[
          { title: "YouTube", copy: "In-depth strategy and consulting videos.", icon: FaYoutube, href: "https://www.youtube.com/@shobhitsinghal93" },
          { title: "Instagram", copy: "Daily ideas, reels and behind the scenes.", icon: FaInstagram, href: "https://www.instagram.com/shobhitransformer/" },
          { title: "LinkedIn", copy: "Professional insights and thought leadership.", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/shobhitsinghal93/" }
        ]} /></div>
      </XSection>

      <XSection className="is-alt"><XCta /></XSection>

      <XSection>
        <XTitle align="left">Frequently asked <XAccent>questions</XAccent></XTitle>
        <XFaq items={faqs.slice(0, 6)} />
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
