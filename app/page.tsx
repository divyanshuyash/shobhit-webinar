import { GoldButton, OutlineButton } from "@/components/Buttons";
import { CheckList } from "@/components/Cards";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { FrameworkSteps } from "@/components/FrameworkSteps";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  ActionCard,
  GoldCTA,
  IconCardGrid,
  MediaTile,
  MiniTestimonials,
  ProcessRail,
  ReferenceTitle,
  RoadmapLane,
  SplitVisualFeature,
  StatStrip
} from "@/components/ReferenceBlocks";
import { WebinarCard } from "@/components/WebinarCard";
import {
  aiBenefits,
  blogs,
  contentPlatforms,
  faqs,
  modernChanakyas,
  problems,
  roadmap,
  webinarFor,
  webinarOutcomes
} from "@/data/site";

const proofStats = [
  { value: "15,000+", label: "Professionals Impacted" },
  { value: "500+", label: "Webinars Conducted" },
  { value: "₹100Cr+", label: "Client Business Impact" },
  { value: "10+", label: "Years Of Strategy" }
];

const formula = ["Specific Problem", "Proven Solution", "Premium Positioning", "High-Ticket Fees"];

export default function HomePage() {
  return (
    <>
      <section className="ref-hero relative isolate overflow-hidden border-b border-gold/15 py-10 md:py-14">
        <Container className="relative z-10">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.92fr_0.62fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-gold">Strategy. Systems. Scale.</p>
              <h1 className="heading-balance font-display text-5xl uppercase leading-[0.9] tracking-wide text-offwhite text-glow md:text-7xl">
                Become A Modern <span className="gold-gradient-text">Chanakya</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-black leading-tight text-offwhite md:text-xl">
                Build a high-ticket consulting business using your knowledge, experience and AI.
              </p>
              <div className="mt-6">
                <CheckList
                  items={[
                    "You do not need lakhs of followers.",
                    "You do not need to quit your job.",
                    "You need one clear problem, one powerful offer, and one practical lead system."
                  ]}
                />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <GoldButton>Join The Free Weekend Webinar</GoldButton>
                <OutlineButton href="#intro-video">Watch Introduction Video</OutlineButton>
              </div>
            </div>

            <div className="relative min-h-[430px]">
              <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" />
              <ImagePlaceholder label="Founder strategy portrait" assetPath="/images/founder/hero-founder.jpg" className="h-full min-h-[430px]" />
            </div>

            <WebinarCard cta="Register Now" />
          </div>
        </Container>
      </section>

      <section id="intro-video" className="border-b border-gold/15 py-8">
        <Container>
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <ImagePlaceholder label="Introduction video preview" assetPath="/images/stock/introduction-video.jpg" className="min-h-[230px]" />
            <div>
              <ReferenceTitle
                title="Watch This Before You Join"
                accent="The Webinar"
                copy="A short orientation to help you understand who this webinar is for and how it can change your consulting journey."
                align="left"
              />
              <GoldButton>Join The Free Weekend Webinar</GoldButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <ReferenceTitle title="Sound Familiar?" accent="You Are Not Alone." />
          <IconCardGrid
            items={problems.map((title) => ({
              title,
              body: "A common block that keeps expertise from becoming a profitable consulting business."
            }))}
            compact
          />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <ReferenceTitle title="Who Is A Modern" accent="Chanakya?" align="left" />
              <IconCardGrid
                items={modernChanakyas.map((item) => ({
                  title: item.split(" ").slice(0, 2).join(" "),
                  body: item
                }))}
                columns="sm:grid-cols-2"
                compact
              />
            </div>
            <div>
              <ReferenceTitle title="Consulting Is" accent="Not Complicated." align="left" />
              <ProcessRail items={formula} result="Consulting is getting paid to solve a specific valuable problem." />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="What You Will Learn In This" accent="Free Webinar" />
          <IconCardGrid
            items={webinarOutcomes.map((title, index) => ({
              eyebrow: `0${index + 1}`,
              title,
              body: "A practical step from the Digital Consultant Launchpad."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-6"
          />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <SplitVisualFeature
            eyebrow="Founder story"
            title="From Survival To"
            accent="Strategy"
            imageLabel="Founder story visual"
            copy="Shobhit started with confusion, rejection and pressure. The shift came from solving real problems through strategy, systems and premium positioning."
            bullets={["I did not start with millions.", "I learned to think like a Chanakya.", "I built systems around clarity, offers and conversations."]}
          >
            <StatStrip stats={proofStats} />
          </SplitVisualFeature>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="What Our" accent="Community Says" />
          <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <MiniTestimonials
              items={[
                "Shobhit's framework helped me package my offer and close my first real consulting deal.",
                "The DCL framework gave me direction. I stopped guessing and started building.",
                "From confusion to clarity. The webinar gave me the exact roadmap."
              ]}
            />
            <MediaTile title="Video Testimonial" subtitle="Watch how consultants build profitable consulting businesses." assetPath="/images/testimonials/video-1.jpg" video />
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-2">
            <div>
              <ReferenceTitle title="The DCL" accent="Framework" align="left" />
              <FrameworkSteps compact />
            </div>
            <div>
              <ReferenceTitle title="The ₹1 Crore Consultant" accent="Roadmap" align="left" />
              <RoadmapLane items={roadmap} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="premium-panel rounded-sm p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <h2 className="font-display text-4xl uppercase leading-none tracking-wide text-offwhite md:text-6xl">
                AI Is Not The Business. Your Wisdom Is The Business. AI Is The <span className="gold-gradient-text">Accelerator.</span>
              </h2>
              <IconCardGrid
                items={aiBenefits.slice(0, 6).map((title) => ({ title, body: "Use AI to research faster, create better and deliver deeper." }))}
                columns="sm:grid-cols-2 lg:grid-cols-3"
                compact
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Learn. Apply." accent="Grow. Repeat." copy="Free content to help you on your consulting journey." />
          <div className="grid gap-4 md:grid-cols-4">
            {contentPlatforms.map((platform) => (
              <ActionCard key={platform.platform} title={platform.platform} body={platform.body} action={platform.cta} href={platform.platform === "Blogs" ? "/blogs" : "#"} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Read The Latest" accent="Strategy Notes" />
          <div className="grid gap-4 md:grid-cols-4">
            {blogs.slice(0, 4).map((blog, index) => (
              <MediaTile key={blog} title={blog} subtitle="Business, consulting, mindset and Modern Chanakya thinking." assetPath={`/images/blog/blog-${index + 1}.jpg`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <GoldCTA
            title="Your First Step Starts This Weekend."
            copy="Live training. Q&A session. Actionable frameworks. Lifetime access to replay."
            button="Reserve Your Seat Now"
          />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Frequently Asked" accent="Questions" />
          <FAQ items={faqs.slice(0, 6)} />
        </Container>
      </section>

      <section className="border-t border-gold/15 py-10">
        <Container>
          <div className="premium-panel rounded-sm p-8 text-center md:p-10">
            <ReferenceTitle
              title="Stop Overthinking."
              accent="Start Building."
              copy="Join professionals who are becoming high-income consultants with clarity, positioning, systems and AI."
            />
            <GoldButton>Join The Free Webinar Now</GoldButton>
          </div>
        </Container>
      </section>
    </>
  );
}
