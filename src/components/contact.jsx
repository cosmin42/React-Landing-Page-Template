import React from "react";
import "./contact.css";

export const Contact = (props) => {
  const email = props.data?.email || "office@photobook-noir.com";
  const phone = props.data?.phone?.trim();
  const address = props.data?.address?.trim();

  const contactCards = [
    {
      eyebrow: "Support",
      title: "Need help with a project?",
      body: "Ask about the app, export workflow, or anything blocking your next photo book.",
      href: `mailto:${email}`,
      cta: "Email support",
    },
    {
      eyebrow: "Feedback",
      title: "Have an idea worth building?",
      body: "Send feature requests, rough concepts, or friction points you want improved next.",
      href: `mailto:${email}?subject=Feature%20Suggestion`,
      cta: "Share a feature idea",
    },
    {
      eyebrow: "Community",
      title: "Join the Discord room",
      body: "Follow product updates, ask quick questions, and stay close to the roadmap.",
      href: "https://discord.gg/WJPDWy3Sfh",
      cta: "Open Discord",
      external: true,
    },
  ];

  const contactDetails = [
    address
      ? {
          icon: "fa-map-marker",
          label: "Based in",
          value: address,
          href: null,
        }
      : null,
    phone
      ? {
          icon: "fa-phone",
          label: "Phone",
          value: phone,
          href: `tel:${phone}`,
        }
      : null,
    {
      icon: "fa-envelope-o",
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
  ].filter(Boolean);

  const socialLinks = [
    {
      name: "LinkedIn",
      note: "Product updates and professional context",
      href: props.data?.linkedin,
    },
    {
      name: "Bluesky",
      note: "Quick notes, previews, and experiments",
      href: props.data?.bluesky,
    },
    {
      name: "TikTok",
      note: "Short-form process clips and walkthroughs",
      href: props.data?.tiktok,
    },
    {
      name: "YouTube",
      note: "Longer demos, guides, and feature tours",
      href: props.data?.youtube,
    },
  ].filter((item) => item.href);

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row contact-layout">
            <div className="col-md-7">
              <div className="contact-intro section-title">
                <p className="contact-kicker">Start a conversation</p>
                <h2>Get In Touch</h2>
                <p className="contact-lead">
                  Choose the fastest path depending on what you need: direct support, product feedback, or a
                  quick chat with the community.
                </p>
              </div>

              <div className="contact-card-grid" aria-label="Primary contact actions">
                {contactCards.map((card) => (
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
                <span className="contact-note-label">Best for longer questions</span>
                <p>
                  Email is the right channel for support threads, detailed bug reports, or requests that need
                  screenshots and context.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="contact-panel contact-info">
                <div className="contact-panel-header">
                  <p className="contact-panel-kicker">Direct details</p>
                  <h3>Reach Photo Book Noir directly</h3>
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
                  <span>Response rhythm</span>
                  <p>Messages are reviewed regularly, with Discord best for quick check-ins and email best for deeper follow-up.</p>
                </div>

                <div className="social social-links-wrap">
                  <div className="social-links-header">
                    <p className="contact-panel-kicker">Elsewhere</p>
                    <p className="social-links-intro">Find Photo Book Noir across the channels best suited for quick updates, deep dives, and behind-the-scenes notes.</p>
                  </div>
                  <ul aria-label="Social links">
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
