import React from "react";

export const Banner = params => {
  return (
    <section class="banner">
      <div class="banner-layer">
        <div class="container">
          <div class="row agile_banner_info">
            <div class="col-md-7 agile_banner_margin">
              <h2>
                Welcome To WhatIf<span>Rwanda</span>
              </h2>
              <p>
                In our world we see many small children suffer and die. Some are
                born in abject poverty and starve. Some are tortured and beaten
                to death by their own parents. Some are cruelly put to death in
                war. On a daily basis, children are forced to live in poverty,
                violence, abuse and in all the other problems the world presents
                -- and it's taking place in alarming numbers.The pain and
                suffering ofeven one young and the innocent child do, indeed,
                bring home to us the fact of sin, evil and injustice in our
                world. And when we think of children, we should, perhaps, extend
                consideration of their plight to all members of society that are
                weak and vulnerable.
              </p>
              <a href="#"> Read More </a>
            </div>
            <div class="col-md-5 image_margin">
              <img
                src={require("../images/gallery/silas.png")}
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
