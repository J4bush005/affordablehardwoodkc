import React from "react";
import ScrollToTop from "../ScrollToTop";
import BeforeAfter from "../BeforeAfter";
import Classics from "../images/Floor 2 After 6.webp";
import LVTs from "../images/LVT.webp";
import Customs from "../images/Finish After 4.webp";
import Stairss from "../images/IMG_0286.webp";
import Church from "../images/Church 14.webp";
import Footer from "../Footer";

function Gallery() {

  return (
    <>
      <ScrollToTop />
      <BeforeAfter/>
      <section id="first-row">
        <div className="d-flex mt-3">
          <div className="col">
            {" "}
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  id="classic-image"
                  src={Classics}
                  alt=""
                  className="figure-img img-fluid rounded"
                />
                <figcaption id="classic-text" className="figure-caption">
                  Classic Hardwood
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  id="classic-image"
                  src={LVTs}
                  alt=""
                  className="figure-img img-fluid rounded"
                />
                <figcaption id="classic-text" className="figure-caption">
                  Luxury Vinyl Tile
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  id="classic-image"
                  src={Church}
                  alt=""
                  className="figure-img img-fluid rounded"
                />
                <figcaption id="classic-text" className="figure-caption">
                  Commercial Floors
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="third-row">
        <div className="d-flex mt-3">
          <div className="col-4">
            {" "}
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  id="classic-image"
                  src={Customs}
                  alt=""
                  className="figure-img img-fluid rounded"
                />
                <figcaption id="classic-text" className="figure-caption">
                  Custom Designs
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-4">
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  id="classic-image"
                  src={Stairss}
                  alt=""
                  className="figure-img img-fluid rounded"
                />
                <figcaption id="classic-text" className="figure-caption">
                  Stairs
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <Footer/>
    </>
  );
}

export default Gallery;
