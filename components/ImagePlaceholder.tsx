import { getStockImage } from "@/data/stockImages";

export function ImagePlaceholder({
  label,
  assetPath,
  className = "",
  wide = false,
  caption = false,
  bare = false
}: {
  label: string;
  assetPath?: string;
  className?: string;
  wide?: boolean;
  caption?: boolean;
  bare?: boolean;
}) {
  const image = getStockImage(label, assetPath);
  const text = `${label} ${assetPath ?? ""}`.toLowerCase();
  const isVideo = text.includes("video") || text.includes("webinar") || text.includes("youtube") || text.includes("reel");
  const objectPosition =
    text.includes("hero") || text.includes("portrait") || text.includes("contact")
      ? "object-[center_top]"
      : text.includes("desk") || text.includes("writing") || text.includes("free content")
        ? "object-center"
        : "object-center";

  return (
    <div
      data-asset={assetPath}
      className={`group relative isolate flex min-h-64 overflow-hidden ${bare ? "" : "rounded-sm border border-gold/20 bg-black shadow-panel"} ${className}`}
    >
      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        className={`stock-kenburns absolute inset-0 h-full w-full object-cover ${objectPosition} opacity-95 saturate-[0.82] sepia-[0.12] contrast-[1.08] transition duration-700 group-hover:scale-105 group-hover:opacity-100`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/22 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,165,32,0.15),transparent_44%)]" />
      {isVideo ? (
        <div className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/70 text-offwhite shadow-panel transition group-hover:scale-110">
          <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-white" />
          <span className="sr-only">Play video</span>
        </div>
      ) : null}
      {caption ? (
        <div className="relative z-10 flex w-full flex-col justify-end p-5">
          <p className={`max-w-md font-display uppercase leading-none tracking-wide text-offwhite text-glow ${wide ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {label}
          </p>
        </div>
      ) : null}
    </div>
  );
}
