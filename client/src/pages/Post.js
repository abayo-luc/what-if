import React, { Component } from "react";
import BlogBanner from "../components/Blog/Banner";
import UnderBanner from "../components/Blog/UnderBanner";
import RichTextEditor from "react-rte";
import axios from "axios";
export default class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover:
        "https://res.cloudinary.com/dghepsznx/image/upload/v1549123822/WhatIf/placeholder-image.jpg",
      title: "",
      updatedAt: "",
      content: RichTextEditor.createEmptyValue()
    };
  }
  componentDidMount() {
    const {
      params: { id }
    } = this.props.match;
    axios
      .get(`/api/v1/posts/${id}`)
      .then(response => {
        const { title, content, updatedAt, cover } = response.data.post;
        console.log(title, content);
        this.setState({
          cover,
          title,
          updatedAt: new Date(updatedAt).toDateString(),
          content: RichTextEditor.createValueFromString(content, "html")
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <BlogBanner />
        <UnderBanner path="Post" />
        <div class="single-w3l py-5">
          <div class="container py-xl-5 py-lg-3">
            <div class="row inner_sec_info pt-md-4">
              <div class="col-lg-8 single-left">
                <div class="single-left1">
                  <img src={this.state.cover} alt=" " class="img-fluid" />
                  <h6 class="blog-first text-dark my-4">
                    <i class="far fa-user mr-2" />
                    Admin
                  </h6>
                  <ul class="blog_list my-3">
                    <li>{this.state.updatedAt}</li>
                    <li class="mx-3">
                      <a href="#">
                        <i class="far fa-heart mr-1" />
                        22
                      </a>
                    </li>
                  </ul>
                  <h5 class="card-title">
                    <h2 class="post-title">{this.state.title}</h2>
                  </h5>
                  <RichTextEditor readOnly={true} value={this.state.content} />

                  {/* <p>
                  <i class="my-3 font-weight-bold">
                    Nunc a urna turpis. Aenean vestibulum elementum nisi. Aenean
                    aliquet nec mi et lacinia. Aliquam maximus iaculis mi elit
                    in scelerisque malesuada, tellus leo viverra massa, sed
                    efficitur orci efficitur nec.
                  </i>{" "}
                </p> */}
                </div>
                <div class="admin p-4 my-4">
                  <p>
                    <i class="fas fa-quote-left mr-2" />
                    nibh eu consequat magna ipsum ac ex. Nulla iaculis tincidunt
                    elit, tortor luctus sit amet. Morbi in porta dolor. Morbi
                    eget dui elit. consequat magna ipsum ac ex, Nulla iaculis
                    consequat magna ipsum ac ex Nulla iaculis.
                    <i class="fas fa-quote-right ml-2" />
                  </p>
                  <a
                    href="#"
                    class="mt-3 font-weight-bold text-right blockquote-footer"
                  >
                    James Doe
                  </a>
                </div>
              </div>
              <div class="col-lg-4 event-right mt-lg-0 mt-sm-5 mt-4">
                <div class="event-right1">
                  <div class="search1">
                    <form class="form-inline" action="#" method="post">
                      <input
                        class="form-control rounded-0 mr-sm-2"
                        type="search"
                        placeholder="Search Here"
                        aria-label="Search"
                      />
                      <input
                        class="btn bg-dark text-white rounded-0 mt-3 w-100"
                        type="submit"
                        value="Search"
                      />
                    </form>
                  </div>
                  <div class="categories my-4 p-4 border">
                    <h3 class="blog-title ">Related Articles</h3>
                    <ul>
                      <li class="mt-3">
                        <i class="fas fa-check mr-2" />
                        <a href="#">At vero eos et accusamus iusto</a>
                      </li>
                      <li class="mt-3">
                        <i class="fas fa-check mr-2" />
                        <a href="#">Sed ut perspiciatis unde omnis</a>
                      </li>
                      <li class="mt-3">
                        <i class="fas fa-check mr-2" />
                        <a href="#">Accusantium doloremque lauda</a>
                      </li>
                      <li class="mt-3">
                        <i class="fas fa-check mr-2" />
                        <a href="#">Vel illum qui dolorem fugiat quo</a>
                      </li>
                      <li class="mt-3">
                        <i class="fas fa-check mr-2" />
                        <a href="#">Quis autem vel eum repreh</a>
                      </li>
                      <li class="mt-3">
                        <i class="fas fa-check mr-2" />
                        <a href="#">Neque porro quisquam est qui</a>
                      </li>
                    </ul>
                  </div>
                  <div class="posts p-4 border">
                    <h3 class="blog-title ">Our Events</h3>
                    <div class="posts-grids">
                      <div class="row posts-grid mt-4">
                        <div class="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
                          <h4>
                            <a href="#" class="text-dark">
                              Sed ut perspiciatis unde omni
                            </a>
                          </h4>
                          <ul class="wthree_blog_events_list mt-2">
                            <li class="mr-2 text-dark">
                              <i
                                class="fa fa-calendar mr-2"
                                aria-hidden="true"
                              />
                              15/05/18
                            </li>
                            <li>
                              <i class="fa fa-user" aria-hidden="true" />
                              <a href="#" class="text-dark ml-2">
                                Admin
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="row posts-grid mt-4">
                        <div class="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
                          <h4>
                            <a href="#" class="text-dark">
                              Sed ut perspiciatis unde omni
                            </a>
                          </h4>
                          <ul class="wthree_blog_events_list mt-2">
                            <li class="mr-2 text-dark">
                              <i
                                class="fa fa-calendar mr-2"
                                aria-hidden="true"
                              />
                              23/05/18
                            </li>
                            <li>
                              <i class="fa fa-user" aria-hidden="true" />
                              <a href="#" class="text-dark ml-2">
                                Admin
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="row posts-grid mt-4">
                        <div class="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
                          <h4>
                            <a href="#" class="text-dark">
                              Sed ut perspiciatis unde omni
                            </a>
                          </h4>
                          <ul class="wthree_blog_events_list mt-2">
                            <li class="mr-2 text-dark">
                              <i
                                class="fa fa-calendar mr-2"
                                aria-hidden="true"
                              />
                              13/06/18
                            </li>
                            <li>
                              <i class="fa fa-user" aria-hidden="true" />
                              <a href="#" class="text-dark ml-2">
                                Admin
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <aside class="side-bar my-4">
                  <div class="video-sec bc_sub">
                    <h4>Featured Video</h4>
                    <div class="video-block">
                      <div class="embed-responsive embed-responsive-4by3">
                        <iframe
                          width="460"
                          height="250"
                          src="https://www.youtube.com/embed/aI-QmC5asnA"
                          allowfullscreen
                        />
                      </div>
                    </div>
                  </div>
                </aside>
                <div class="tags mt-4 p-4 border">
                  <div class="footerv2-w3ls">
                    <h3 class="blog-title">Share</h3>
                    <ul class="social-iconsv2 agileinfo pt-3">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}
