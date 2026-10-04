"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

const VIDEO_ID = "suKepgP_L6M";

export function HomeIntroVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = () => {
    if (!started) {
      setStarted(true);
      setPlaying(true);
      return;
    }

    const command = playing ? "pauseVideo" : "playVideo";
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: command, args: [] }),
      "https://www.youtube-nocookie.com"
    );
    setPlaying((value) => !value);
  };

  return (
    <div className={`home-intro-player ${started ? "is-started" : ""}`}>
      {started ? (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&playsinline=1&rel=0`}
          title="Digital Consultant Launchpad introduction by Shobhit Singhal"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      ) : (
        <>
          <Image src="/images/founder/intro-thumbnail.jpg" alt="Shobhit Singhal introducing the Digital Consultant Launchpad" fill sizes="(max-width: 760px) 100vw, 62vw" />
          <span className="home-intro-player-shade" aria-hidden="true" />
        </>
      )}
      <button type="button" className="home-intro-player-control" aria-label={playing ? "Pause introduction video" : "Play introduction video"} aria-pressed={playing} onClick={togglePlayback}>
        {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
      </button>
    </div>
  );
}
