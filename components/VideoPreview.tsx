export function VideoPreview({ src, title, poster }: { src: string; title: string; poster?: string }) {
  return (
    <video
      controls
      preload="none"
      playsInline
      aria-label={title}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  );
}
