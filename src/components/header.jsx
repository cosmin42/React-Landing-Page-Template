import React from "react";
import { Subscribe } from "./subscribe";

export const Header = (props) => {
  const data = props.data || {};
  const demo = props.demo || {};
  const subscribe = props.subscribe || {};
  const language = props.language || "en";
  const videoSrc = demo.videoSrc || "/video/demo.mp4";
  const videoLabel = demo.videoLabel || demo.title || "Photo Book Noir demo video";

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="intro-layout">
              <div className="intro-text intro-copy">
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
              <div className="intro-demo" aria-label={videoLabel}>
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
