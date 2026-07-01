import { GoldButton } from "./Buttons";

export function CTASection({
  title = "Your First Step Starts This Weekend",
  copy = "In 90-120 minutes, learn the thought process behind creating a high-ticket consulting business from your existing knowledge, skills, and experience.",
  button = "Reserve My Seat"
}: {
  title?: string;
  copy?: string;
  button?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-sm border border-gold/55 bg-gradient-to-r from-[#d6a02a] via-[#efc64a] to-[#c89121] p-6 text-black shadow-gold md:p-8">
      <div className="absolute -right-16 -top-20 size-64 rounded-full border border-black/15 bg-white/20" />
      <div className="absolute bottom-0 left-0 h-2 w-full data-stream opacity-30" />
      <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr] md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em]">Free Weekend Webinar</p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none tracking-wide md:text-6xl">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-black/75">{copy}</p>
        </div>
        <div className="rounded-sm border border-black/25 bg-black p-5 text-offwhite shadow-panel">
          <div className="grid grid-cols-3 gap-2 text-center">
            {["Sat", "Sun", "Live"].map((item) => (
              <span key={item} className="rounded-sm border border-gold/20 bg-white/5 px-2 py-2 text-xs font-black uppercase tracking-wide text-gold">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-black uppercase tracking-wide text-gold">Every Saturday & Sunday</p>
          <p className="mt-2 font-display text-4xl uppercase leading-none tracking-wide">11:00 AM</p>
          <p className="mb-5 mt-1 text-sm text-muted">Live Online Webinar</p>
          <GoldButton className="w-full">{button}</GoldButton>
        </div>
      </div>
    </section>
  );
}
