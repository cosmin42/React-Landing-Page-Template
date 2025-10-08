import React from "react";

// TestFlight beta invitation section expects data:
// { title, paragraph, url, buttonText? }
export const TestFlight = ({ data }) => {
  const title = data?.title || "TestFlight Beta";
  const paragraph = data?.paragraph || "Loading...";
  const url = data?.url;
  const buttonText = data?.buttonText || "Join TestFlight";

  return (
    <div id="testflight" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{title}</h2>
          <p className="lead-text">{paragraph}</p>
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
          <p className="beta-note">Requires iOS 15 or later • Limited seats</p>
        </div>
      </div>
    </div>
  );
};
