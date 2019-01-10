import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import BlogPage from "../pages/Blog";
import PostPage from "../pages/Post";
export default class Client extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/posts" component={PostPage} />
          </div>
        </Router>
      </div>
    );
  }
}
