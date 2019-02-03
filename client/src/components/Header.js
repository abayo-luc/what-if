import React from "react";
import { Link } from "react-router-dom";
export const Header = params => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-4">
          <h1>
            <a className="navbar-brand" href="index.html">
              WhatIf<span>Rwanda</span>
            </a>
          </h1>

          <button
            className="navbar-toggler ml-md-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-lg-auto text-center">
              <li className="nav-item active mr-lg-4">
                <a className="nav-link" href="index.html">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mr-lg-4">
                <a className="nav-link scroll" href="#about">
                  about
                </a>
              </li>
              <li className="nav-item mr-lg-4">
                <a className="nav-link scroll" href="#services">
                  What We Do
                </a>
              </li>
              <li className="nav-item mr-lg-4">
                <a className="nav-link scroll" href="#experience">
                  Events
                </a>
              </li>
              <li className="nav-item mr-lg-4">
                <a className="nav-link scroll" href="#blog">
                  Highlight
                </a>
              </li>
              <li className="dropdown nav-item mr-lg-4">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle "
                >
                  More
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#projects" className="nav-link scroll">
                      Gallery
                    </a>
                  </li>
                  <div className="dropdown-divider" />
                  <li className="nav-item">
                    <a href="#testimonials" className="nav-link scroll">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/user_login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
