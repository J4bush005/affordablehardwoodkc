import React from 'react';
import Floor1 from "./images/Sand 6 After.webp";
import Floor2 from "./images/Floor 2 After 6.webp";
import Floor3 from "./images/Demo6.webp";
import Floor4 from "./images/Demo 10.webp";
import Floor5 from "./images/Repair 3 After 2.webp";
import Floor6 from "./images/Repair 3 After 3.webp";
import Floor8 from "./images/Demo 13.webp";
import Floor9 from "./images/Demo 14.webp";
import Floor10 from "./images/Demo 15.webp";
import Floor12 from "./images/Normal.webp";
import Floor13 from "./images/Normal2.webp";
import Floor14 from "./images/Normal5.webp";
import Floor15 from "./images/Normal3.webp";
import Floor16 from "./images/Normal4.webp";
import Floor17 from "./images/Normal6.webp";
import Floor22 from "./BeforeAfterPics/DB7.webp";
import Floor23 from "./BeforeAfterPics/DB8.webp";
import Floor19 from "./images/Normal8.webp";
import Final from "./BeforeAfterPics/DB35.webp";
import Final2 from "./BeforeAfterPics/DB36.webp";

function Classic() {
  return (
    <section id="classic-pictures">
    <section
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
      <div className="d-flex">
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
      <div className="d-flex">
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
      <div className="d-flex">
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
      <div className="d-flex">
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
      <div className="d-flex">
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
      <div className="d-flex">
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
       <div className="d-flex">
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
  )
}

export default Classic