import React from "react";

const EventSingle = params => {
  console.log(params);
  if (params.id % 2 === 0) {
    return (
      <div class="row exp-grids">
        <div class="col-md-3 exp wthree">
          <h4>{params.event.title}</h4>
          <h5>{params.event.createdAt}</h5>
        </div>
        <div class="col-md-9 mt-md-0 mt-4 wthree">
          <p>
            Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int.
            lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui
            nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam ac
            mattis mi. Donec tincidunt leoelit dictum viverra luctus.
          </p>
          <p>Location: {params.event.location}</p>
        </div>
      </div>
    );
  }

  return (
    <div class="row exp-grid1 mt-5 wthree">
      <div class="col-md-9 mb-md-0 mb-4">
        <p>
          Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem
          ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui nunc.
          Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam ac mattis
          mi. Donec tincidunt leoelit dictum viverra luctus.
        </p>
        <p>Location: {params.event.location}</p>
      </div>
      <div class="col-md-3 exp1 wthree">
        <h4>{params.event.title}</h4>
        <h5>{params.event.createdAt}</h5>
      </div>
    </div>
  );
};

export default EventSingle;
