import { CheckList } from "@/components/Cards";
import { Container } from "@/components/Container";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import {
  GoldCTA,
  IconCardGrid,
  MediaTile,
  MiniTestimonials,
  ReferenceTitle,
  SplitVisualFeature,
  StatStrip
} from "@/components/ReferenceBlocks";
import { journey, philosophy, proofCards } from "@/data/site";

const authorityStats = [
  { value: "1000+", label: "One-To-One Conversations" },
  { value: "150+", label: "Live Webinars & Workshops" },
  { value: "15,000+", label: "Professionals Impacted" },
  { value: "₹10Cr+", label: "High-Ticket Pipeline" }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Shobhit"
        title="From Survival To Strategy"
        subtitle="The story of Shobhit Singhal and The Transformers Hub."
        copy="The journey from struggle to building a strategy-led ecosystem for professionals who want to become Modern Chanakyas."
        imageLabel="Founder seated strategy portrait"
      />

      <section className="py-10">
        <Container>
          <SplitVisualFeature
            title="About"
            accent="Shobhit"
            imageLabel="Founder journey visual"
            copy="I did not start with a strategy. I started with struggle. From financial setbacks to career uncertainty, the turning point was learning to solve real problems with clarity, positioning and systems."
            bullets={["Studied people, markets and problems deeply.", "Built consulting businesses from scratch.", "Now helps professionals create time freedom, financial freedom and real impact."]}
          />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="My Journey:" accent="From Struggle To Impact" />
          <IconCardGrid
            items={journey.map((item, index) => ({
              eyebrow: `${2013 + index * 2}`,
              title: item,
              body: "A milestone in the shift from pressure and confusion to strategy, systems and consulting impact."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-5"
          />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <SplitVisualFeature
              title="Why I Built"
              accent="The Transformers Hub"
              imageLabel="Founder speaking visual"
              copy="I saw talented professionals trapped in jobs they did not love. They had skills but no strategy, worked hard but did not build wealth or freedom."
            />
            <div className="premium-panel rounded-sm p-6">
              <ReferenceTitle title="Mission: Creating" accent="Crorepati Chanakyas" align="left" />
              <CheckList
                items={[
                  "Elevate 10,00,000+ professionals into world-class consultants.",
                  "Help them build premium consulting businesses with impact and freedom.",
                  "Create a new India of thinkers, strategists and problem solvers."
                ]}
              />
              <ImagePlaceholder label="Mission chess strategy visual" className="mt-6 min-h-52" />
            </div>
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Authority &" accent="Proof" />
          <IconCardGrid
            items={proofCards.map((proof) => ({
              title: proof.title,
              body: proof.body
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-6"
            compact
          />
          <div className="mt-5">
            <StatStrip stats={authorityStats} />
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="The Modern Chanakya" accent="Philosophy" />
          <IconCardGrid
            items={philosophy.map((title) => ({
              title,
              body: "A principle for building with clarity, leverage, value and freedom."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-5"
          />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="A Glimpse Of The" accent="Journey" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {["Speaking", "Training", "Community", "Workshop", "Consulting", "Event"].map((item, index) => (
              <MediaTile key={item} title={item} assetPath={`/images/stock/gallery-${index + 1}.jpg`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="What People" accent="Say" />
          <MiniTestimonials
            items={[
              "Shobhit changed the way I think about business. His strategies are practical and life-changing.",
              "I went from confused to closing my first high-ticket client in 45 days.",
              "His frameworks are simple, direct and extremely powerful."
            ]}
          />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <GoldCTA title="Your First Step Starts This Weekend." button="Reserve Your Seat Now" />
        </Container>
      </section>
    </>
  );
}
