import React, { Component } from "react";
import BlogBanner from "../components/Blog/Banner";
import UnderBanner from "../components/Blog/UnderBanner";
import { PostSingle } from "../components/Blog/PostSingle";

export default class PostPage extends Component {
  render() {
    return (
      <div>
        <BlogBanner />
        <UnderBanner />
        <PostSingle />
      </div>
    );
  }
}
