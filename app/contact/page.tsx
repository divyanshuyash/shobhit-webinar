import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Camera,
  Clapperboard,
  Globe2,
  Handshake,
  Headphones,
  BriefcaseBusiness,
  Mail,
  MapPin,
  MessageSquareText,
  Mic2,
  UsersRound,
  Video
} from "lucide-react";
import {
  XAccent,
  XButton,
  XCta,
  XFaq,
  XGrid,
  XHero,
  XSection,
  XStats,
  XTitle
} from "@/components/ExactBlocks";
import { brand } from "@/data/constants";

const helpOptions = [
  {
    title: "Webinar Support",
    copy: "Registration, access, replay, or attendance support for the live weekend session.",
    icon: Headphones,
    footer: "Get support"
  },
  {
    title: "Partnerships & Business Inquiries",
    copy: "Collaborations, affiliates, corporate learning, and strategic partnership conversations.",
    icon: Handshake,
    footer: "Partner with us"
  },
  {
    title: "Speaking Invitations",
    copy: "Invite Shobhit for a keynote, workshop, panel, or leadership session.",
    icon: Mic2,
    footer: "Send invitation"
  },
  {
    title: "General Contact",
    copy: "Have a question or want to say hello? Send a direct note to the team.",
    icon: Mail,
    footer: "Drop a message"
  }
];

const socialChannels = [
  { title: "YouTube", copy: "Webinars, consulting insights, and long-form strategy sessions.", icon: Clapperboard, footer: "Watch now" },
  { title: "Instagram", copy: "Short ideas, practical prompts, and behind-the-scenes updates.", icon: Camera, footer: "Follow" },
  { title: "LinkedIn", copy: "Professional insights, articles, and business conversations.", icon: BriefcaseBusiness, footer: "Connect" },
  { title: "Email Us", copy: brand.email, icon: Mail, footer: "Send email" }
];

const contactFaqs = [
  {
    q: "How can I join the free webinar?",
    a: "Use any Join Free Webinar button. The registration destination is ready to be connected when the final link is supplied."
  },
  {
    q: "Can I invite Shobhit Singhal for an event?",
    a: "Yes. Select Speaking Invitations in the form and include the event date, audience, format, and location."
  },
  {
    q: "Do you offer corporate training or consulting?",
    a: "Corporate and partnership inquiries can be shared through the form for a relevant follow-up."
  },
  {
    q: "Is there a cost to connect?",
    a: "There is no cost to submit a genuine inquiry or request webinar support."
  }
];

export default function ContactPage() {
  return (
    <>
      <XHero
        eyebrow="Get in touch"
        title={<>Let&apos;s Build Your <XAccent>Modern Chanakya</XAccent> Journey</>}
        copy="Whether you are a professional, an expert, or an aspiring consultant, we are here to help you build, scale, and lead with clarity."
        image="/images/generated/contact-hero.png"
        imagePosition="center 20%"
      >
        <div className="x-contact-promises">
          <span><Clock3 size={15} /> Quick, personal response</span>
          <span><MessageSquareText size={15} /> Real conversations</span>
          <span><CheckCircle2 size={15} /> Committed to your growth</span>
        </div>
      </XHero>

      <XSection>
        <XTitle>How Can We <XAccent>Help You?</XAccent></XTitle>
        <XGrid items={helpOptions} columns={4} />
      </XSection>

      <XSection className="is-alt">
        <div className="x-contact-main">
          <article className="x-panel">
            <XTitle align="left">Send Us <XAccent>A Message</XAccent></XTitle>
            <form className="x-form-grid">
              <label>
                Full Name*
                <input className="x-input" name="name" placeholder="Your full name" />
              </label>
              <label>
                Email Address*
                <input className="x-input" name="email" type="email" placeholder="you@example.com" />
              </label>
              <label>
                Phone / WhatsApp
                <input className="x-input" name="phone" placeholder="Contact number" />
              </label>
              <label>
                Inquiry Type*
                <select className="x-input" name="type" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Webinar Support</option>
                  <option>Partnerships & Business Inquiries</option>
                  <option>Speaking Invitations</option>
                  <option>General Contact</option>
                </select>
              </label>
              <label className="is-wide">
                How can we help you?*
                <textarea className="x-input" name="message" placeholder="Tell us a little about your inquiry" />
              </label>
              <label className="is-wide x-consent">
                <input type="checkbox" name="consent" />
                <span>I agree to receive relevant information from Shobhit Singhal.</span>
              </label>
              <div className="is-wide x-form-action">
                <button className="x-button" type="submit">Send message <MessageSquareText size={14} /></button>
                <small><Clock3 size={13} /> We typically respond within 24 business hours.</small>
              </div>
            </form>
          </article>

          <article className="x-contact-webinar">
            <Image
              src="/images/stock/strategy-still-life.png"
              alt="Consulting webinar workspace"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <div className="x-contact-webinar-shade" />
            <div className="x-contact-webinar-copy">
              <p>Free live webinar <span /></p>
              <h2>Join The Free<br /><XAccent>Weekend Webinar</XAccent></h2>
              <strong>Learn the Modern Chanakya Way to build a profitable consulting business.</strong>
              <ul>
                <li><CalendarDays size={16} /> Every Saturday & Sunday</li>
                <li><Clock3 size={16} /> 11:00 AM (IST)</li>
                <li><Video size={16} /> Live online</li>
              </ul>
              <XButton>Reserve your seat now</XButton>
            </div>
          </article>
        </div>
      </XSection>

      <XSection>
        <XTitle>Connect <XAccent>With Us</XAccent></XTitle>
        <XGrid items={socialChannels} columns={4} />
      </XSection>

      <XSection className="is-alt">
        <XTitle>Frequently <XAccent>Asked Questions</XAccent></XTitle>
        <XFaq items={contactFaqs} />
      </XSection>

      <XSection>
        <div className="x-contact-impact">
          <article className="x-panel">
            <XTitle align="left">Our Community, <XAccent>Our Impact</XAccent></XTitle>
            <p>A growing community of professionals, experts, and aspiring consultants building thoughtful, freedom-first businesses.</p>
            <XStats
              items={[
                { value: "Global", label: "Community reach", icon: Globe2 },
                { value: "Growing", label: "Professional network", icon: UsersRound },
                { value: "Weekly", label: "Live webinar", icon: CalendarDays },
                { value: "Focused", label: "Consulting outcomes", icon: CheckCircle2 }
              ]}
            />
          </article>
          <article className="x-contact-location">
            <Image src="/images/stock/workshop-community.png" alt="Consulting community workshop" fill sizes="(max-width: 760px) 100vw, 58vw" />
            <div className="x-contact-location-shade" />
            <div>
              <MapPin size={25} />
              <b>Headquarters</b>
              <span>{brand.location}</span>
              <small>Serving professionals worldwide.</small>
            </div>
          </article>
        </div>
      </XSection>

      <XSection className="is-alt">
        <XCta title="Ready to transform your consulting journey?" copy="Clarity · Strategy · Systems · Impact" />
      </XSection>
    </>
  );
}
