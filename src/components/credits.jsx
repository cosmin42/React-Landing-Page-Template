import React from "react";
import { Link } from "react-router-dom";
import { creditsData } from "../data/creditsData";
import { useLanguage } from "../i18n/LanguageContext";
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

const CreditsComponentItem = ({ item, versionLabel, licenseLabel }) => {
  return (
    <li className="credits-item">
      <div>
        <strong>{item.name}</strong>
        {item.description ? <> — {item.description}</> : null}
      </div>
      {(item.version || item.license || (item.links && item.links.length > 0)) && (
        <div className="credits-meta small">
          {item.version ? <span>{versionLabel}: {item.version}. </span> : null}
          {item.license ? <span>{licenseLabel}: {item.license}. </span> : null}
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
  const { language } = useLanguage();
  const content = creditsData[language] || creditsData.en;

  return (
    <div id="credits">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>{content.intro.title}</h2>
            <p>{content.intro.description}</p>
            <div className="credits-actions">
              <Link to="/" className="btn btn-custom btn-lg">
                {content.backHome}
              </Link>
            </div>
          </div>
        </div>

        {content.sections.map((section) => (
          <section key={section.id} className="credits-section" aria-labelledby={section.id}>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <h3 id={section.id}>{section.title}</h3>
                {section.hint ? <p className="credits-hint small">{section.hint}</p> : null}

                {section.type === "components" && (
                  <details className="credits-details" open>
                    <summary className="small">{content.showHide}</summary>
                    <ul className="list-unstyled small">
                      {section.items.map((item) => (
                        <CreditsComponentItem
                          key={item.name}
                          item={item}
                          versionLabel={content.versionLabel}
                          licenseLabel={content.licenseLabel}
                        />
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
