import React from 'react';
import LVT1 from "./images/LVT.webp";
import LVT2 from "./images/LVT 2.webp";
import LVT3 from "./images/LVT 3 copy.webp";
import LVT4 from "./images/LVT 4.webp";
import LVT5 from "./images/LVT 5.webp";
import LVT6 from "./images/LVT 6.webp";
import LVT7 from "./images/LVT 7.webp";

function LVT() {
  return (
    <section id="lvt-pictures">
    <section
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
      <div className="d-flex">
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
      <div className="d-flex">
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
      <div className="d-flex">
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
  )
}

export default LVT