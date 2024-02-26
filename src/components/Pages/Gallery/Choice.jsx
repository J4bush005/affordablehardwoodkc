import React from "react";
import Classics from "./Gallery Photos/Floor 2 After 6.webp";
import LVTs from "./Gallery Photos/LVT.webp";
import Customs from "./Gallery Photos/Finish After 4.webp";
import Stairss from "./Gallery Photos/IMG_0286.webp";
import Church from "./Gallery Photos/Church 14.webp";
import { Link } from "react-router-dom";
function Choice() {
  return (
    <div>
      <div className="d-flex justify-content-center header display-5">
        Our Showroom
      </div>
      <div className="container">
        <div className="row d-flex mt-3">
          <div className="col-4">
            <figure className="figure">
              <Link to={"/Classic-Hardwood"}>
                <img
                  src={Classics}
                  alt=""
                  id="classic-img"
                  className="figure-img img-fluid rounded"
                />
              </Link>
              <figcaption className="figure-caption fs-3" id="classic-text">
                Classic Hardwood
              </figcaption>
            </figure>
          </div>
          <div className="col-4">
            <figure className="figure">
              <Link to={"/Luxury-Vynil-Tile"}>
                <img
                  src={LVTs}
                  alt=""
                  id="classic-img"
                  className="figure-img img-fluid rounded"
                />
              </Link>
              <figcaption className="figure-caption fs-3" id="classic-text">
                Luxury Vynil Tiles
              </figcaption>
            </figure>
          </div>
          <div className="col-4">
            <figure className="figure">
              <Link to={"/Custom-Hardwood-Designs"}>
                <img
                  src={Customs}
                  alt=""
                  id="classic-img"
                  className="figure-img img-fluid rounded"
                />
              </Link>
              <figcaption className="figure-caption fs-3" id="classic-text">
                Custom Floor Designs
              </figcaption>
            </figure>
          </div>
        </div>
            <div className="row d-flex mt-3">
          <div className="col-4">
            <figure className="figure">
              <Link to={"/Hardwood-Stairs"}>
                <img
                  src={Stairss}
                  alt=""
                  id="classic-img"
                  className="figure-img img-fluid rounded"
                />
              </Link>
              <figcaption className="figure-caption fs-3" id="classic-text">
                Classic Hardwood
              </figcaption>
            </figure>
          </div>
          <div className="col-4">
            <figure className="figure">
              <Link to={"/Commercial-Projects"}>
                <img
                  src={Church}
                  alt=""
                  id="classic-img"
                  className="figure-img img-fluid rounded"
                />
              </Link>
              <figcaption className="figure-caption fs-3" id="classic-text">
                Commercial Project Floors
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choice;
