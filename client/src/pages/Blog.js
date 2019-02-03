import React, { Component } from "react";
import { Link } from "react-router-dom";
import BlogBanner from "../components/Blog/Banner";
import UnderBanner from "../components/Blog/UnderBanner";
import BlogGrid from "../components/Blog/BlogGrid";
import Footer from "../components/Footer";
import AddButton from "../components/AddButton";
import axios from "axios";
import EventDialog from "./EventDialog";

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      token: "",
      user: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/v1/posts")
      .then(async response => {
        const { posts } = response.data;
        const token = await localStorage.getItem("token");
        const user = await localStorage.getItem("user");
        this.setState({
          posts: [...posts],
          token,
          user
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
        {this.state.token && this.state.user ? (
          <div style={styles.buttonsContainer}>
            <Link to="/posts_new" style={styles.rightbottom}>
              <AddButton add={true} />
            </Link>
            <EventDialog />
          </div>
        ) : null}
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

const styles = {
  buttonsContainer: {
    // position: "relative"
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  rightbottom: {
    // position: "absolute",
    // top: "16%",
    right: "100%"
  }
};
