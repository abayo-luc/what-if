import React from "react";

const EventSingle = params => {
  return (
    <section class="experience py-5" id="experience">
      <div class="container py-3">
        <h3 class="heading">Events</h3>

        <div class="row exp-grids">
          <div class="col-md-3 exp wthree">
            <h4>The Title</h4>
            <h5>8th Jan 2019</h5>
          </div>
          <div class="col-md-9 mt-md-0 mt-4 wthree">
            <p>
              Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int.
              lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui
              nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam
              ac mattis mi. Donec tincidunt leoelit dictum viverra luctus.
            </p>
            <p>Location: Kimihurura</p>
          </div>
        </div>

        <div class="row exp-grid1 mt-5 wthree">
          <div class="col-md-9 mb-md-0 mb-4">
            <p>
              Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int.
              lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui
              nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam
              ac mattis mi. Donec tincidunt leoelit dictum viverra luctus.
            </p>
            <p>Location: Kimihurura</p>
          </div>
          <div class="col-md-3 exp1 wthree">
            <h4>The Title</h4>
            <h5>5th Jan 2018</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSingle;
