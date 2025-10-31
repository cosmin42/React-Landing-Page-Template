import React from "react";

// Privacy Policy section styled similarly to Credits
export const Privacy = () => {
  return (
    <div id="privacy">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>Privacy Policy</h2>
            <p className="small">Effective Date: 1st of March 2025</p>
            <p>
              Photobook Noir ("we", "us", or "our") respects your privacy and is committed to protecting your
              personal data. This Privacy Policy explains how we collect, use, and protect your information when you use
              our mobile and desktop application ("App"), in accordance with the General Data Protection Regulation (GDPR)
              and the California Consumer Privacy Act (CCPA).
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h3>1. Information We Collect</h3>
            <p>
              We collect only the minimum necessary user-related information to provide and maintain your account and
              essential App features.
            </p>
            <p><strong>What We Collect:</strong></p>
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
            <p><em>Important:</em> We do NOT collect or upload your photos or media in any way.</p>

            <hr />
            <h3>2. How We Use Your Information</h3>
            <p>
              We use your information to (To be enabled, we don't use your information for now):
            </p>
            <ul>
              <li>Create and manage your account – Not enabled at the moment</li>
              <li>Provide access to App features – Not enabled at the moment</li>
              <li>Respond to support requests – Not enabled at the moment</li>
              <li>Comply with legal obligations (if applicable) – Not enabled at the moment</li>
            </ul>
            <p>We do not sell or share your data for marketing or advertising purposes.</p>

            <hr />
            <h3>3. Legal Basis for Processing (GDPR)</h3>
            <p>Under GDPR, we rely on the following legal bases:</p>
            <ul>
              <li>Performance of a contract: To deliver App services.</li>
              <li>Consent: For optional features (e.g., cloud backup, newsletters).</li>
              <li>Legitimate interest: To enhance and secure the App experience.</li>
            </ul>

            <hr />
            <h3>4. CCPA Disclosures (for California Residents)</h3>
            <p>Under the CCPA, California residents have specific rights regarding their personal information.</p>
            <p><strong>Your CCPA Rights:</strong></p>
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
              To exercise any of these rights, please contact us at <a href="mailto:office@photobook-noir.com">office@photobook-noir.com</a>.
            </p>

            <hr />
            <h3>5. Data Security</h3>
            <p>
              The data is stored in Microsoft Azure Cloud. We take reasonable technical and organizational measures to
              protect your data from unauthorized access, alteration, or destruction. All user data, including login
              credentials, is securely stored and encrypted.
            </p>

            <hr />
            <h3>6. Data Retention</h3>
            <p>
              We retain your personal information only as long as necessary to provide our services or comply with legal
              requirements. You can request data deletion at any time.
            </p>

            <hr />
            <h3>7. Third-Party Services</h3>
            <p>
              Photobook Noir may integrate optional services like cloud backup. These are governed by their own privacy
              policies. We recommend reviewing them before enabling such features.
            </p>

            <hr />
            <h3>8. International Data Transfers</h3>
            <p>
              For users in the European Economic Area (EEA), data will not be transferred outside EU by any means.
            </p>

            <hr />
            <h3>9. Children’s Privacy</h3>
            <p>
              Photobook Noir is not intended for children under 13, and we do not knowingly collect personal information
              from children.
            </p>

            <hr />
            <h3>10. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted in the App or on our website.
              Continued use of the App means you accept any changes.
            </p>

            <hr />
            <h3>11. Contact Us</h3>
            <p>
              If you have questions or want to exercise your data rights under GDPR or CCPA, contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:office@photobook-noir.com">office@photobook-noir.com</a></li>
              <li>Website: <a href="https://www.photobook-noir.com" target="_blank" rel="noopener noreferrer">www.photobook-noir.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
