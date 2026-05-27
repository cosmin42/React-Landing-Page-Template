import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from 'react-router-dom';
import { languageOptions, getSiteContent } from '../data/siteContent';
import { useLanguage } from '../i18n/LanguageContext';

export const Navigation = (props) => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const content = getSiteContent(language);
  const navigation = content.navigation;
  const onHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle style change when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu after clicking any link
  const closeMobileMenu = useCallback(() => {
    // If Bootstrap's jQuery collapse is present, use it; otherwise, noop
    if (typeof window !== 'undefined' && window.$ && typeof window.$('.navbar-collapse').collapse === 'function') {
      window.$('.navbar-collapse').collapse('hide');
    }
  }, []);

  const isCredits = location.pathname === '/credits';
  const isPrivacy = location.pathname === '/privacy' || location.pathname === '/privacy-policy';
  const isInfo = isCredits || isPrivacy;
  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-controls="bs-example-navbar-collapse-1"
            aria-expanded="false"
            aria-label={navigation.toggleLabel}
          >
            {" "}
            <span className="sr-only">{navigation.toggleLabel}</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            {navigation.brand}
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {onHome && (
              <>
                <li>
                  <a href="#about" className="page-scroll" onClick={closeMobileMenu}>{navigation.about}</a>
                </li>
                <li>
                  <a href="#subscribe" className="page-scroll" onClick={closeMobileMenu}>{navigation.subscribe || 'Subscribe'}</a>
                </li>
                <li>
                  <a href="#contact" className="page-scroll" onClick={closeMobileMenu}>{navigation.contact}</a>
                </li>
              </>
            )}
            <li className={`dropdown ${isInfo ? 'active' : ''}`}>
              <a
                href="#more"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                {navigation.more} <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li className={isCredits ? 'active' : ''}>
                  <Link to="/credits" onClick={closeMobileMenu}>{navigation.credits}</Link>
                </li>
                <li className={isPrivacy ? 'active' : ''}>
                  <Link to="/privacy" onClick={closeMobileMenu}>{navigation.privacy}</Link>
                </li>
              </ul>
            </li>
            <li className="navbar-language-item" aria-label={navigation.languageLabel}>
              <div className="language-switcher" role="group" aria-label={navigation.languageLabel}>
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className={`language-switcher__button${language === option.code ? ' is-active' : ''}`}
                    aria-pressed={language === option.code}
                    onClick={() => {
                      setLanguage(option.code);
                      closeMobileMenu();
                    }}
                  >
                    {option.shortLabel}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
