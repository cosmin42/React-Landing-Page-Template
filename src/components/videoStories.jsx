import React, { useCallback, useEffect, useRef, useState } from "react";
import "./videoStories.css";

const matches = (query) =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia(query).matches;

// Video stories: a grid of short, muted, looping clips. Nothing is downloaded
// until the visitor hovers or presses play, so the section costs one poster
// image per card on first paint.
export const VideoStories = (props) => {
  const data = props.data || {};
  const clips = data.clips || [];
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const pauseAll = useCallback((exceptIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === exceptIndex) return;
      video.pause();
      video.currentTime = 0;
    });
  }, []);

  const play = useCallback(
    (index) => {
      const video = videoRefs.current[index];
      if (!video) return;
      pauseAll(index);
      const started = video.play();
      if (started && typeof started.catch === "function") {
        started.catch(() => {
          // Autoplay can be refused (low power mode, strict settings); the
          // poster stays visible, which is a fine fallback.
        });
      }
    },
    [pauseAll]
  );

  const pause = useCallback((index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, []);

  const toggle = (index) => {
    if (playingIndex === index) {
      pause(index);
    } else {
      play(index);
    }
  };

  const hoverPlay = (index) => {
    if (!matches("(hover: hover) and (pointer: fine)")) return;
    if (matches("(prefers-reduced-motion: reduce)")) return;
    play(index);
  };

  const hoverPause = (index) => {
    if (!matches("(hover: hover) and (pointer: fine)")) return;
    pause(index);
  };

  // Stop clips that scroll out of view so nothing keeps decoding off-screen.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !entry.target.paused) {
            entry.target.pause();
            entry.target.currentTime = 0;
          }
        });
      },
      { threshold: 0.25 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [clips.length]);

  if (clips.length === 0) return null;

  return (
    <div id="stories" className="video-stories">
      <div className="container">
        <div className="video-stories-heading">
          {data.kicker ? <span className="video-stories-kicker">{data.kicker}</span> : null}
          <h2>{data.title}</h2>
          {data.paragraph ? <p>{data.paragraph}</p> : null}
        </div>
        <div className="video-stories-grid">
          {clips.map((clip, index) => {
            const isPlaying = playingIndex === index;
            const label = isPlaying
              ? `${data.pauseLabel || "Pause"}: ${clip.title}`
              : `${data.playLabel || "Play"}: ${clip.title}`;

            return (
              <article
                className={`story-card${isPlaying ? " is-playing" : ""}`}
                key={clip.slug || index}
                onMouseEnter={() => hoverPlay(index)}
                onMouseLeave={() => hoverPause(index)}
              >
                <div className="story-card-media">
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    className="story-card-video"
                    poster={clip.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    tabIndex={-1}
                    aria-label={clip.title}
                    onPlay={() => setPlayingIndex(index)}
                    onPause={() =>
                      setPlayingIndex((prev) => (prev === index ? null : prev))
                    }
                  >
                    {clip.webm ? <source src={clip.webm} type="video/webm" /> : null}
                    <source src={clip.mp4} type="video/mp4" />
                  </video>
                  <button
                    type="button"
                    className="story-card-toggle"
                    aria-label={label}
                    aria-pressed={isPlaying}
                    onClick={() => toggle(index)}
                  >
                    <span aria-hidden="true">{isPlaying ? "❙❙" : "▶"}</span>
                  </button>
                  {clip.duration ? (
                    <span className="story-card-duration" aria-hidden="true">
                      {clip.duration}
                    </span>
                  ) : null}
                </div>
                <div className="story-card-copy">
                  <h3>{clip.title}</h3>
                  {clip.caption ? <p>{clip.caption}</p> : null}
                </div>
              </article>
            );
          })}
        </div>
        {data.note ? <p className="video-stories-note">{data.note}</p> : null}
      </div>
    </div>
  );
};
