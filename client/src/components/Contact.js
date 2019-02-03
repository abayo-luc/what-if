import React from "react";

const Contact = () => {
  return (
    <section class="contact py-5" id="contact">
      <h3 class="heading">Contact</h3>
      <div class="row contact-grids">
        <div class="col-lg-5 contact-left">
          <h4 class="mb-4">Address Info</h4>
          <div class="row">
            <div class="col-1 pr-0 icon">
              <i class="fa fa-envelope-open" aria-hidden="true" />
            </div>
            <div class="col-11">
              <h5>Email</h5>
              <p>
                <a href="mailto:example@email.com"> whatif.rwanda@gmail.com</a>
              </p>
              <p>
                <a href="mailto:example1@email.com">silas.gasasira@yahoo.com</a>
              </p>
            </div>
            <div class="col-1 pr-0 icon mt-4">
              <i class="fa fa-phone" aria-hidden="true" />
            </div>
            <div class="col-11 mt-4">
              <h5>Phone</h5>
              <p> +250 789 553 464</p>
              <p> +250 789 277 275</p>
            </div>
            <div class="col-1 pr-0 icon mt-4">
              <i class="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div class="col-11 mt-4">
              <h5>Address</h5>
              <p>KG 15 Av 19</p>
              <p>Kigali - Rwanda</p>
            </div>
          </div>
        </div>
        <div class="col-lg-7 mt-lg-0 mt-5 contact-right">
          <h4 class="mb-4">Get In Touch</h4>
          <label>
            <i class="fa mr-2 fa-user" aria-hidden="true" /> Name
          </label>
          <input
            type="text"
            name="Name"
            value="Name"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'Name';}"
            required=""
          />
          <div class="clearfix" />
          <label>
            <i class="fas mr-2 fa-envelope-open" aria-hidden="true" />Email
          </label>
          <input
            type="email"
            name="Email"
            value="Email"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'Email';}"
            required=""
          />
          <div class="clearfix" />
          <label>
            <i class="fas mr-2 fa-phone" aria-hidden="true" />Phone
          </label>
          <input
            type="text"
            name="Phone"
            value="Phone"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'Phone';}"
            required=""
          />
          <div class="clearfix" />
          <label>
            <i class="fas mr-2 fa-edit" aria-hidden="true" />Message
          </label>
          <textarea
            name="Message"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'Message...';}"
            required=""
          >
            Message...
          </textarea>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
