import React from "react";
import ScrollToTop from "../ScrollToTop";
import BeforeAfter from "../BeforeAfter";
import Classics from "../images/Floor 2 After 6.webp";
import LVTs from "../images/LVT.webp";
import Customs from "../images/Finish After 4.webp";
import Stairss from "../images/IMG_0286.webp";
import Church from "../images/Church 14.webp";
import { useRef } from "react";
import Footer from "../Footer";
import Classic from "../Classic";
import LVT from "../LVT";
import Commercial from "../Commercial";
import Custom from "../Custom";
import Stairs from "../Stairs";

function Gallery() {
  const classic = useRef(null);
  const lvt = useRef(null);
  const commercial = useRef(null);
  const custom = useRef(null);
  const stair = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      <BeforeAfter />
      <section id="first-row">
        <div className="d-flex justify-content-evenly mt-3">
          <div className="col-6">
            {" "}
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  onClick={() => scrollToSection(classic)}
                  id="classic-img"
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
          <div className="col-6">
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  onClick={() => scrollToSection(lvt)}
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
        </div>
      </section>

      <section id="second-row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-6">
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  onClick={() => scrollToSection(commercial)}
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
        <div className="d-flex justify-content-evenly">
          <div className="col-6">
            {" "}
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  onClick={() => scrollToSection(custom)}
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
          <div className="col-6">
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  onClick={() => scrollToSection(stair)}
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

      <section id="classic-pics" ref={classic}>
      <Classic />
      </section>

     <section id="lvt-pics" ref={lvt}>
        <LVT/>
     </section>

     <section id="commericial-pics"ref={commercial}>
      <Commercial/>
     </section>

     <section id="custom-pics"ref={custom}>
      <Custom/>
     </section>

     <section id="stair-pics"ref={stair}>
      <Stairs/>
     </section>

      {/*FOOTER*/}
      <Footer/>
    </>
  );
}

export default Gallery;
