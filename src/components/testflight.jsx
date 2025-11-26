import React from "react";

// TestFlight beta invitation section expects data:
// { title, paragraph, url, buttonText? }
export const TestFlight = ({ data }) => {
  const title = data?.title || "TestFlight Beta";
  const paragraph = data?.paragraph || "Loading...";
  const url = data?.url;
  const buttonText = data?.buttonText || "Join the iOS Beta";

  return (
    <div id="testflight">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <video
              className="testflight-video"
              src="/video/appstore.mp4"
              controls
              loop
              muted
              playsInline
            />
          </div>

          <div className="col-md-6">
            <div className="col-md-10 col-md-offset-1 section-title">
              <h2>{title}</h2>
              <p className="lead-text">{paragraph}</p>
              <div className="beta-links d-flex align-items-center">
                {url && (
                  <div className="beta-cta">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-custom btn-lg"
                    >
                      {buttonText}
                    </a>
                  </div>
                )}
              </div>
              <p className="beta-note">Requires iOS 15 or later • Limited seats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
