import React from 'react';
import Customs from "./images/Finish After 4.webp";
import Custom2 from "./images/custom floor.webp";
import Custom3 from "./images/Custom Floor 2.webp";
import Custom4 from "./images/Custom Floor 3.webp";
import Custom5 from "./images/Custom Floor 4.webp";
import Custom6 from "./images/Custom Floor 5.webp";
import Custom7 from "./images/Custom Floor 6.webp";
import Custom8 from "./BeforeAfterPics/DB26.webp";
import Custom9 from "./BeforeAfterPics/DB27.webp";
import Custom11 from "./BeforeAfterPics/DB33.webp";

function Custom() {
  return (
    <section id="custom-pictures">
    <section
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
      <div className="d-flex">
        <div className="col-4">
          <img
            id="classic-img"
            src={Customs}
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
      <div className="d-flex">
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
        </div>
        <div className="d-flex">
        <div className="col-4">
          <img
            id="classic-img"
            src={Custom7}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
        </div>
        <div className="col-4">
          <img
            id="classic-img-cus"
            src={Custom8}
            alt=""
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            id="classic-img"
            src={Custom9}
            alt=""
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
       <div className="d-flex">
        <div className="col-4">
          <img
            id="classic-img-cust"
            src={Custom11}
            alt=""
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
    </section>
  </section>
  )
}

export default Custom