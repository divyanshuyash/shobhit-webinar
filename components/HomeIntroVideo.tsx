"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

const INTRO_VIDEO_URL = "https://github.com/divyanshuyash/shobhit-webinar/releases/download/video-v1/Shobhit.Event.Video.mp4";

export function HomeIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setStarted(true);
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
      return;
    }

    video.pause();
  };

  return (
    <div className={`home-intro-player ${started ? "is-started" : ""}`}>
      <video
        ref={videoRef}
        poster="/images/founder/intro-thumbnail.jpg"
        preload="metadata"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={INTRO_VIDEO_URL} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      {!started ? <span className="home-intro-player-shade" aria-hidden="true" /> : null}
      <button type="button" className="home-intro-player-control" aria-label={playing ? "Pause introduction video" : "Play introduction video"} aria-pressed={playing} onClick={togglePlayback}>
        {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
      </button>
    </div>
  );
}
