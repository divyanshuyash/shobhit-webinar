"use client";

import { useRef } from "react";

export function VideoPreview({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPreparedPreview = useRef(false);
  const hasStartedPlayback = useRef(false);

  const preparePreview = () => {
    const video = videoRef.current;
    if (!video || hasPreparedPreview.current) return;

    hasPreparedPreview.current = true;
    video.currentTime = Math.min(1, Number.isFinite(video.duration) ? video.duration : 1);
  };

  const startFromBeginning = () => {
    const video = videoRef.current;
    if (!video || hasStartedPlayback.current) return;

    hasStartedPlayback.current = true;
    video.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      controls
      preload="metadata"
      playsInline
      aria-label={title}
      onLoadedMetadata={preparePreview}
      onPlay={startFromBeginning}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  );
}
