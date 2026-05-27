import React from "react";
import { Subscribe } from "./subscribe";

export const Header = (props) => {
  const data = props.data || {};
  const demo = props.demo || {};
  const subscribe = props.subscribe || {};
  const language = props.language || "en";
  const demoTitle = demo.title || "Watch the app demo";
  const demoParagraph = demo.paragraph;
  const videoSrc = demo.videoSrc || "/video/demo.mp4";
  const videoLabel = demo.videoLabel || demoTitle;

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="intro-layout">
              <div className="intro-text intro-copy">
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
                <h1>
                  {data.title}
                  <span></span>
                </h1>
                <p>{data.paragraph}</p>
                <a
                  href={`${process.env.PUBLIC_URL}/PhotoBook.dmg`}
                  download="PhotoBook.dmg"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {data.downloadLabel}
                </a>{" "}
              </div>
              <div className="intro-demo" aria-labelledby="hero-demo-title">
                <div className="intro-demo-copy">
                  <span className="intro-demo-kicker">Demo</span>
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
              <Subscribe data={subscribe} language={language} embedded />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
