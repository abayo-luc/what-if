import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import BlogPage from "../pages/Blog";
import PostPage from "../pages/Post";
import NewPost from "../pages/NewPost";
//redux things
import { Provider } from "react-redux";
import store from "../store";

export default class Client extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/posts" component={PostPage} />
            <Route exact path="/new_post" component={NewPost} />
          </div>
        </Router>
      </Provider>
    );
  }
}
