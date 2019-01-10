import React from "react";
import { Link } from "react-router-dom";
export const BlogGrid = params => {
  return (
    <div class="col-lg-4 col-md-6 card-holder">
      <div class="card">
        <div class="card-header p-0">
          <a href="#">
            <img
              class="card-img-bottom"
              src={require("../../images/g3.jpg")}
              alt="Card image cap"
            />
          </a>
        </div>
        <div class="card-body">
          <div class="border-bottom py-2">
            <h5 class="blog-title card-title font-weight-bold">
              <Link to="/posts">The Title</Link>
            </h5>
          </div>
          <div class="blog_w3icon pt-4">
            <span>
              {" "}
              <i class="fas fa-user mr-2" />
              Amdin
            </span>
            <span class="ml-3">
              {" "}
              <i class="far fa-heart mr-1" />
              34
            </span>
          </div>
          <p class="card-text mt-3">
            Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci
            porta sed magna dictum dapibus.
          </p>
          <a class="blog-btn text-dark" href="#">
            Read more
          </a>
        </div>
        <div class="card-footer">
          <p class="card-text text-right">
            <small class="text-muted">7th Jan 2018</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
