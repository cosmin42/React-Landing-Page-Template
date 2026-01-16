import React from "react";
import { creditsData } from "../data/creditsData";
import "./credits.css";

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const CreditsLinks = ({ links }) => {
  if (!links || links.length === 0) return null;
  return (
    <span className="credits-links">
      {links.map((link) => (
        <ExternalLink key={link.url} href={link.url}>
          {link.label}
        </ExternalLink>
      ))}
    </span>
  );
};

const CreditsComponentItem = ({ item }) => {
  return (
    <li className="credits-item">
      <div>
        <strong>{item.name}</strong>
        {item.description ? <> — {item.description}</> : null}
      </div>
      {(item.version || item.license || (item.links && item.links.length > 0)) && (
        <div className="credits-meta small">
          {item.version ? <span>Version: {item.version}. </span> : null}
          {item.license ? <span>License: {item.license}. </span> : null}
          <CreditsLinks links={item.links} />
        </div>
      )}
    </li>
  );
};

const CreditsPeopleItem = ({ item }) => {
  return (
    <li className="credits-item">
      {item.url ? (
        <>
          {item.name} — <ExternalLink href={item.url}>{item.url}</ExternalLink>
        </>
      ) : (
        item.name
      )}
      {item.note ? <span className="credits-meta"> ({item.note})</span> : null}
    </li>
  );
};

export const Credits = () => {
  return (
    <div id="credits">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>{creditsData.intro.title}</h2>
            <p>{creditsData.intro.description}</p>
          </div>
        </div>

        {creditsData.sections.map((section) => (
          <section key={section.id} className="credits-section" aria-labelledby={section.id}>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <h3 id={section.id}>{section.title}</h3>
                {section.hint ? <p className="credits-hint small">{section.hint}</p> : null}

                {section.type === "components" && (
                  <details className="credits-details" open>
                    <summary className="small">Show / hide list</summary>
                    <ul className="list-unstyled small">
                      {section.items.map((item) => (
                        <CreditsComponentItem key={item.name} item={item} />
                      ))}
                    </ul>
                  </details>
                )}

                {section.type === "people" && (
                  <ul className="small">
                    {section.items.map((item) => (
                      <CreditsPeopleItem key={`${item.name}-${item.url || ""}`} item={item} />
                    ))}
                  </ul>
                )}

                {section.type === "text" && (
                  <>
                    {section.paragraphs?.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                    {section.links?.length ? (
                      <p>
                        {section.links.map((link) => (
                          <ExternalLink key={link.url} href={link.url}>
                            {link.label}
                          </ExternalLink>
                        ))}
                      </p>
                    ) : null}
                    {section.extraParagraphs?.map((text, idx) => (
                      <p key={`extra-${idx}`}>{text}</p>
                    ))}
                  </>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Credits;
