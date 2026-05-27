import React from "react";
import "./contact.css";

export const Contact = (props) => {
  const data = props.data || {};
  const email = data.email || "office@photobook-noir.com";
  const phone = data.phone?.trim();
  const address = data.address?.trim();

  const contactActions =
    data.actions ||
    data.cards?.map((card) => ({
      label: card.cta || card.title,
      href: card.href,
      external: card.external,
    })) ||
    [];

  const contactDetails = [
    address
      ? {
          icon: "fa-map-marker",
          label: data.details?.address || "Based in",
          value: address,
          href: null,
        }
      : null,
    phone
      ? {
          icon: "fa-phone",
          label: data.details?.phone || "Phone",
          value: phone,
          href: `tel:${phone}`,
        }
      : null,
    {
      icon: "fa-envelope-o",
      label: data.details?.email || "Email",
      value: email,
      href: `mailto:${email}`,
    },
  ].filter(Boolean);

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-simple">
          <div className="contact-intro section-title">
            {data.kicker ? <p className="contact-kicker">{data.kicker}</p> : null}
            <h2>{data.title}</h2>
            {data.lead ? <p className="contact-lead">{data.lead}</p> : null}
          </div>

          <div className="contact-actions" aria-label={data.actionsAria || "Contact options"}>
            {contactActions.map((action, index) => (
              <a
                key={`${action.label}-${action.href}`}
                className={index === 0 ? "btn btn-custom contact-action-primary" : "contact-action-secondary"}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
              >
                {action.label}
              </a>
            ))}
          </div>

          <ul className="contact-detail-list" aria-label={data.directDetailsTitle || "Contact details"}>
            {contactDetails.map((item) => (
              <li className="contact-detail" key={`${item.label}-${item.value}`}>
                <span className="contact-detail-label">
                  <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                  {item.label}
                </span>
                {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
