import React from "react";
import { Link } from "react-router-dom";
import { getSiteContent } from "../i18n/translations/siteContent";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./languageSwitcher";

export const Footer = () => {
  const { language } = useLanguage();
  const footer = getSiteContent(language).footer;

  return (
    <div id="footer">
      <div className="container text-center">
        <div className="footer-links" aria-label={footer.linksAria}>
          <Link to="/credits">{footer.credits}</Link>
          <Link to="/privacy">{footer.privacy}</Link>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Footer;