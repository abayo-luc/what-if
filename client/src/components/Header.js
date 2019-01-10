import React from "react";
import { Link } from "react-router-dom";
export const Header = params => {
  return (
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light py-4">
          <h1>
            <a class="navbar-brand" href="index.html">
              WhatIf<span>Rwanda</span>
            </a>
          </h1>

          <button
            class="navbar-toggler ml-md-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-lg-auto text-center">
              <li class="nav-item active mr-lg-4">
                <a class="nav-link" href="index.html">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item mr-lg-4">
                <a class="nav-link scroll" href="#about">
                  about
                </a>
              </li>
              <li class="nav-item mr-lg-4">
                <a class="nav-link scroll" href="#services">
                  What We Do
                </a>
              </li>
              <li class="nav-item mr-lg-4">
                <a class="nav-link scroll" href="#experience">
                  Events
                </a>
              </li>
              <li class="nav-item mr-lg-4">
                <a class="nav-link scroll" href="#blog">
                  Highlight
                </a>
              </li>
              <li class="dropdown nav-item mr-lg-4">
                <a
                  href="#"
                  data-toggle="dropdown"
                  class="nav-link dropdown-toggle "
                >
                  More
                  <b class="caret" />
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li class="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a href="#projects" class="nav-link scroll">
                      Gallery
                    </a>
                  </li>
                  <div class="dropdown-divider" />
                  <li class="nav-item">
                    <a href="#testimonials" class="nav-link scroll">
                      Testimonials
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scroll" href="#contact">
                      Contact
                    </a>
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
