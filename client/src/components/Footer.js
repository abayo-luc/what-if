import React from "react";

const Footer = () => {
  return (
    <footer class="py-5">
      <div class="container">
        <div class="agileinfo-grids">
          <div class="agile-grid-left agile-grid-right text-center">
            <div class="social mb-4">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab mr-2 fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab mr-2 fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab mr-2 fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright text-center">
          <p>
            © 2018 WhatIf Rwanda. All Rights Reserved | Design by{" "}
            <a href="#">Luc Abayo</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
