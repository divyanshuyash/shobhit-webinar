import { Container } from "./Container";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-gold">Legal</p>
          <h1 className="font-display text-6xl uppercase leading-none tracking-wide text-offwhite md:text-8xl">{title}</h1>
          <div className="premium-panel mt-8 rounded-lg p-6 text-base leading-7 text-muted md:p-8">
            <p className="mb-6 rounded-md border border-gold/25 bg-black/40 p-4 text-sm font-bold text-gold">
              Please review this page carefully before using the website, webinar, content, or consulting resources.
            </p>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
