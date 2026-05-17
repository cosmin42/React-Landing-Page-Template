import React from "react";

// Demo showcase section expects data:
// { title, paragraph, note?, url?, buttonText?, videoSrc?, videoLabel? }
export const TestFlight = ({ data }) => {
  const title = data?.title || "Watch the app demo";
  const paragraph =
    data?.paragraph ||
    "See how Photo Book Noir handles layouts, captions, and export-ready pages in a short in-app walkthrough.";
  const note = data?.note;
  const url = data?.url;
  const buttonText = data?.buttonText || "View on the App Store";
  const videoSrc = data?.videoSrc || "/video/demo.mp4";
  const videoLabel = data?.videoLabel || title;

  return (
    <div id="testflight">
      <div className="container">
        <div className="testflight-shell">
          <div className="testflight-media">
            <div className="testflight-video-frame">
              <video
                aria-label={videoLabel}
                className="testflight-video"
                src={videoSrc}
                controls
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          <div className="testflight-copy">
            <div className="section-title">
              <h2>{title}</h2>
              <p className="lead-text">{paragraph}</p>
              <div className="testflight-actions">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom btn-lg"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
              {note ? <p className="beta-note">{note}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
