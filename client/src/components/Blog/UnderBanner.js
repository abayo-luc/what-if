import React from "react";

export const UnderBanner = params => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li class="breadcrumb-item ">
          <a href="/posts">Blog</a>
        </li>
        <li class="breadcrumb-item active">Post</li>
      </ol>
    </nav>
  );
};

export default UnderBanner;
