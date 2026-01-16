import React from "react";
import "./privacy.css";

const SECTIONS = [
  {
    id: "information-we-collect",
    number: "1",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We collect only the minimum necessary user-related information to provide and maintain your account and
          essential App features.
        </p>
        <p>
          <strong>What We Collect:</strong>
        </p>
        <ul>
          <li>
            <strong>Account Information:</strong>
            <ul>
              <li>Email address (for login and account management)</li>
              <li>Username or display name</li>
              <li>Encrypted password (we do not store plaintext passwords)</li>
            </ul>
          </li>
          <li>
            <strong>Device Information:</strong>
            <ul>
              <li>Device type and operating system version (used for app compatibility)</li>
            </ul>
          </li>
        </ul>
        <div className="privacy-callout" role="note" aria-label="Important">
          <strong>Important:</strong> We do NOT collect or upload your photos or media in any way.
        </div>
      </>
    ),
  },
  {
    id: "how-we-use-your-information",
    number: "2",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use your information to (To be enabled, we don't use your information for now):</p>
        <ul>
          <li>Create and manage your account – Not enabled at the moment</li>
          <li>Provide access to App features – Not enabled at the moment</li>
          <li>Respond to support requests – Not enabled at the moment</li>
          <li>Comply with legal obligations (if applicable) – Not enabled at the moment</li>
        </ul>
        <p>We do not sell or share your data for marketing or advertising purposes.</p>
      </>
    ),
  },
  {
    id: "legal-basis-gdpr",
    number: "3",
    title: "Legal Basis for Processing (GDPR)",
    content: (
      <>
        <p>Under GDPR, we rely on the following legal bases:</p>
        <ul>
          <li>Performance of a contract: To deliver App services.</li>
          <li>Consent: For optional features (e.g., cloud backup, newsletters).</li>
          <li>Legitimate interest: To enhance and secure the App experience.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ccpa-disclosures",
    number: "4",
    title: "CCPA Disclosures (for California Residents)",
    content: (
      <>
        <p>Under the CCPA, California residents have specific rights regarding their personal information.</p>
        <p>
          <strong>Your CCPA Rights:</strong>
        </p>
        <ul>
          <li>
            <strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal
            information we have collected about you.
          </li>
          <li>
            <strong>Right to Delete:</strong> Request deletion of your personal information, subject to exceptions.
          </li>
          <li>
            <strong>Right to Opt-Out:</strong> We do not sell your data, so there is no need to opt-out of data sales.
          </li>
          <li>
            <strong>Right to Non-Discrimination:</strong> You will not receive discriminatory treatment for exercising
            your privacy rights.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:office@photobook-noir.com">office@photobook-noir.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    number: "5",
    title: "Data Security",
    content: (
      <>
        <p>
          The data is stored in Microsoft Azure Cloud. We take reasonable technical and organizational measures to
          protect your data from unauthorized access, alteration, or destruction. All user data, including login
          credentials, is securely stored and encrypted.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    number: "6",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain your personal information only as long as necessary to provide our services or comply with legal
          requirements. You can request data deletion at any time.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    number: "7",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Photobook Noir may integrate optional services like cloud backup. These are governed by their own privacy
          policies. We recommend reviewing them before enabling such features.
        </p>
      </>
    ),
  },
  {
    id: "international-data-transfers",
    number: "8",
    title: "International Data Transfers",
    content: (
      <>
        <p>For users in the European Economic Area (EEA), data will not be transferred outside EU by any means.</p>
      </>
    ),
  },
  {
    id: "children-privacy",
    number: "9",
    title: "Children’s Privacy",
    content: (
      <>
        <p>
          Photobook Noir is not intended for children under 13, and we do not knowingly collect personal information
          from children.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-policy",
    number: "10",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted in the App or on our website.
          Continued use of the App means you accept any changes.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    number: "11",
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions or want to exercise your data rights under GDPR or CCPA, contact us at:</p>
        <ul>
          <li>
            Email: <a href="mailto:office@photobook-noir.com">office@photobook-noir.com</a>
          </li>
          <li>
            Website:{" "}
            <a href="https://www.photobook-noir.com" target="_blank" rel="noopener noreferrer">
              www.photobook-noir.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

// Privacy Policy section styled similarly to Credits, but with better structure and navigation.
export const Privacy = () => {
  return (
    <div id="privacy">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>Privacy Policy</h2>
            <p className="small">Effective Date: 1st of March 2025</p>
            <p>
              Photobook Noir ("we", "us", or "our") respects your privacy and is committed to protecting your personal
              data. This Privacy Policy explains how we collect, use, and protect your information when you use our
              mobile and desktop application ("App"), in accordance with the General Data Protection Regulation (GDPR)
              and the California Consumer Privacy Act (CCPA).
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <article className="privacy-article" aria-label="Privacy Policy">
              <nav className="privacy-toc" aria-label="Table of contents">
                <h3 className="privacy-toc-title">On this page</h3>
                <ol className="privacy-toc-list">
                  {SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        {section.number}. {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="privacy-sections">
                {SECTIONS.map((section, idx) => (
                  <section key={section.id} className="privacy-section" aria-labelledby={`${section.id}-title`}>
                    <h3 id={`${section.id}-title`} className="privacy-section-title">
                      <a className="privacy-anchor" href={`#${section.id}`} id={section.id} aria-label={`${section.title} link`}>
                        {section.number}. {section.title}
                      </a>
                    </h3>
                    <div className="privacy-section-content">{section.content}</div>
                    {idx !== SECTIONS.length - 1 ? <hr className="privacy-divider" /> : null}
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
