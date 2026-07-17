import React from "react";
import { getSiteContent, languageOptions } from "../i18n/translations/siteContent";
import { useLanguage } from "../i18n/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const label = getSiteContent(language).footer.languageLabel;

  if (languageOptions.length <= 1) {
    return null;
  }

  return (
    <div className="footer-language-switcher" aria-label={label}>
      <span className="footer-language-switcher__label">{label}</span>
      <div className="language-switcher" role="group" aria-label={label}>
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            className={`language-switcher__button${language === option.code ? " is-active" : ""}`}
            aria-pressed={language === option.code}
            onClick={() => setLanguage(option.code)}
          >
            {option.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;