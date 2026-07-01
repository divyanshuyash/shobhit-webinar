import { CheckList } from "@/components/Cards";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { FrameworkSteps } from "@/components/FrameworkSteps";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import {
  GoldCTA,
  IconCardGrid,
  MediaTile,
  ProcessRail,
  ReferenceTitle,
  StatStrip
} from "@/components/ReferenceBlocks";
import { WebinarCard } from "@/components/WebinarCard";
import { aiBenefits, faqs, notFor, webinarFor, webinarOutcomes } from "@/data/site";

const webinarStats = [
  { value: "15,000+", label: "Professionals Impacted" },
  { value: "500+", label: "Workshops Conducted" },
  { value: "₹100Cr+", label: "Client Revenue Impact" },
  { value: "4.9/5", label: "Average Rating" }
];

export default function WebinarPage() {
  return (
    <>
      <PageHero
        eyebrow="Join The Free Weekend Webinar"
        title="Digital Consultant Launchpad"
        subtitle="The Crorepati Consultant Blueprint"
        copy="Build a high-ticket consulting business using your knowledge, experience and AI."
        primary="Register For Free Now"
        imageLabel="Webinar founder portrait"
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {["Every Saturday & Sunday", "11:00 AM (IST)", "Live Online"].map((item) => (
            <div key={item} className="rounded-sm border border-gold/25 bg-black/50 px-4 py-3 text-sm font-bold text-offwhite">
              {item}
            </div>
          ))}
        </div>
      </PageHero>

      <section className="-mt-7 pb-10">
        <Container>
          <WebinarCard cta="Register For Free Now" />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="What You Will" accent="Learn" />
          <IconCardGrid
            items={webinarOutcomes.map((title, index) => ({
              eyebrow: `0${index + 1}`,
              title,
              body: "One practical piece of the consulting launchpad."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-6"
          />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="premium-panel rounded-sm p-6">
              <ReferenceTitle title="This Webinar Is For" accent="You If..." align="left" />
              <CheckList items={webinarFor.slice(0, 6)} />
              <ImagePlaceholder label="Webinar doorway visual" className="mt-6 min-h-52" />
            </div>
            <div className="premium-panel rounded-sm p-6">
              <ReferenceTitle title="Not For You" accent="If..." align="left" />
              <CheckList items={notFor} tone="danger" />
              <div className="mt-6 flex min-h-52 items-center justify-center rounded-full border border-red-500/25 bg-red-950/10 text-8xl font-black text-red-500/35">
                X
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="What Makes This Webinar" accent="Different" />
          <IconCardGrid
            items={["Proven Framework", "100% Practical", "Real Case Studies", "Live Q&A", "AI-Powered Edge"].map((title) => ({
              title,
              body: "Built for serious professionals who want clarity and implementation."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-5"
            compact
          />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <ReferenceTitle title="The DCL" accent="Framework" align="left" />
              <FrameworkSteps compact />
            </div>
            <div className="premium-panel rounded-sm p-6">
              <ReferenceTitle title="DCL =" accent="Direction. Clarity. Leverage." align="left" />
              <p className="text-sm leading-7 text-muted">
                A step-by-step system that helps professionals build profitable, purposeful consulting businesses.
              </p>
              <ProcessRail items={["Position", "Offer", "Audience", "Sales", "Freedom"]} />
            </div>
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <div className="premium-panel rounded-sm p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <h2 className="font-display text-4xl uppercase leading-none tracking-wide text-offwhite md:text-6xl">
                AI Is Not The Business. Your Wisdom Is The Business. AI Is The <span className="gold-gradient-text">Accelerator.</span>
              </h2>
              <IconCardGrid
                items={aiBenefits.slice(0, 5).map((title) => ({ title }))}
                columns="sm:grid-cols-2 lg:grid-cols-5"
                compact
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <StatStrip stats={webinarStats} />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Loved By Consultants &" accent="Entrepreneurs" />
          <div className="grid gap-4 md:grid-cols-4">
            {["Rahul Mehta", "Priya Sharma", "Ankit Agarwal", "Neha Arora"].map((name, index) => (
              <MediaTile key={name} title={name} subtitle="Webinar transformation story." assetPath={`/images/testimonials/video-${index + 1}.jpg`} video />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Frequently Asked" accent="Questions" />
          <FAQ items={faqs.slice(0, 6)} />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <GoldCTA title="Reserve Your Seat Now!" copy="Limited seats every weekend. Next webinar starts this Saturday and Sunday." button="Register For Free Now" />
        </Container>
      </section>
    </>
  );
}
