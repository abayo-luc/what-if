import React from "react";

const Testimonials = () => {
  return (
    <div class="testimonials-section">
      <section class="testimonials py-5" id="testimonials">
        <div class="container py-3">
          <h3 class="heading">Testimonials</h3>
          <div class="test-grids">
            <div class=" clients">
              <div class="sreen-gallery-cursual">
                <div id="owl-demo" class="owl-carousel">
                  <div class="item-owl">
                    <div class="test-image">
                      <img
                        src={require("..//images/test1.jpg")}
                        alt=" "
                        class="img-fluid"
                      />
                    </div>
                    <div class="test-review">
                      <h5>Henry mark</h5>
                      <p>
                        {" "}
                        <span>
                          <i class="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        Polite sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore etdolorema gnaaliquya merat, sed diam
                        voluptua.sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Utenimad minimveniam, quis nostrud
                        exercitation ullamco sed do eiusmod tempor incididunt
                        <span>
                          <i class="fa fa-quote-right" aria-hidden="true" />
                        </span>
                      </p>
                      <p class="date">2 days ago</p>
                    </div>
                  </div>
                  <div class="item-owl">
                    <div class="test-image">
                      <img
                        src={require("../images/test1.jpg")}
                        alt=" "
                        class="img-fluid"
                      />
                    </div>
                    <div class="test-review">
                      <h5>Smith joe</h5>
                      <p>
                        {" "}
                        <span>
                          <i class="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        Polite sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et doloremagna aliquyam erat, sed
                        diam voluptua.sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Utenimad minimveniam, quis
                        nostrud exercitation ullamco sed do eiusmod tempor
                        incididunt
                        <span>
                          <i class="fa fa-quote-right" aria-hidden="true" />
                        </span>
                      </p>
                      <p class="date">4 days ago</p>
                    </div>
                  </div>
                  <div class="item-owl">
                    <div class="test-image">
                      <img
                        src={require("../images/test1.jpg")}
                        alt=" "
                        class="img-fluid"
                      />
                    </div>
                    <div class="test-review">
                      <h5>Steave john</h5>
                      <p>
                        {" "}
                        <span>
                          <i class="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        Polite sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et doloremagna aliquyam erat, sed
                        diam voluptua.sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Utenimad minimveniam, quis
                        nostrud exercitation ullamco sed do eiusmod tempor
                        incididunt
                        <span>
                          <i class="fa fa-quote-right" aria-hidden="true" />
                        </span>
                      </p>
                      <p class="date">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
