import { GoldButton } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import {
  ActionCard,
  GoldCTA,
  IconCardGrid,
  MediaTile,
  ProcessRail,
  ReferenceTitle,
  StatStrip
} from "@/components/ReferenceBlocks";
import { contentPlatforms } from "@/data/site";

const communityStats = [
  { value: "15,000+", label: "YouTube Subscribers" },
  { value: "28,000+", label: "Instagram Followers" },
  { value: "25,000+", label: "LinkedIn Followers" },
  { value: "10,000+", label: "Email Community" }
];

export default function FreeContentPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn. Apply. Grow."
        title="Learn From My Free Content"
        copy="Actionable strategies on consulting, AI, sales, organic leads and business growth to help you build a modern, profitable business."
        primary="Join The Free Weekend Webinar"
        imageLabel="Free content studio"
      />

      <section className="py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {contentPlatforms.map((platform) => (
              <ActionCard key={platform.platform} title={platform.platform} body={platform.body} action={platform.cta} href={platform.platform === "Blogs" ? "/blogs" : "#"} />
            ))}
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Featured" accent="Videos" align="left" />
          <div className="grid gap-4 md:grid-cols-4">
            {["Consulting Business Model Explained", "AI Tools Consultants Must Use", "How To Get High-Ticket Clients", "Build Systems Not Just Processes"].map((title, index) => (
              <MediaTile key={title} title={title} subtitle="Handpicked video to help you grow faster." assetPath={`/images/stock/video-${index + 1}.jpg`} video />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Short-Form" accent="Content" align="left" />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {["One Offer That Sells", "Stop Doing Free Consultations", "Weekly Checklist", "Find Premium Clients", "Automate This", "Value Is The Problem", "Run My Consulting Business"].map((title, index) => (
              <MediaTile key={title} title={title} assetPath={`/images/stock/reel-${index + 1}.jpg`} video />
            ))}
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Free" accent="Resources" align="left" />
          <IconCardGrid
            items={["Consulting Business Blueprint", "High-Ticket Offer Framework", "Lead Generation Checklist", "Discovery Call Script", "Business Growth Roadmap", "AI Toolkit For Consultants"].map((title) => ({
              title,
              body: "Downloadable framework placeholder for the resource library."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-6"
            compact
          />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Start" accent="Here" align="left" />
          <ProcessRail items={["Watch This First", "Grab The Blueprint", "Join The Community", "Attend Webinar", "Build Your Roadmap"]} result="Learn, implement and grow with a clear path." />
          <div className="mt-5 text-center">
            <GoldButton>Download Blueprint</GoldButton>
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Join 15,000+ Growth-Minded" accent="Founders & Consultants" />
          <StatStrip stats={communityStats} />
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Community meetup", "Workshop group", "Consulting ecosystem"].map((title, index) => (
              <MediaTile key={title} title={title} assetPath={`/images/stock/community-${index + 1}.jpg`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <GoldCTA title="Your First Step Starts This Weekend." button="Reserve Your Seat Now" />
        </Container>
      </section>
    </>
  );
}
