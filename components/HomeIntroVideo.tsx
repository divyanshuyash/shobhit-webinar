const INTRO_VIDEO_URL = "/videos/shobhit-event.mp4";

export function HomeIntroVideo() {
  return (
    <div className="home-intro-player">
      <video
        poster="/images/founder/intro-thumbnail.jpg"
        preload="none"
        playsInline
        controls
      >
        <source src={INTRO_VIDEO_URL} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </div>
  );
}
