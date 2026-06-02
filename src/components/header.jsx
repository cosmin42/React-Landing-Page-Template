import React from "react";
import { installerInfo } from "../data/installerInfo";
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
  const data = props.data || {};
  const demo = props.demo || {};
  const subscribe = props.subscribe || {};
  const language = props.language || "en";
  const appStoreBadgeSrc = `${process.env.PUBLIC_URL}${appStoreBadgeByLanguage[language] || appStoreBadgeByLanguage.en}`;
  const demoTitle = demo.title || "Demo";
  const videoSrc = demo.videoSrc || "/video/demo.mp4";
  const videoLabel = demo.videoLabel || demoTitle || "Photo Book Noir demo video";

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
                  href={`${process.env.PUBLIC_URL}/${installerInfo.fileName}`}
                  download={installerInfo.fileName}
                  className="btn btn-custom btn-lg page-scroll download-button"
                >
                  <span className="download-button-label">
                    {data.downloadLabel} v{installerInfo.version}
                  </span>
                  <span className="download-button-meta">
                    {installerInfo.sizeLabel} - Created {installerInfo.createdLabel}
                  </span>
                </a>{" "}
              </div>
              <div className="intro-demo" aria-label={videoLabel}>
                <div className="intro-demo-copy">
                  <h2>{demoTitle}</h2>
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
