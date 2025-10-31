import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from 'react-router-dom';

export const Navigation = (props) => {
  const location = useLocation();
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
  const isPrivacy = location.pathname === '/privacy-policy';
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
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            Photo Book Noir
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
                  <a href="#testflight" className="page-scroll" onClick={closeMobileMenu}>TestFlight</a>
                </li>
                <li>
                  <a href="#features" className="page-scroll" onClick={closeMobileMenu}>Features</a>
                </li>
                <li>
                  <a href="#portfolio" className="page-scroll" onClick={closeMobileMenu}>Screenshots</a>
                </li>
                <li>
                  <a href="#about" className="page-scroll" onClick={closeMobileMenu}>About</a>
                </li>
                <li>
                  <a href="#contact" className="page-scroll" onClick={closeMobileMenu}>Contact & Support</a>
                </li>
              </>
            )}
            <li className={isCredits ? 'active' : ''}><Link to="/credits" onClick={closeMobileMenu}>Credits</Link></li>
            <li className={isPrivacy ? 'active' : ''}><Link to="/privacy-policy" onClick={closeMobileMenu}>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
