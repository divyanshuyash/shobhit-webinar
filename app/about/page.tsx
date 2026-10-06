import Image from "next/image";
import {
  BadgeIndianRupee,
  BookOpenCheck,
  BriefcaseBusiness,
  Gem,
  Globe2,
  HandHeart,
  Landmark,
  Lightbulb,
  Medal,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
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
  XTitle
} from "@/components/ExactBlocks";

export default function AboutPage() {
  return (
    <>
      <XHero
        image="/images/generated/about-hero-v2.png"
        eyebrow="The founder story"
        title={<>From survival<br /><XAccent>to strategy</XAccent></>}
        copy="The story of Shobhit Singhal and how he built The Transformers Hub to help professionals become Modern Chanakyas."
        imagePosition="54% 12%"
        className="x-hero-about"
      ><XHeroActions video={false} /></XHero>

      <XSection>
        <div className="x-split-grid items-center">
          <figure className="about-shobhit-photo">
            <Image src="/images/founder/about-shobhit.jpg" alt="Shobhit Singhal speaking at a Transformers Hub event" width={1200} height={932} priority />
          </figure>
          <div>
            <XTitle align="left">About <XAccent>Shobhit</XAccent></XTitle>
            <p className="text-xs leading-6 text-offwhite/75">I did not start with a strategy. I started with struggle. From financial setbacks to career uncertainty, I studied people, markets and systems, learned from mistakes and built digital businesses from scratch.</p>
            <p className="mt-3 text-xs leading-6 text-offwhite/75">Today, I help ambitious professionals escape average cycles and build high-ticket consulting businesses that create time freedom, financial freedom and real impact.</p>
            <div className="mt-4"><XGrid columns={5} items={[
              { title: "Strategist", icon: Target },
              { title: "Problem solver", icon: ShieldCheck },
              { title: "Mentor", icon: HandHeart },
              { title: "Builder", icon: Landmark },
              { title: "Lifelong learner", icon: BookOpenCheck }
            ]} /></div>
          </div>
        </div>
      </XSection>

      <XSection>
        <XTitle>My journey: <XAccent>from struggle to impact</XAccent></XTitle>
        <XGrid columns={5} items={[
          { eyebrow: "2013-2016", title: "The struggle years", copy: "Financial challenges, job insecurity and a lack of direction created the search for meaning.", icon: Lightbulb },
          { eyebrow: "2016-2018", title: "Turning point", copy: "Investment in skills, marketing and mindset built the first digital business.", icon: Sparkles },
          { eyebrow: "2018-2021", title: "Building & scaling", copy: "Online businesses, high-ticket consulting and systems began to take shape.", icon: TrendingUp },
          { eyebrow: "2021-2023", title: "Mentoring begins", copy: "One-to-one mentoring and live workshops helped professionals build consulting businesses.", icon: HandHeart },
          { eyebrow: "2023 onwards", title: "Building the ecosystem", copy: "The Transformers Hub became the home for the Modern Chanakya method.", icon: Globe2 }
        ]} />
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <article className="x-story-panel">
            <Image src="/images/founder/MUK00449.jpg" alt="Transformers Hub community celebrating together" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectPosition: "center 48%" }} />
            <div className="x-story-shade" />
            <div><XTitle align="left">Why I built <XAccent>The Transformers Hub</XAccent></XTitle><p>I saw talented professionals trapped in jobs they did not love. They had skills but no strategy, worked hard but did not build wealth or freedom.</p><p>The Hub exists to help experts transform their skills into high-ticket consulting businesses and become the authority in their niche.</p></div>
          </article>
          <article className="x-story-panel">
            <Image src="/images/founder/MUK08210.jpg" alt="Shobhit Singhal celebrating with the Transformers Hub community" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectPosition: "46% 46%" }} />
            <div className="x-story-shade" />
            <div><XTitle align="left">Mission: creating <XAccent>Crorepati Chanakyas</XAccent></XTitle><ul className="x-checks"><li><span>✓</span>Elevate professionals into world-class consultants.</li><li><span>✓</span>Build businesses with impact, freedom and legacy.</li><li><span>✓</span>Create a new India of thinkers, strategists and problem solvers.</li></ul></div>
          </article>
        </div>
      </XSection>

      <XSection>
        <XTitle>Authority & <XAccent>proof</XAccent></XTitle>
        <XStats items={[
          { value: "FOUNDER", label: "The Transformers Hub", icon: Landmark },
          { value: "DCL", label: "Digital business consultant", icon: BriefcaseBusiness },
          { value: "1000+", label: "One-to-one conversations", icon: UsersRound },
          { value: "150+", label: "Live webinars & workshops", icon: Medal },
          { value: "15,000+", label: "Professionals impacted", icon: Globe2 },
          { value: "₹10Cr+", label: "Client pipeline generated", icon: BadgeIndianRupee }
        ]} />
      </XSection>

      <XSection>
        <XTitle>The modern Chanakya <XAccent>philosophy</XAccent></XTitle>
        <XGrid columns={5} items={[
          { title: "Strategy over hustle", copy: "Work with clarity, not chaos.", icon: Target },
          { title: "Leverage over labor", copy: "Build systems that work for you.", icon: TrendingUp },
          { title: "Value over price", copy: "Position as the solution, not an option.", icon: Gem },
          { title: "Impact over income", copy: "Create work that changes lives.", icon: HandHeart },
          { title: "Freedom over everything", copy: "Design the business around life.", icon: Scale }
        ]} />
      </XSection>

      <XSection>
        <XTitle>A glimpse of <XAccent>the journey</XAccent></XTitle>
        <div className="x-media-grid" style={{ "--x-media-cols": 5 } as CSSProperties}>
          {[
            { image: "/images/founder/MUK08438.jpg", title: "Live teaching", imagePosition: "center 36%" },
            { image: "/images/founder/MUK09044.jpg", title: "Community learning", imagePosition: "center 46%" },
            { image: "/images/founder/MUK08772.jpg", title: "Strategy session", imagePosition: "center 28%" },
            { image: "/images/founder/MUK00277.jpg", title: "Shared learning", imagePosition: "center 48%" },
            { image: "/images/founder/MUK07929.jpg", title: "Community celebration", imagePosition: "center 46%" }
          ].map(({ image, title, imagePosition }) => (
            <XMediaCard key={image} image={image} title={title} imagePosition={imagePosition} />
          ))}
        </div>
      </XSection>

      <XSection><XCta /></XSection>
    </>
  );
}
