import React from "react";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import Media from "react-media";
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
  return (
    <>
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
    </>
  );
}

export default Gallery;
