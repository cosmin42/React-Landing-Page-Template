import React, { useCallback, useRef, useState } from "react";
import "./heroClips.css";

const matches = (query) =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia(query).matches;

// Compact strip of short, muted clips that sits in the hero where the intro
// paragraph used to be. Nothing downloads until a visitor hovers, focuses, or
// taps a clip, so the hero still paints with one poster image per card.
export const HeroClips = (props) => {
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

  if (clips.length === 0) return null;

  return (
    <div className="hero-clips">
      <ul className="hero-clips-strip" aria-label={data.title}>
        {clips.map((clip, index) => {
          const isPlaying = playingIndex === index;
          const label = isPlaying
            ? `${data.pauseLabel || "Pause"}: ${clip.title}`
            : `${data.playLabel || "Play"}: ${clip.title}`;

          return (
            <li className="hero-clip" key={clip.slug || index}>
              <button
                type="button"
                className={`hero-clip-button${isPlaying ? " is-playing" : ""}`}
                aria-label={label}
                aria-pressed={isPlaying}
                onClick={() => toggle(index)}
                onMouseEnter={() => hoverPlay(index)}
                onMouseLeave={() => hoverPause(index)}
                onFocus={() => hoverPlay(index)}
                onBlur={() => hoverPause(index)}
              >
                <video
                  ref={(node) => {
                    videoRefs.current[index] = node;
                  }}
                  className="hero-clip-video"
                  poster={clip.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() =>
                    setPlayingIndex((prev) => (prev === index ? null : prev))
                  }
                >
                  {clip.webm ? <source src={clip.webm} type="video/webm" /> : null}
                  <source src={clip.mp4} type="video/mp4" />
                </video>
                <span className="hero-clip-glyph" aria-hidden="true">
                  {isPlaying ? "❙❙" : "▶"}
                </span>
                <span className="hero-clip-title" aria-hidden="true">
                  {clip.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
