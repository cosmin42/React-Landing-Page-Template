import React from "react";
import { Subscribe } from "./subscribe";

const appStoreBadgeByLanguage = {
  en: "/app-store-icons/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg",
  nl: "/app-store-icons/NL/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_NL_RGB_wht_101217.svg",
  fr: "/app-store-icons/FR/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_FR_RGB_wht_100217.svg",
};

export const Header = (props) => {
  const data = props.data || {};
  const demo = props.demo || {};
  const subscribe = props.subscribe || {};
  const language = props.language || "en";
  const appStoreBadgeSrc = `${process.env.PUBLIC_URL}${appStoreBadgeByLanguage[language] || appStoreBadgeByLanguage.en}`;
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
                {data.appStoreHref ? (
                  <div className="appstore-link-wrap">
                    <a
                      href={data.appStoreHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="appstore-link"
                    >
                      <img
                        src={appStoreBadgeSrc}
                        alt={data.appStoreAlt}
                        className="appstore-badge"
                      />
                    </a>
                  </div>
                ) : null}
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
