import React from "react";
import { Subscribe } from "./subscribe";

const appStoreBadgeByLanguage = {
  en: "/app-store-icons/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg",
  nl: "/app-store-icons/NL/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_NL_RGB_wht_101217.svg",
  fr: "/app-store-icons/FR/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_FR_RGB_wht_100217.svg",
  zh: "/app-store-icons/CN(SC)/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_CNSC_RGB_wht_092917.svg",
  ja: "/app-store-icons/JP/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_JP_RGB_wht_100317.svg",
  ko: "/app-store-icons/KR/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_KR_RGB_wht_100317.svg",
  tr: "/app-store-icons/TR/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_TR_wht_RGB_100217.svg",
  ro: "/app-store-icons/RO/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_RO_RGB_wht_100317.svg",
  de: "/app-store-icons/DE/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_DE_RGB_wht_092917.svg",
  pt: "/app-store-icons/PTBR/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_PTBR_RGB_wht_100317.svg",
  es: "/app-store-icons/ES/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_ES_RGB_wht_100217.svg",
  ar: "/app-store-icons/AR/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_AR_RGB_wht_102417.svg",
  it: "/app-store-icons/IT/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_IT_RGB_wht_100317.svg",
  ru: "/app-store-icons/RU/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_RU_RGB_wht_100317.svg",
};

export const Header = (props) => {
  const [isDemoPlaying, setIsDemoPlaying] = React.useState(false);
  const data = props.data || {};
  const demo = props.demo || {};
  const subscribe = props.subscribe || {};
  const language = props.language || "en";
  const appStoreBadgeSrc = `${process.env.PUBLIC_URL}${appStoreBadgeByLanguage[language] || appStoreBadgeByLanguage.en}`;
  const demoTitle = demo.title || "Demo";
  const imageSrc = demo.imageSrc;
  const hasDemoImage = Boolean(imageSrc);
  const imageAlt = demo.imageAlt || demoTitle || "Photo Book Noir preview";
  const videoSrc = demo.videoSrc || "/video/demo.mp4";
  const mediaLabel = demo.videoLabel || imageAlt || demoTitle || "Photo Book Noir preview";

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="intro-layout">
              <div className={`intro-stage${isDemoPlaying ? " intro-stage--video-playing" : ""}`}>
                <div className="intro-text intro-copy">
                  <h1>
                    {data.title}
                    <span></span>
                  </h1>
                  <p>{data.paragraph}</p>
                  <div className="intro-actions">
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
                  </div>
                </div>
                <div
                  className={`intro-demo${isDemoPlaying ? " intro-demo--playing" : ""}${hasDemoImage ? " intro-demo--image" : ""}`}
                  aria-label={mediaLabel}
                >
                  {hasDemoImage ? null : (
                    <div className="intro-demo-copy">
                      <h2>{demoTitle}</h2>
                    </div>
                  )}
                  <div className={`intro-demo-frame${hasDemoImage ? " intro-demo-frame--image" : ""}`}>
                    {imageSrc ? (
                      <picture>
                        {demo.imageSrcSet ? (
                          <source
                            type="image/webp"
                            srcSet={demo.imageSrcSet}
                            sizes={demo.imageSizes}
                          />
                        ) : null}
                        <img
                          alt={imageAlt}
                          className="intro-demo-video intro-demo-image"
                          src={imageSrc}
                          width={demo.imageWidth}
                          height={demo.imageHeight}
                          decoding="async"
                          fetchpriority="high"
                        />
                      </picture>
                    ) : (
                      <video
                        aria-label={mediaLabel}
                        className="intro-demo-video"
                        src={videoSrc}
                        controls
                        loop
                        playsInline
                        preload="metadata"
                        onPlay={() => setIsDemoPlaying(true)}
                        onPause={() => setIsDemoPlaying(false)}
                        onEnded={() => setIsDemoPlaying(false)}
                      />
                    )}
                  </div>
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
