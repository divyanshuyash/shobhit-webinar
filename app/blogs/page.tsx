import { GoldSubmitButton, OutlineButton } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { GoldCTA, MediaTile, ReferenceTitle } from "@/components/ReferenceBlocks";
import { blogCategories, blogs } from "@/data/site";

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights. Strategy. Freedom."
        title="Shobhit's Writings"
        subtitle="Business, Consulting, Money, Mindset & Modern Chanakya Thinking"
        copy="A premium thought-leadership hub for consulting, AI, sales, organic leads, personal brand and Modern Chanakya thinking."
        primary="Join The Free Weekend Webinar"
        imageLabel="Founder writing desk"
      />

      <section className="py-10">
        <Container>
          <div className="premium-panel grid overflow-hidden rounded-sm lg:grid-cols-[0.9fr_1fr]">
            <ImagePlaceholder label="Featured article visual" assetPath="/images/blog/blog-1.jpg" className="min-h-80 rounded-none border-0" />
            <div className="p-6 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">Featured Article</p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none tracking-wide text-offwhite md:text-6xl">
                The New Consulting Game: Why High-Ticket Is The Only Sustainable Path
              </h2>
              <p className="mt-5 text-base leading-7 text-muted">
                The market is flooded with consultants trading hours for money. The future belongs to people who build sharper offers, stronger systems and lasting transformation.
              </p>
              <OutlineButton className="mt-6">Read Featured Article</OutlineButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="ref-section py-7">
        <Container>
          <div className="flex flex-wrap gap-3">
            {["All", ...blogCategories].map((category) => (
              <button key={category} type="button" className="rounded-sm border border-gold/25 px-4 py-3 text-xs font-black uppercase tracking-wide text-offwhite transition hover:border-gold hover:text-gold">
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ReferenceTitle title="All" accent="Articles" align="left" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {blogs.slice(0, 8).map((blog, index) => (
              <MediaTile
                key={blog}
                title={blog}
                subtitle={`${6 + (index % 3)} min read. Consulting, strategy and Modern Chanakya thinking.`}
                assetPath={`/images/blog/blog-${index + 1}.jpg`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="ref-section py-10">
        <Container>
          <ReferenceTitle title="Popular" accent="Articles" align="left" />
          <div className="grid gap-4 md:grid-cols-5">
            {blogs.slice(0, 5).map((blog, index) => (
              <article key={blog} className="premium-panel rounded-sm p-4">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-sm bg-gold font-black text-black">{index + 1}</span>
                  <ImagePlaceholder label={`Popular article ${index + 1}`} className="min-h-20 flex-1" />
                </div>
                <h3 className="text-sm font-black leading-5 text-offwhite">{blog}</h3>
                <p className="mt-3 text-xs uppercase tracking-wide text-muted">6 min read</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="premium-panel rounded-sm p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-center">
              <div>
                <h2 className="font-display text-4xl uppercase leading-none text-offwhite">Get Weekly Insights That <span className="gold-gradient-text">Grow Your Business</span></h2>
                <p className="mt-3 text-muted">Actionable strategies on high-ticket consulting, lead generation, sales psychology and freedom.</p>
              </div>
              <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input id="newsletter-email" type="email" placeholder="Enter your email address" className="rounded-sm border border-gold/20 bg-black px-4 py-3 text-sm text-offwhite outline-none focus:border-gold" />
                <GoldSubmitButton>Send Me Insights</GoldSubmitButton>
              </form>
            </div>
          </div>
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
