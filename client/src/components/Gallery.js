import React from "react";

const Gallery = () => {
  return (
    <div class="gallery py-5" id="projects">
      <div class="container py-3">
        <h3 class="heading">Gallery</h3>
        <div class="row gallery_grid-more project-grids w3ls">
          <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 agileits_w3layouts_gallery_grid1 hover14 column">
            <div class="w3_agile_gallery_effect">
              <a
                href="images/gallery/9.jpg"
                data-lightbox="example-set"
                data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen."
              >
                <figure>
                  <img
                    src={require("../images/gallery/9.jpg")}
                    alt=" "
                    class="img-responsive"
                  />
                </figure>
              </a>
            </div>
          </div>
          <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 agileits_w3layouts_gallery_grid1 hover14 column">
            <div class="w3_agile_gallery_effect">
              <a
                href="images/gallery/7.jpg"
                data-lightbox="example-set"
                data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen."
              >
                <figure>
                  <img
                    src={require("../images/gallery/7.jpg")}
                    alt=" "
                    class="img-responsive"
                  />
                </figure>
              </a>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 agileits_w3layouts_gallery_grid1 hover14 column">
            <div class="w3_agile_gallery_effect">
              <a
                href="images/gallery/10.jpg"
                data-lightbox="example-set"
                data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen."
              >
                <figure>
                  <img
                    src={require("../images/gallery/10.jpg")}
                    alt=" "
                    class="img-responsive"
                  />
                </figure>
              </a>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 agileits_w3layouts_gallery_grid1 hover14 column">
            <div class="w3_agile_gallery_effect">
              <a
                href="images/gallery/2.jpg"
                data-lightbox="example-set"
                data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen."
              >
                <figure>
                  <img
                    src={require("../images/gallery/2.jpg")}
                    alt=" "
                    class="img-responsive"
                  />
                </figure>
              </a>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
        <div class="row gallery_grid-more">
          <div class="col-md-6 p-0 col-sm-6 col-12 pt-sm-0 pt-2 agileits_w3layouts_gallery_grid1 w3layouts_gallery_grid1 hover14 column">
            <div class="w3_agile_gallery_effect">
              <a
                href="images/gallery/11.jpg"
                data-lightbox="example-set"
                data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen."
              >
                <figure>
                  <img
                    src={require("../images/gallery/11.jpg")}
                    alt=" "
                    class="img-responsive"
                  />
                </figure>
              </a>
            </div>
          </div>
          <div class="col-md-6 p-0 col-sm-6 col-12 pt-sm-0 pt-2 agileits_w3layouts_gallery_grid1 w3layouts_gallery_grid1 hover14 column">
            <div class="w3_agile_gallery_effect">
              <a
                href="images/gallery/4.jpg"
                data-lightbox="example-set"
                data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen."
              >
                <figure>
                  <img
                    src={require("../images/gallery/4.jpg")}
                    alt=" "
                    class="img-responsive"
                  />
                </figure>
              </a>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
