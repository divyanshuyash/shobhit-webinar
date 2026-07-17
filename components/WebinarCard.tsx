import { GoldButton } from "./Buttons";
import { GlyphMark } from "./DesignBlocks";

export function WebinarCard({ cta = "Register Now" }: { cta?: string }) {
  return (
    <aside className="premium-panel rounded-sm p-7">
      <div className="mb-4 flex items-center gap-3">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gold">Free Live Webinar</p>
        <span className="node-pulse size-2.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
      </div>
      <h3 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-offwhite">
        Digital<br />Consultant<br />Launchpad
      </h3>
      <p className="mt-3 text-[13px] font-semibold tracking-wider text-gold">The Crorepati<br />Consultant Blueprint</p>
      
      <div className="my-6 h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
      
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <GlyphMark name="calendar" size={22} className="text-gold" />
          <div>
            <p className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase">Every</p>
            <p className="text-xs font-bold uppercase tracking-wider text-offwhite">Saturday & Sunday</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <GlyphMark name="clock" size={22} className="text-gold" />
          <p className="text-xs font-bold uppercase tracking-wider text-offwhite">11:00 AM<br /><span className="text-[10px] text-muted">(IST)</span></p>
        </div>
      </div>
      
      <GoldButton className="mt-8 w-full">{cta}</GoldButton>
    </aside>
  );
}
