import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
          <a href="http://www.templatewire.com" rel="nofollow">
            TemplateWire
          </a>
        </p>
        <div className="footer-links" aria-label="Footer links">
          <Link to="/credits">Credits</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;