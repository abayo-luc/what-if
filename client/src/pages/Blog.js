import React, { Component } from "react";
import BlogBanner from "../components/Blog/Banner";
import UnderBanner from "../components/Blog/UnderBanner";
import BlogGrid from "../components/Blog/BlogGrid";
import Footer from "../components/Footer";
import axios from "axios";

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/v1/posts")
      .then(response => {
        const { posts } = response.data;
        console.log(posts);
        this.setState({
          posts: [...posts]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <BlogBanner />
        <UnderBanner />
        <div class="container pt-3">
          <div class="row py-sm-5 pb-5">
            {this.state.posts.map((post, index) => {
              return <BlogGrid post={post} key={index} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
