import React from "react";

export const BlogBanner = params => {
  return (
    <div class="w3l-hear-top">
      <header>
        <div class="logo">
          <h1>
            <a href="/" class="text-center">
              WhatIf - Rwanda <span class="d-block">Blog</span>
            </a>
          </h1>
        </div>

        <div class="w3ls_search">
          <div class="cd-main-header">
            <ul class="cd-header-buttons">
              <li>
                <a class="cd-search-trigger" href="#cd-search">
                  <span />
                </a>
              </li>
            </ul>
          </div>
          <div id="cd-search" class="cd-search">
            <form action="#" method="post">
              <input name="Search" type="search" placeholder="search site" />
            </form>
          </div>
        </div>
        <div class="clearfix" />
      </header>

      <div class="diagonal-header">
        <section class="diagonal-stripe-one inner-bg">
          <div class="container">
            <div class="ml-md-5 pl-md-5" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogBanner;
