import { GoldSubmitButton } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import {
  ActionCard,
  GoldCTA,
  IconCardGrid,
  ReferenceTitle,
  StatStrip
} from "@/components/ReferenceBlocks";
import { WebinarCard } from "@/components/WebinarCard";

const contactFaqs = [
  {
    q: "How can I join the free webinar?",
    a: "Click any Join Free Webinar button and reserve your seat for the upcoming weekend session."
  },
  {
    q: "Do you offer corporate training or consulting?",
    a: "Yes, partnership and corporate inquiry details can be shared through the contact form."
  },
  {
    q: "How soon will I get a response?",
    a: "Serious inquiries are usually reviewed within 24 business hours."
  },
  {
    q: "Can I invite Shobhit Singhal for an event?",
    a: "Use the Speaking Invitations option and include the event details."
  }
];

const impactStats = [
  { value: "150+", label: "Countries" },
  { value: "15,000+", label: "Professionals Impacted" },
  { value: "500+", label: "Webinars Conducted" },
  { value: "₹100Cr+", label: "Results Generated" }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's Build Your Modern Chanakya Journey"
        copy="Whether you are a professional, an expert or an aspiring consultant, connect with us to build, scale and lead with clarity and impact."
        primary="Join The Free Weekend Webinar"
        imageLabel="Contact strategy visual"
      />

      <section className="py-10">
        <Container>
          <ReferenceTitle title="How Can We" accent="Help You?" />
          <div className="grid gap-4 md:grid-cols-4">
            {["Webinar Support", "Partnerships & Business Inquiries", "Speaking Invitations", "General Contact"].map((title) => (
              <ActionCard key={title} title={title} body="Choose the path that best matches your question so the message lands with the right context." action="Drop Message" href="#contact-form" />
            ))}
          </div>
        </Container>
      </section>

      <section id="contact-form" className="ref-section py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="premium-panel rounded-sm p-6 md:p-8">
              <ReferenceTitle title="Send Us A" accent="Message" align="left" />
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-offwhite">
                    Full Name*
                    <input className="rounded-sm border border-gold/20 bg-black px-4 py-3 text-sm outline-none focus:border-gold" name="name" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-offwhite">
                    Email Address*
                    <input className="rounded-sm border border-gold/20 bg-black px-4 py-3 text-sm outline-none focus:border-gold" name="email" type="email" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-offwhite">
                    Phone / WhatsApp
                    <input className="rounded-sm border border-gold/20 bg-black px-4 py-3 text-sm outline-none focus:border-gold" name="phone" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-offwhite">
                    Inquiry Type*
                    <select className="rounded-sm border border-gold/20 bg-black px-4 py-3 text-sm outline-none focus:border-gold" name="type" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option>Webinar Support</option>
                      <option>Partnerships & Business Inquiries</option>
                      <option>Speaking Invitations</option>
                      <option>General Contact</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-bold text-offwhite">
                  How can we help you?*
                  <textarea className="min-h-36 rounded-sm border border-gold/20 bg-black px-4 py-3 text-sm outline-none focus:border-gold" name="message" />
                </label>
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input className="mt-1" type="checkbox" name="consent" />
                  <span>I agree to receive updates and relevant information from Shobhit Singhal.</span>
                </label>
                <GoldSubmitButton>Send Message</GoldSubmitButton>
              </form>
            </div>

            <div className="space-y-5">
              <WebinarCard cta="Reserve Your Seat Now" />
              <StatStrip stats={impactStats.slice(1)} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="Connect With" accent="Us" />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["YouTube", "Subscribe"],
              ["Instagram", "Follow"],
              ["LinkedIn", "Connect"],
              ["Email Us", "Send Email"]
            ].map(([title, action]) => (
              <ActionCard key={title} title={title} body="Follow the strategy ecosystem for consulting, AI and business growth insights." action={action} href="#" />
            ))}
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Frequently Asked" accent="Questions" />
          <FAQ items={contactFaqs} />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="premium-panel rounded-sm p-6">
              <ReferenceTitle title="Our Community," accent="Our Impact" align="left" />
              <p className="text-sm leading-7 text-muted">
                A global community of professionals, experts and aspiring consultants building freedom-first businesses and creating meaningful impact.
              </p>
              <div className="mt-6">
                <StatStrip stats={impactStats} />
              </div>
            </div>
            <ImagePlaceholder label="Community reach map visual" assetPath="/images/stock/community-map.jpg" className="min-h-[330px]" />
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <GoldCTA title="Ready To Transform Your Consulting Journey?" button="Join The Free Webinar Now" />
        </Container>
      </section>
    </>
  );
}
