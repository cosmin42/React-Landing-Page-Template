import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CONSENT_COOKIE_NAME = "photobook_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

const getCookieValue = (name) => {
  if (typeof document === "undefined") {
    return "";
  }

  const prefix = `${name}=`;
  const match = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(prefix));

  return match ? decodeURIComponent(match.slice(prefix.length)) : "";
};

const setConsentCookie = (value) => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax`;
};

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!getCookieValue(CONSENT_COOKIE_NAME));
  }, []);

  const handleConsent = (value) => {
    setConsentCookie(value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="cookie-banner" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          We use a small cookie to remember your privacy choice and keep the site working as expected. You can read
          more in our <Link to="/privacy#website-cookies">Privacy Policy</Link>.
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn btn-custom cookie-banner__button" onClick={() => handleConsent("accepted")}>
            Accept cookies
          </button>
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--secondary"
            onClick={() => handleConsent("essential")}
          >
            Essential only
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CookieBanner;