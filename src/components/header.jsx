import React from "react";
import { Subscribe } from "./subscribe";

export const Header = (props) => {
  const data = props.data || {};
  const demo = props.demo || {};
  const subscribe = props.subscribe || {};
  const language = props.language || "en";
  const eyebrow = data.eyebrow || "Photo books for macOS and iPad";
  const availability = data.availability || "Minimal workflow";
  const heroHighlights = data.highlights || [
    "Build albums and collage layouts",
    "Add captions and apply LUT filters",
    "Export clean files for print or sharing",
  ];
  const demoKicker = demo.kicker || "Demo";
  const demoTitle = demo.title || "Watch the app demo";
  const demoParagraph = demo.paragraph;
  const demoTags = demo.tags || [];
  const videoSrc = demo.videoSrc || "/video/demo.mp4";
  const videoLabel = demo.videoLabel || demoTitle;

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="intro-layout">
              <div className="intro-text intro-copy">
                <div className="hero-kicker-row">
                  <span className="hero-eyebrow">{eyebrow}</span>
                  <span className="hero-availability">{availability}</span>
                </div>
                <h1>
                  {data.title}
                  <span></span>
                </h1>
                <p>{data.paragraph}</p>
                <div className="hero-actions">
                  <div className="appstore-link-wrap">
                    <div className="appstore-link">
                      <a
                        href={data.appStoreHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/img/AppStoreBadge.svg"
                          alt={data.appStoreAlt}
                          className="appstore-badge"
                        />
                      </a>
                    </div>
                  </div>
                  <a
                    href={`${process.env.PUBLIC_URL}/PhotoBook.dmg`}
                    download="PhotoBook.dmg"
                    className="btn btn-custom btn-lg page-scroll hero-download"
                  >
                    {data.downloadLabel}
                  </a>
                </div>
                {heroHighlights.length ? (
                  <ul className="hero-highlights">
                    {heroHighlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="hero-stage">
                <div className="intro-demo" aria-labelledby="hero-demo-title">
                  <div className="intro-demo-copy">
                    <div className="intro-demo-head">
                      <span className="intro-demo-kicker">{demoKicker}</span>
                      {demoTags.length ? (
                        <div className="intro-demo-tags">
                          {demoTags.map((tag) => (
                            <span key={tag} className="intro-demo-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <h2 id="hero-demo-title">{demoTitle}</h2>
                    {demoParagraph ? <p>{demoParagraph}</p> : null}
                  </div>
                  <div className="intro-demo-frame">
                    <video
                      aria-label={videoLabel}
                      className="intro-demo-video"
                      src={videoSrc}
                      controls
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-subscribe-shell">
              <Subscribe data={subscribe} language={language} embedded />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
