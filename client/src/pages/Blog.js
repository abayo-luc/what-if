import React, { Component } from "react";
import BlogBanner from "../components/Blog/Banner";
import UnderBanner from "../components/Blog/UnderBanner";
import BlogGrid from "../components/Blog/BlogGrid";
import Footer from "../components/Footer";

export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <BlogBanner />
        <UnderBanner />
        <div class="container pt-3">
          <div class="row py-sm-5 pb-5">
            <BlogGrid />
            <BlogGrid />
            <BlogGrid />
            <BlogGrid />
            <BlogGrid />
            <BlogGrid />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
