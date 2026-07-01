import { GoldButton } from "./Buttons";

export function WebinarCard({ cta = "Register Now" }: { cta?: string }) {
  return (
    <aside className="premium-panel rounded-sm p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">Free Live Webinar</p>
        <span className="node-pulse size-3 rounded-full bg-red-500" />
      </div>
      <h3 className="font-display text-4xl uppercase leading-none tracking-wide text-offwhite">
        Digital Consultant Launchpad
      </h3>
      <p className="mt-3 text-base font-semibold text-gold">The Crorepati Consultant Blueprint</p>
      <div className="my-5 h-px data-stream opacity-60" />
      <dl className="grid gap-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Day</dt>
          <dd className="font-bold text-offwhite">Every Saturday & Sunday</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Time</dt>
          <dd className="font-bold text-offwhite">11:00 AM</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Mode</dt>
          <dd className="font-bold text-offwhite">Live Online</dd>
        </div>
      </dl>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["Niche", "Offer", "Leads"].map((item) => (
          <span key={item} className="rounded-sm border border-gold/15 bg-black/45 px-2 py-2 text-center text-[10px] font-black uppercase tracking-wide text-offwhite/75">
            {item}
          </span>
        ))}
      </div>
      <GoldButton className="mt-6 w-full">{cta}</GoldButton>
      <p className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-muted">Seats filling fast every weekend</p>
    </aside>
  );
}
