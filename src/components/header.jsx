import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
                  <div className="appstore-link">
                    <a
                      href="https://apps.apple.com/nl/app/photo-book-noir/id6749212233?l=en-GB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/img/AppStoreBadge.svg"
                        alt="View on the App Store"
                        style={{ height: 64 }}
                      />
                    </a>
                  </div>
                </div>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{ marginTop: 20 }}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
