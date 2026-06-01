import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSiteContent } from "../i18n/translations/siteContent";
import { useLanguage } from "../i18n/LanguageContext";

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
  const { language } = useLanguage();
  const cookie = getSiteContent(language).cookie;

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
    <aside className="cookie-banner" aria-live="polite" aria-label={cookie.ariaLabel}>
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          {cookie.textBefore}
          <Link to="/privacy#website-cookies">{cookie.linkLabel}</Link>
          {cookie.textAfter}
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn btn-custom cookie-banner__button" onClick={() => handleConsent("accepted")}>
            {cookie.accept}
          </button>
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--secondary"
            onClick={() => handleConsent("essential")}
          >
            {cookie.essential}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CookieBanner;