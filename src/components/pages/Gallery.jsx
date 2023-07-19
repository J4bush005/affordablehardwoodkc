import React from "react";
import ScrollToTop from "../ScrollToTop";
import BeforeAfter from "../BeforeAfter";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.webp";
import Face from "../images/face.webp";
import Linked from "../images/Linked.webp";
import Classic from "../images/Floor 2 After 6.webp";
import LVT from "../images/LVT.webp";
import Custom from "../images/Finish After 4.webp";
import Stair from "../images/IMG_0286.webp";
import Floor1 from "../images/Sand 6 After.webp";
import Floor2 from "../images/Floor 2 After 6.webp";
import Floor3 from "../images/Demo6.webp";
import Floor4 from "../images/Demo 10.webp";
import Floor5 from "../images/Repair 3 After 2.webp";
import Floor6 from "../images/Repair 3 After 3.webp";
import Floor8 from "../images/Demo 13.webp";
import Floor9 from "../images/Demo 14.webp";
import Floor10 from "../images/Demo 15.webp";
import Floor12 from "../images/Normal.webp";
import Floor13 from "../images/Normal2.webp";
import Floor14 from "../images/Normal5.webp";
import Floor15 from "../images/Normal3.webp";
import Floor16 from "../images/Normal4.webp";
import Floor17 from "../images/Normal6.webp";
import Floor20 from "../BeforeAfterPics/DB3.webp";
import Floor21 from "../BeforeAfterPics/DB4.webp";
import Floor22 from "../BeforeAfterPics/DB7.webp";
import Floor23 from "../BeforeAfterPics/DB8.webp";
import Floor19 from "../images/Normal8.webp";
import LVT1 from "../images/LVT.webp";
import LVT2 from "../images/LVT 2.webp";
import LVT3 from "../images/LVT 3 copy.webp";
import LVT4 from "../images/LVT 4.webp";
import LVT5 from "../images/LVT 5.webp";
import LVT6 from "../images/LVT 6.webp";
import LVT7 from "../images/LVT 7.webp";
import Church from "../images/Church 14.webp";
import Church2 from "../images/Church 15.webp";
import Church3 from "../images/Church 16.webp";
import Church4 from "../images/Church 17.webp";
import Church5 from "../images/Church 18.webp";
import Church6 from "../images/Church 19.webp";
import BB1 from "../BeforeAfterPics/DB16.webp";
import BB from "../BeforeAfterPics/DB17.webp";
import BB2 from "../BeforeAfterPics/DB18.webp";
import BB3 from "../BeforeAfterPics/DB19.webp";
import BB4 from "../BeforeAfterPics/DB20.webp";
import BB5 from "../BeforeAfterPics/DB21.webp";
import Custom2 from "../images/custom floor.webp";
import Custom3 from "../images/Custom Floor 2.webp";
import Custom4 from "../images/Custom Floor 3.webp";
import Custom5 from "../images/Custom Floor 4.webp";
import Custom6 from "../images/Custom Floor 5.webp";
import Custom7 from "../images/Custom Floor 6.webp";
import Custom8 from "../BeforeAfterPics/DB26.webp";
import Custom9 from "../BeforeAfterPics/DB27.webp";
import Custom10 from "../BeforeAfterPics/DB32.webp";
import Custom11 from "../BeforeAfterPics/DB33.webp";
import Custom12 from "../BeforeAfterPics/DB34.webp";
import Stair2 from "../images/Stairs2.webp";
import Stair3 from "../images/Stairs.webp";
import Final from "../BeforeAfterPics/DB35.webp";
import Final2 from "../BeforeAfterPics/DB36.webp";


import { useRef } from "react";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

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
        <div className="row justify-content-evely mt-3">
          <div className="col-6">
            {" "}
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  onClick={() => scrollToSection(classic)}
                  id="classic-image"
                  src={Classic}
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
                  src={LVT}
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
        <div className="row d-flex justify-content-center align-items-center">
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
        <div className="row justify-content-evely">
          <div className="col-6">
            {" "}
            <div id="picture-width" className="container-fluid">
              <figure className="figure">
                <img
                  onClick={() => scrollToSection(custom)}
                  id="classic-image"
                  src={Custom}
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
                  src={Stair}
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

      <section id="classic-pictures">
        <section
          ref={classic}
          id="classic"
          className="page-section call-to-action d-flex mt-3"
        >
          <div className="py-lg-5">
            <div className="col-lg-12 col-md-8 mx-auto">
              <h1 className="mb-5">Classic Hardwood</h1>
            </div>
          </div>
        </section>

        <section id="row-clasic">
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={Floor1}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Floor2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Floor5}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={Floor6}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Floor9}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Floor10}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor3}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor4}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Floor8}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor12}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor13}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor14}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor15}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor16}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor17}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Floor19}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Final}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
             <div className="col-4">
              <img
                id="classic-img-cust"
                src={Final2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
           <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Floor22}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Floor23}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
             <div className="col-4">
              <img
                id="classic-img-cust"
                src={Floor2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          
        </section>
      </section>

      <section id="lvt-pictures">
        <section
          ref={lvt}
          id="lvt"
          className="page-section call-to-action d-flex mt-3"
        >
          <div className="py-lg-5">
            <div className="col-lg-12 col-md-8 mx-auto">
              <h1 className="mb-5">Luxury Vinyl Tile</h1>
            </div>
          </div>
        </section>

        <section id="row-clasic">
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={LVT1}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={LVT2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={LVT3}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={LVT4}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={LVT5}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={LVT6}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={LVT7}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
          </div>
        </section>
      </section>

      <section id="commercial-pictures">
        <section
          ref={commercial}
          id="commercial"
          className="page-section call-to-action d-flex mt-3"
        >
          <div className="py-lg-5">
            <div className="col-lg-12 col-md-8 mx-auto">
              <h1 className="mb-5">Commercial Projects</h1>
            </div>
          </div>
        </section>

        <section id="row-clasic">
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={Church}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Church2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Church3}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={Church4}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Church5}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Church6}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={BB1}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={BB}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={BB2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
           <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={BB3}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={BB4}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={BB5}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
        </section>
      </section>

      <section id="custom-pictures">
        <section
          ref={custom}
          id="custom"
          className="page-section call-to-action d-flex mt-3"
        >
          <div className="py-lg-5">
            <div className="col-lg-12 col-md-8 mx-auto">
              <h1 className="mb-5">Custom Designs</h1>
            </div>
          </div>
        </section>

        <section id="row-clasic">
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={Custom}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Custom2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Custom3}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={Custom4}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Custom5}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Custom6}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Custom7}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Custom8}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Custom9}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
           <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Custom10}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Custom11}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Custom12}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
        </section>
      </section>

      <section id="stair-pictures">
        <section
          ref={stair}
          id="stair"
          className="page-section call-to-action d-flex mt-3"
        >
          <div className="py-lg-5">
            <div className="col-lg-12 col-md-8 mx-auto">
              <h1 className="mb-5">Stairs</h1>
            </div>
          </div>
        </section>
        <section id="row-clasic">
          <div className="row">
            <div className="col-4">
              <img
                id="classic-img"
                src={Stair}
                alt=""
                className="img-fluid img-thumbnail"
              />{" "}
            </div>
            <div className="col-4">
              <img
                id="classic-img-cus"
                src={Stair2}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img"
                src={Stair3}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
           <div className="row">
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Floor21}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-4">
              <img
                id="classic-img-cust"
                src={Floor20}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
            </div>
         
    
        </section>
      </section>

      {/*FOOTER*/}
      <div class="container my-5 foot">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Estimate" class="foot-hover">
                      Request An Estimate
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Services" class="foot-hover">
                      Services
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      Reviews
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      Find a Career
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Contact" class="foot-hover">
                      Contact
                    </Link>
                  </h6>
                </div>
              </div>
            </section>

            <hr class="my-5" />
            <section class="mb-4 move">
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-instagram">
                  <img
                    src={Insta}
                    class="img-fluid hover"
                    onClick={() => window.open(insta, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-facebook-f">
                  <img
                    src={Face}
                    class="img-fluid hover"
                    onClick={() => window.open(face, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-linkedin">
                  <img
                    src={Linked}
                    class="img-fluid hover"
                    onClick={() => window.open(linked, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
            </section>
          </div>
          <div class="text-center p-3">
            Designed by:
            <Link
              to="/"
              class="foot-hover space"
              onClick={() => window.open(mine, "_blank")}
            >
              Forbush Technologies LLC{" "}
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Gallery;
