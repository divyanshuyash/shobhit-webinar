import { Container } from "@/components/Container";
import { FrameworkSteps } from "@/components/FrameworkSteps";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import {
  GoldCTA,
  IconCardGrid,
  MediaTile,
  ProcessRail,
  ReferenceTitle,
  RoadmapLane
} from "@/components/ReferenceBlocks";
import { dclSteps, roadmap } from "@/data/site";

export default function FrameworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature system"
        title="The DCL Framework"
        subtitle="How We Convert Your Experience Into A Consulting Business"
        copy="Drishti. Niche. Offer. Sabha. Astra. A practical framework for turning clarity into a premium consulting model."
        primary="Attend The Free Live Webinar"
        imageLabel="DCL framework visual"
      />

      <section className="py-10">
        <Container>
          <ReferenceTitle title="The 5 Pillars Of The DCL" accent="Framework" />
          <FrameworkSteps />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <div className="premium-panel rounded-sm p-8 text-center md:p-12">
            <p className="font-display text-4xl uppercase leading-none tracking-wide text-offwhite md:text-6xl">
              Ancient <span className="gold-gradient-text">Strategy.</span> Modern Business. AI-Powered <span className="gold-gradient-text">Execution.</span>
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-muted">Timeless wisdom gives the strategy. Modern systems give the structure. AI gives speed.</p>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="The Journey: From Clarity To" accent="Consulting Scale" />
          <ProcessRail items={["Clarity", "Focus", "Offer", "Audience", "Trust", "Results", "Scale"].slice(0, 5)} result="Scale with systems, AI and leverage." />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="₹1 Crore Consultant" accent="Roadmap" />
          <RoadmapLane items={roadmap} />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Why This" accent="Works" />
          <IconCardGrid
            items={["Timeless Principles", "Modern Systems", "AI-Powered Execution", "Results That Compound"].map((title) => ({
              title,
              body: "A core reason the framework turns scattered expertise into structured consulting growth."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-4"
          />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Transformation In" accent="Action" />
          <div className="grid gap-4 md:grid-cols-3">
            {dclSteps.slice(0, 3).map((step, index) => (
              <MediaTile
                key={step.name}
                title={`${step.name} Transformation`}
                subtitle="From scattered experience to a sharper consulting direction and premium path."
                assetPath={`/images/stock/case-study-${index + 1}.jpg`}
              />
            ))}
          </div>
          <ImagePlaceholder label="Case study strategy dashboard" assetPath="/images/stock/case-study.jpg" className="mt-5 min-h-[300px]" />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <GoldCTA title="Attend The Free Live Webinar" copy="Learn the exact 5-step framework to build your consulting business and attract high-ticket clients." button="Reserve Your Seat Now" />
        </Container>
      </section>
    </>
  );
}
