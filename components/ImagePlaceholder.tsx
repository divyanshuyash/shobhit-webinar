import { getStockImage } from "@/data/stockImages";

export function ImagePlaceholder({
  label,
  assetPath,
  className = "",
  wide = false,
  caption = false
}: {
  label: string;
  assetPath?: string;
  className?: string;
  wide?: boolean;
  caption?: boolean;
}) {
  const image = getStockImage(label, assetPath);
  const isVideo = `${label} ${assetPath ?? ""}`.toLowerCase().includes("video");

  return (
    <div
      data-asset={assetPath}
      className={`group relative isolate flex min-h-64 overflow-hidden rounded-sm border border-gold/20 bg-black shadow-panel ${className}`}
    >
      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        className="stock-kenburns absolute inset-0 h-full w-full object-cover opacity-90 saturate-[0.72] sepia-[0.18] transition duration-700 group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,165,32,0.12),transparent_45%)]" />
      {isVideo ? (
        <div className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/65 text-xs font-black uppercase tracking-wide text-offwhite shadow-panel transition group-hover:scale-110">
          Play
        </div>
      ) : null}
      {caption ? (
        <div className="relative z-10 flex w-full flex-col justify-end p-5">
          <p className={`max-w-md font-display uppercase leading-none text-offwhite text-glow ${wide ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {label}
          </p>
        </div>
      ) : null}
    </div>
  );
}
