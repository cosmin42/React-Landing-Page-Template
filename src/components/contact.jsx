import React from "react";
import "./contact.css";

export const Contact = (props) => {
  const data = props.data || {};
  const email = data.email || "office@photobook-noir.com";
  const phone = props.data?.phone?.trim();
  const address = props.data?.address?.trim();

  const contactDetails = [
    address
      ? {
          icon: "fa-map-marker",
          label: data.details?.address,
          value: address,
          href: null,
        }
      : null,
    phone
      ? {
          icon: "fa-phone",
          label: data.details?.phone,
          value: phone,
          href: `tel:${phone}`,
        }
      : null,
    {
      icon: "fa-envelope-o",
      label: data.details?.email,
      value: email,
      href: `mailto:${email}`,
    },
  ].filter(Boolean);
  const socialLinks = data.socialLinks?.filter((item) => item.href) || [];

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row contact-layout">
            <div className="col-md-7">
              <div className="contact-intro section-title">
                <p className="contact-kicker">{data.kicker}</p>
                <h2>{data.title}</h2>
                <p className="contact-lead">{data.lead}</p>
              </div>

              <div className="contact-card-grid" aria-label={data.actionsAria}>
                {data.cards?.map((card) => (
                  <a
                    key={card.title}
                    className="contact-card"
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="contact-card-eyebrow">{card.eyebrow}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    <span className="contact-card-link">{card.cta}</span>
                  </a>
                ))}
              </div>

              <div className="contact-note">
                <span className="contact-note-label">{data.noteLabel}</span>
                <p>{data.noteBody}</p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="contact-panel contact-info">
                <div className="contact-panel-header">
                  <p className="contact-panel-kicker">{data.directDetailsKicker}</p>
                  <h3>{data.directDetailsTitle}</h3>
                </div>

                <div className="contact-detail-list">
                  {contactDetails.map((item) => (
                    <div className="contact-item" key={item.label}>
                      <span className="contact-item-label">
                        <i className={`fa ${item.icon}`}></i>
                        {item.label}
                      </span>
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="contact-response-time">
                  <span>{data.responseTitle}</span>
                  <p>{data.responseBody}</p>
                </div>

                <div className="social social-links-wrap">
                  <div className="social-links-header">
                    <p className="contact-panel-kicker">{data.elsewhereKicker}</p>
                    <p className="social-links-intro">{data.elsewhereIntro}</p>
                  </div>
                  <ul aria-label={data.socialLinksAria}>
                    {socialLinks.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} aria-label={item.name} title={item.name} target="_blank" rel="noopener noreferrer">
                          <span className="social-link-copy">
                            <span className="social-link-name">{item.name}</span>
                            <span className="social-link-note">{item.note}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
