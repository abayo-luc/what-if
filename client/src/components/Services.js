import React from "react";

const Services = params => {
  return (
    <section class="services py-5" id="services">
      <div class="container py-3">
        <h3 class="heading">What We Do</h3>
        <div class="row service-grids">
          <div class="col-lg-4 col-md-6 agile w3-icon-grid1">
            <h3>
              <i class="fas mr-2 fa-home" aria-hidden="true" /> Family Care
            </h3>
            <p>
              Assisting and helping vulnerable children to have noram childhood
              experience like any other child
            </p>
          </div>
          <div class="col-lg-4 col-md-6 agile mt-md-0 mt-sm-5 mt-4 w3-icon-grid1">
            <h3>
              <i class="fa mr-2 fa-users" aria-hidden="true" />Mentorship
            </h3>
            <p>
              Morbi viverra lacus commodo felis semper, eu iaculis lectus
              feugiat.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 agile mt-lg-0 mt-sm-5 mt-4 w3-icon-grid1">
            <h3>
              <i class="fa mr-2 fa-graduation-cap" aria-hidden="true" />
              Sponsorship
            </h3>
            <p>Education sponsorship.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
