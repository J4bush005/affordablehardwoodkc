import React from "react";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import { motion } from "framer-motion";
import Classic from "../images/Floor 2 After 6.jpg";
import LVT from "../images/LVT.jpg";
import Custom from "../images/Finish After 4.jpg";
import Stair from "../images/IMG_0286.jpg";
import Church from "../images/Church 14.jpg";

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
      <div className="row justify-content-evely mt-3">
        <div className="col-6">
          {" "}
          <div id="picture-width" className="container-fluid">
            <figure className="figure">
              <img
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

      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6">
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

      <div className="row justify-content-evely">
        <div className="col-6">
          {" "}
          <div id="picture-width" className="container-fluid">
            <figure className="figure">
              <img
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

      <div class="container my-5 foot">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      About us
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
