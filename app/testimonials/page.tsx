import { Container } from "@/components/Container";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import {
  GoldCTA,
  IconCardGrid,
  MediaTile,
  MiniTestimonials,
  ReferenceTitle,
  StatStrip
} from "@/components/ReferenceBlocks";

const clientCards = [
  { title: "Ankita Sharma", body: "From scattered focus to a clear niche and stronger client positioning." },
  { title: "Rohit Mehta", body: "Built confidence around premium pricing and a sharper offer." },
  { title: "Neha Kapoor", body: "Moved from low confidence to a real consulting roadmap." },
  { title: "Vivek Sinha", body: "Created a lead and sales system instead of random effort." },
  { title: "Priya Iyer", body: "Positioned her expertise into a clearer transformation offer." }
];

const proofStats = [
  { value: "15,000+", label: "Clients & Community Members" },
  { value: "₹250Cr+", label: "Client Revenue Generated" },
  { value: "500+", label: "High-Ticket Offers Launched" },
  { value: "99%", label: "Client Satisfaction Rate" }
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof. Purpose. Impact."
        title="Real People. Real Clarity. Real Transformations."
        copy="From niche clarity to high-ticket offers, from confidence breakthroughs to consulting growth. See how clients build purpose-driven businesses."
        primary="Join The Free Weekend Webinar"
        imageLabel="Transformation stories visual"
      />

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Featured" accent="Video Testimonials" />
          <div className="grid gap-4 md:grid-cols-3">
            {["Confusion To 10L Offers", "Niche Clarity That Changed Everything", "Built Confidence And A 6-Figure Business"].map((title, index) => (
              <MediaTile key={title} title={title} subtitle="Client transformation interview." assetPath={`/images/testimonials/video-${index + 1}.jpg`} video />
            ))}
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Client" accent="Testimonials" />
          <IconCardGrid items={clientCards} columns="sm:grid-cols-2 lg:grid-cols-5" />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Success Stories By" accent="Category" />
          <IconCardGrid
            items={["Niche Clarity Results", "High-Ticket Offer Results", "Sales Results", "Confidence Results", "Community Results"].map((title) => ({
              title,
              body: "A measurable shift in clarity, confidence, positioning or sales execution."
            }))}
            columns="sm:grid-cols-2 lg:grid-cols-5"
          />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Love From Clients On" accent="WhatsApp" />
          <MiniTestimonials
            items={[
              "Just closed my first high-ticket client. The framework finally made sense.",
              "My confidence has skyrocketed. I am showing up like never before.",
              "Best investment I have made in myself and my business."
            ]}
          />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Proof In" accent="Numbers" />
          <StatStrip stats={proofStats} />
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Before - After" accent="Case Studies" />
          <div className="grid gap-4 md:grid-cols-3">
            {["Ankita Sharma", "Rohit Mehta", "Neha Kapoor"].map((name, index) => (
              <MediaTile
                key={name}
                title={name}
                subtitle="Before: unclear path. After: sharper niche, offer and roadmap."
                assetPath={`/images/testimonials/case-${index + 1}.jpg`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <ReferenceTitle title="Payment" accent="Proofs" align="left" />
              <IconCardGrid
                items={["₹3,00,000 Received", "₹2,50,000 Received", "₹1,75,000 Received", "₹2,00,000 Received"].map((title) => ({
                  title,
                  body: "Real payment proof placeholder ready for verified screenshots."
                }))}
                columns="sm:grid-cols-2"
                compact
              />
            </div>
            <div>
              <ReferenceTitle title="Client Wins &" accent="Recognition" align="left" />
              <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <ImagePlaceholder key={item} label={`Recognition gallery ${item}`} className="min-h-52" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <GoldCTA title="See How They Did It. Now It's Your Turn." button="Reserve Your Seat Now" />
        </Container>
      </section>
    </>
  );
}
