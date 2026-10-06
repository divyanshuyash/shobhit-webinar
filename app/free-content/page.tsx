import {
  Bot,
  Download,
  FileText,
  Mail,
  PlayCircle,
  Rocket
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import {
  XAccent,
  XCta,
  XGrid,
  XHero,
  XHeroActions,
  XMediaCard,
  XSection,
  XStats,
  XSteps,
  XTitle
} from "@/components/ExactBlocks";

const featuredVideos = [
  { id: "fm18ckm6lcI", title: "Episode 1: The Restart" },
  { id: "4DZyK-74O3o", title: "Episode 2: The Rondumal Syndrome" },
  { id: "Sm-6kxSiIq8", title: "Episode 3: The Narcissist Vortex" },
  { id: "Y8T4BsALkXQ", title: "Day 5: Social Media Game Plan" }
];

const shortFormReels = ["Da77mg0zg6x", "DanYvhbzR1V", "DaQLgSVz0Fx", "DaiMuX4zOJ2"];

export default function FreeContentPage() {
  return (
    <>
      <XHero
        image="/images/generated/content-hero-v3.png"
        imagePosition="76% 10%"
        eyebrow="Learn. Apply. Grow."
        title={<>Learn from my<br /><XAccent>free content</XAccent></>}
        copy="Actionable strategies on consulting, AI, sales, organic leads and business growth."
      ><XHeroActions video={false} /></XHero>

      <XSection>
        <div className="x-platform-grid"><XGrid columns={3} items={[
          { title: "YouTube", copy: "In-depth videos on business models, strategy and AI.", icon: FaYoutube, footer: "Watch on YouTube", href: "https://www.youtube.com/@shobhitsinghal93" },
          { title: "Instagram", copy: "Daily tips, reels and insights on growth and sales.", icon: FaInstagram, footer: "Follow on Instagram", href: "https://www.instagram.com/shobhitransformer/" },
          { title: "LinkedIn", copy: "Thought leadership, case studies and professional insight.", icon: FaLinkedinIn, footer: "Follow on LinkedIn", href: "https://www.linkedin.com/in/shobhitsinghal93/" }
        ]} /></div>
      </XSection>

      <XSection>
        <XTitle align="left">Featured videos</XTitle>
        <div className="x-youtube-grid">
          {featuredVideos.map(({ id, title }) => (
            <article className="x-youtube-card" key={id}>
              <div className="x-youtube-player">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3>{title}</h3>
              <p>Watch on YouTube</p>
            </article>
          ))}
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Short-form content</XTitle>
        <div className="x-reel-grid">
          {shortFormReels.map((id, index) => (
            <article className="x-reel-card" key={id}>
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed/captioned/`}
                title={`Instagram reel ${index + 1}`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </article>
          ))}
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Free resources</XTitle>
        <XGrid columns={6} items={[
          { title: "Entrepreneurship", copy: "A free, peer-reviewed textbook on building and growing a business.", icon: FileText, footer: "Read free book", href: "https://openstax.org/details/books/entrepreneurship" },
          { title: "Principles of Marketing", copy: "A complete free guide to customer value, positioning and marketing strategy.", icon: FileText, footer: "Read free book", href: "https://openstax.org/details/books/principles-marketing" },
          { title: "Principles of Management", copy: "A free textbook on planning, leading and managing for sustainable growth.", icon: FileText, footer: "Read free book", href: "https://openstax.org/details/books/principles-management" },
          { title: "Sales Meeting Playbook", copy: "A practical checklist for sales meetings that move conversations forward.", icon: FileText, footer: "Get free playbook", href: "https://offers.hubspot.com/sales-meeting-playbook" },
          { title: "The Sales Closing Guide", copy: "Three deal-closing approaches to sharpen your sales conversations.", icon: FileText, footer: "Get free guide", href: "https://offers.hubspot.com/sales-closing-guide" },
          { title: "AI for Sales", copy: "A free guide to using AI to improve prospecting and sales performance.", icon: Bot, footer: "Get free guide", href: "https://offers.hubspot.com/ai-sales" }
        ]} />
      </XSection>

      <XSection>
        <XTitle align="left">Start here</XTitle>
        <div className="x-panel">
          <XSteps items={[
            { title: "Watch this first", copy: "Start with the core business model.", icon: PlayCircle },
            { title: "Grab the blueprint", copy: "Download the free consulting roadmap.", icon: Download },
            { title: "Join the community", copy: "Follow the daily implementation journey.", icon: Rocket }
          ]} />
        </div>
      </XSection>

      <XSection>
        <XTitle align="left">Join <XAccent>15,000+</XAccent> growth-minded founders & consultants</XTitle>
        <div className="x-split-grid">
          <XStats items={[
            { value: "15,000+", label: "YouTube subscribers", icon: FaYoutube },
            { value: "28,000+", label: "Instagram followers", icon: FaInstagram },
            { value: "25,000+", label: "LinkedIn followers", icon: FaLinkedinIn },
            { value: "10,000+", label: "Email community", icon: Mail }
          ]} />
          <div className="x-media-grid free-content-community-gallery">
            <XMediaCard image="/images/founder/MUK07929.jpg" title="A community that celebrates together" imagePosition="center 48%" />
            <XMediaCard image="/images/founder/MUK00449.jpg" title="Growing together, in every room" imagePosition="center 45%" />
          </div>
        </div>
      </XSection>

      <XSection><XCta /></XSection>
    </>
  );
}
