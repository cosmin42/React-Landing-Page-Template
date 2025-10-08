import React from "react";
import { Link, useLocation } from 'react-router-dom';

export const Navigation = (props) => {
  const location = useLocation();
  const onHome = location.pathname === '/';
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand" to="/">
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
                  <a href="#testflight" className="page-scroll">TestFlight</a>
                </li>
                <li>
                  <a href="#features" className="page-scroll">Features</a>
                </li>
                <li>
                  <a href="#about" className="page-scroll">About</a>
                </li>
                <li>
                  <a href="#contact" className="page-scroll">Contact</a>
                </li>
              </>
            )}
            <li><Link to="/credits">Credits</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
