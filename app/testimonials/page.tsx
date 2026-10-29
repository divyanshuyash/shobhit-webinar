import Image from "next/image";
import { BadgeDollarSign, BrainCircuit, ChartNoAxesCombined, Crosshair, UsersRound } from "lucide-react";
import type { CSSProperties } from "react";
import {
  XAccent,
  XCta,
  XGrid,
  XHero,
  XHeroActions,
  XMediaCard,
  XSection,
  XTitle
} from "@/components/ExactBlocks";
import { Testimonials } from "@/components/Testimonials";
import { AnimatedPhotoShowcase, type ShowcasePhoto } from "@/components/ui/animated-photo-showcase";
import { VideoPreview } from "@/components/VideoPreview";
import { latestTestimonialVideos, testimonialCardCopy, testimonialCardTitle, testimonialVideos } from "@/data/testimonialVideos";

const conclaveReels = [
  { src: "/videos/reels/shobhit-awards.mp4", title: "Awards & recognition", poster: "/images/testimonial-thumbnails/conclave-awards-1s.jpg" },
  { src: "/videos/reels/shobhit-entry.mp4", title: "Entering the conclave", poster: "/images/testimonial-thumbnails/conclave-entry-1s.jpg" },
  { src: "/videos/reels/shobhit-speakers.mp4", title: "Conclave speakers", poster: "/images/testimonial-thumbnails/conclave-speakers-1s.jpg" }
];

const clientWinPhotos: ShowcasePhoto[] = [
  { src: "/images/client-wins/MCP06530.jpg", alt: "Transformers Hub members celebrating with their awards" },
  { src: "/images/client-wins/MCP06631.jpg", alt: "Shobhit Singhal presenting a community award" },
  { src: "/images/client-wins/MCP06673.jpg", alt: "A heartfelt award celebration between community members" },
  { src: "/images/client-wins/MCP06678.jpg", alt: "Shobhit Singhal and a recipient holding a Chanakya award" },
  { src: "/images/client-wins/MCP06692.jpg", alt: "Shobhit Singhal presenting a recognition plaque" },
  { src: "/images/client-wins/MCP06733.jpg", alt: "A community member celebrating with a Chanakya award" },
  { src: "/images/client-wins/MCP06741.jpg", alt: "Shobhit Singhal and a community member holding a trophy" },
  { src: "/images/client-wins/MCP06774.jpg", alt: "Transformers Hub community celebrating together" },
  { src: "/images/client-wins/MUK00264.jpg", alt: "Shobhit Singhal celebrating alongside the community" },
  { src: "/images/client-wins/MUK00375.jpg", alt: "Chanakya Conclave award recipients with Shobhit Singhal" },
  { src: "/images/founder/MUK00277.jpg", alt: "Community members sharing a reflective moment at Chanakya Conclave" },
  { src: "/images/founder/MUK00449.jpg", alt: "Transformers Hub community celebrating together" },
  { src: "/images/founder/MUK08210.jpg", alt: "Shobhit Singhal celebrating with the Transformers Hub community" },
  { src: "/images/founder/MUK07929.jpg", alt: "A heartfelt celebration between Transformers Hub community members" },
  { src: "/images/modern-chanakya/MUK08418.jpg", alt: "A Transformers Hub member sharing her story on stage" },
  { src: "/images/founder/MUK09044.jpg", alt: "A Transformers Hub community discussion in action" }
];

export default function TestimonialsPage() {
  return (
    <>
      <XHero
        image="/images/generated/testimonials-hero-v2.png"
        imagePosition="76% 10%"
        eyebrow="Proof. Purpose. Impact."
        title={<>Real people. Real clarity.<br /><XAccent>Real transformations.</XAccent></>}
        copy="From niche clarity to high-ticket offers, confidence breakthroughs to consulting growth."
      ><XHeroActions video={false} /></XHero>

      <XSection>
        <XTitle>Featured <XAccent>video testimonials</XAccent></XTitle>
        <div className="x-media-grid x-media-grid-compact" style={{ "--x-media-cols": 3 } as CSSProperties}>
          {latestTestimonialVideos.map(({ src, poster }) => (
            <XMediaCard key={src} image={poster} title={testimonialCardTitle} copy={testimonialCardCopy} videoSrc={src} />
          ))}
        </div>
      </XSection>

      <XSection>
        <XTitle>More <XAccent>community stories</XAccent></XTitle>
        <div className="x-media-grid x-media-grid-compact" style={{ "--x-media-cols": 4 } as CSSProperties}>
          <XMediaCard image="/images/testimonial-thumbnails/hez1732-1s.jpg" title={testimonialCardTitle} copy={testimonialCardCopy} videoSrc={testimonialVideos[0].src} />
          <XMediaCard image="/images/testimonial-thumbnails/hez1733-1s.jpg" title={testimonialCardTitle} copy={testimonialCardCopy} videoSrc={testimonialVideos[1].src} />
          <XMediaCard image="/images/testimonial-thumbnails/hez1735-1s.jpg" title={testimonialCardTitle} copy={testimonialCardCopy} videoSrc={testimonialVideos[2].src} />
          <XMediaCard image="/images/testimonial-thumbnails/hez1737-1s.jpg" title={testimonialCardTitle} copy={testimonialCardCopy} videoSrc={testimonialVideos[3].src} />
        </div>
      </XSection>

      <div className="testimonial-duo">
        <Testimonials variant="paired" />
        <AnimatedPhotoShowcase photos={clientWinPhotos} autoRotateInterval={4000} />
      </div>

      <XSection>
        <XTitle>Success stories by <XAccent>category</XAccent></XTitle>
        <XGrid columns={5} items={[
          { title: "Niche clarity results", copy: "Found their profitable consulting niche.", icon: Crosshair },
          { title: "High-ticket offer results", copy: "Created and launched premium offers.", icon: BadgeDollarSign },
          { title: "Sales results", copy: "Built consistent sales conversations.", icon: ChartNoAxesCombined },
          { title: "Confidence results", copy: "Moved past doubt and indecision.", icon: BrainCircuit },
          { title: "Community results", copy: "Built collaboration and support.", icon: UsersRound }
        ]} />
      </XSection>

      <XSection>
        <XTitle>Glimpse of <XAccent>Chanakya Conclave</XAccent></XTitle>
        <div className="x-conclave-reel-grid">
          {conclaveReels.map(({ src, title, poster }) => (
            <article className="x-conclave-reel-card" key={src}>
              <VideoPreview src={src} title={title} poster={poster} />
              <p>{title}</p>
            </article>
          ))}
        </div>
      </XSection>

      <XSection>
        <div className="x-split-grid">
          <div className="x-panel">
            <XTitle align="left">Payment proofs</XTitle>
            <div className="x-payment-proof-grid">
              <figure><Image src="/images/payment-proofs/payment-proof-75000.png" alt="₹75,000 payment confirmation" fill sizes="(max-width: 760px) 100vw, 25vw" /></figure>
              <figure><Image src="/images/payment-proofs/payment-proof-50000.png" alt="₹50,000 payment confirmation" fill sizes="(max-width: 760px) 100vw, 25vw" /></figure>
            </div>
          </div>
          <div className="x-panel"><XTitle align="left">Client wins & recognition</XTitle><div className="x-media-grid" style={{ "--x-media-cols": 2 } as CSSProperties}><XMediaCard image="/images/client-wins/MCP06530.jpg" title="Celebrating the Chanakyas" /><XMediaCard image="/images/client-wins/MUK00375.jpg" title="Recognition that inspires" /></div></div>
        </div>
      </XSection>

      <XSection><XCta title="See how they did it. Now it's your turn." /></XSection>
    </>
  );
}
