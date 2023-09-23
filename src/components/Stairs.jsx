import React from 'react';
import Floor20 from "./BeforeAfterPics/DB3.webp";
import Floor21 from "./BeforeAfterPics/DB4.webp";
import Stair2 from "./images/Stairs2.webp";
import Stair3 from "./images/Stairs.webp";
import Stair from "./images/IMG_0286.webp";

function Stairs() {
  return (
    <section id="stair-pictures">
    <section
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
      <div className="d-flex">
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
       <div className="d-flex">
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
  )
}

export default Stairs