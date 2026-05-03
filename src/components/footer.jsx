import React from "react";
import { Link } from "react-router-dom";
import { getSiteContent } from "../data/siteContent";
import { useLanguage } from "../i18n/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();
  const footer = getSiteContent(language).footer;

  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          {footer.creditLine} {footer.designBy}{" "}
          <a href="http://www.templatewire.com" rel="nofollow">
            TemplateWire
          </a>
        </p>
        <div className="footer-links" aria-label={footer.linksAria}>
          <Link to="/credits">{footer.credits}</Link>
          <Link to="/privacy">{footer.privacy}</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;