import React from "react";
import { getSiteContent, languageOptions } from "../data/siteContent";
import { useLanguage } from "../i18n/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const label = getSiteContent(language).footer.languageLabel;

  return (
    <div className="floating-language-switcher" aria-label={label}>
      <span className="floating-language-switcher__label">{label}</span>
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