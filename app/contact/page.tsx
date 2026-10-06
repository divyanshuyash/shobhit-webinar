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
import { ContactMessageForm } from "@/components/ContactMessageForm";
import { brand } from "@/data/constants";

const contactEmail = brand.email;

const helpOptions = [
  {
    title: "Webinar Support",
    copy: "Registration, access, replay, or attendance support for the live weekend session.",
    icon: Headphones,
    footer: "Get support",
    href: `mailto:${contactEmail}?subject=${encodeURIComponent("Webinar Support")}`
  },
  {
    title: "Partnerships & Business Inquiries",
    copy: "Collaborations, affiliates, corporate learning, and strategic partnership conversations.",
    icon: Handshake,
    footer: "Partner with us",
    href: `mailto:${contactEmail}?subject=${encodeURIComponent("Partnerships & Business Inquiries")}`
  },
  {
    title: "Speaking Invitations",
    copy: "Invite Shobhit for a keynote, workshop, panel, or leadership session.",
    icon: Mic2,
    footer: "Send invitation",
    href: `mailto:${contactEmail}?subject=${encodeURIComponent("Speaking Invitation")}`
  },
  {
    title: "General Contact",
    copy: "Have a question or want to say hello? Send a direct note to the team.",
    icon: Mail,
    footer: "Drop a message",
    href: `mailto:${contactEmail}?subject=${encodeURIComponent("General Contact")}`
  }
];

const socialChannels = [
  { title: "YouTube", copy: "Webinars, consulting insights, and long-form strategy sessions.", icon: Clapperboard, footer: "Watch now", href: "https://www.youtube.com/@shobhitsinghal93" },
  { title: "Instagram", copy: "Short ideas, practical prompts, and behind-the-scenes updates.", icon: Camera, footer: "Follow", href: "https://www.instagram.com/shobhitransformer/" },
  { title: "LinkedIn", copy: "Professional insights, articles, and business conversations.", icon: BriefcaseBusiness, footer: "Connect", href: "https://www.linkedin.com/in/shobhitsinghal93/" },
  { title: "Email Us", copy: brand.email, icon: Mail, footer: "Send email" }
];

const contactFaqs = [
  {
    q: "How can I join the free webinar?",
    a: "Use any Join Free Webinar button to reserve your free seat for the live weekend session."
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
        image="/images/generated/contact-hero-v2.png"
        imagePosition="76% 10%"
      >
        <div className="x-contact-promises">
          <span><Clock3 size={15} /> Quick, personal response</span>
          <span><MessageSquareText size={15} /> Real conversations</span>
          <span><CheckCircle2 size={15} /> Committed to your growth</span>
        </div>
        <div className="x-actions"><XButton href="#contact-form">Send us a message</XButton></div>
      </XHero>

      <XSection>
        <XTitle>How Can We <XAccent>Help You?</XAccent></XTitle>
        <XGrid items={helpOptions} columns={4} />
      </XSection>

      <XSection className="is-alt">
        <div className="x-contact-main">
          <article id="contact-form" className="x-panel">
            <XTitle align="left">Send Us <XAccent>A Message</XAccent></XTitle>
            <ContactMessageForm />
          </article>

          <article className="x-contact-webinar">
            <Image
              src="/images/contact/MUK07494.jpg"
              alt="Chanakya Conclave delegate passes ready for the event"
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
            <Image src="/images/founder/MUK08438.jpg" alt="Shobhit Singhal speaking at Chanakya Conclave" fill sizes="(max-width: 760px) 100vw, 58vw" />
          </article>
        </div>
      </XSection>

      <XSection className="is-alt">
        <XCta title="Ready to transform your consulting journey?" copy="Clarity · Strategy · Systems · Impact" />
      </XSection>
    </>
  );
}
