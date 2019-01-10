import React from "react";

export const About = params => {
  return (
    <section class="about py-5" id="about">
      <div class="container py-3">
        <h3 class="heading">About Us</h3>
        <div class="row about-grids">
          <div class="col-lg-4">
            <h4>Why WhatIf Rwanda?</h4>
            <p>
              The purpose of this program is to help Rwandan Vulnerable kids by
              offering love and care that they deserve from passionate Rwandan
              youth who know how it hurts to feel lonely. Rwanda has largely
              been regarded as one of Africa’s success stories. In December 2016
              we had a chance to talk to one of girls who was begging in
              Kimironko taxi park and from our small conversation We learned
              that what hurts these children most lonelyness.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 my-lg-0 my-5">
            <img
              src={require("../images/gallery/silas.png")}
              alt=""
              class="img-fluid founder-img"
            />
          </div>
          <div class="col-lg-4">
            <p>
              {" "}
              Some people look at them as if they are outcast or nobodies but
              these children have big dreams like any other healthy child you
              may have left home. From that small talk, we got to understand
              that money is not the only thing these children need but love and
              care. This can be done through giving of our time and showing them
              that we care, offering free meal or clothing. WHAT-IF is an
              organization that hopes to make a change in the lives of these
              children. This will be in form of mentorship and provision of
              basic needs to these children in any capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
