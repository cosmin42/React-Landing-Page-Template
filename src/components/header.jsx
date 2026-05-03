import React from "react";

export const Header = (props) => {
  const data = props.data || {};

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
                      href={data.appStoreHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/img/AppStoreBadge.svg"
                        alt={data.appStoreAlt}
                        style={{ height: 64 }}
                      />
                    </a>
                  </div>
                </div>
                <h1>
                  {data.title}
                  <span></span>
                </h1>
                <p style={{ marginTop: 20 }}>{data.paragraph}</p>
                <a
                  href={`${process.env.PUBLIC_URL}/PhotoBook.dmg`}
                  download="PhotoBook.dmg"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {data.downloadLabel}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
