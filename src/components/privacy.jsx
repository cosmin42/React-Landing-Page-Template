import React from "react";
import { Link } from "react-router-dom";
import { getPrivacyContent } from "../i18n/translations/privacyContent";
import { useLanguage } from "../i18n/LanguageContext";
import "./privacy.css";

const PrivacyListItem = ({ item }) => {
  if (typeof item === "string") {
    return <li>{item}</li>;
  }

  return (
    <li>
      <strong>{item.label}:</strong> {item.text}
    </li>
  );
};

const PrivacyContactItem = ({ item }) => (
  <li>
    <strong>{item.label}:</strong>{" "}
    {item.href ? (
      <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>
        {item.value}
      </a>
    ) : (
      item.value
    )}
  </li>
);

export const Privacy = () => {
  const { language } = useLanguage();
  const content = getPrivacyContent(language);

  return (
    <div id="privacy">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>{content.title}</h2>
            <p className="small">
              {content.effectiveDateLabel}: {content.effectiveDate}
            </p>
            <p>{content.intro}</p>
            <div className="privacy-actions">
              <Link to="/" className="btn btn-custom btn-lg">
                {content.backHome}
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <article className="privacy-article" aria-label={content.articleAria}>
              <nav className="privacy-toc" aria-label={content.tocAria}>
                <h3 className="privacy-toc-title">{content.tocTitle}</h3>
                <ol className="privacy-toc-list">
                  {content.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        {section.number}. {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="privacy-sections">
                {content.sections.map((section, index) => (
                  <section key={section.id} className="privacy-section" aria-labelledby={`${section.id}-title`}>
                    <h3 id={`${section.id}-title`} className="privacy-section-title">
                      <a className="privacy-anchor" href={`#${section.id}`} id={section.id} aria-label={section.title}>
                        {section.number}. {section.title}
                      </a>
                    </h3>
                    <div className="privacy-section-content">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      {section.bulletGroups.length > 0 ? (
                        <ul>
                          {section.bulletGroups.map((group) => (
                            <li key={group.label}>
                              <strong>{group.label}:</strong>
                              <ul>
                                {group.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.bullets.length > 0 ? (
                        <ul>
                          {section.bullets.map((item) => (
                            <PrivacyListItem key={typeof item === "string" ? item : `${item.label}-${item.text}`} item={item} />
                          ))}
                        </ul>
                      ) : null}

                      {section.callout ? (
                        <div className="privacy-callout" role="note" aria-label={section.callout.label}>
                          <strong>{section.callout.label}:</strong> {section.callout.text}
                        </div>
                      ) : null}

                      {section.emailLine ? (
                        <p>
                          {section.emailLine.prefix}{" "}
                          <a href={`mailto:${section.emailLine.email}`}>{section.emailLine.email}</a>.
                        </p>
                      ) : null}

                      {section.keyValues.length > 0 ? (
                        <ul>
                          {section.keyValues.map((item) => (
                            <li key={item.label}>
                              <strong>{item.label}:</strong> {item.value}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.trailingParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      {section.contactDetails.length > 0 ? (
                        <ul>
                          {section.contactDetails.map((item) => (
                            <PrivacyContactItem key={`${item.label}-${item.value}`} item={item} />
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    {index !== content.sections.length - 1 ? <hr className="privacy-divider" /> : null}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
