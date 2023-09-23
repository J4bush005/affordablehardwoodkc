import React from 'react';
import Church from "./images/Church 14.webp";
import Church2 from "./images/Church 15.webp";
import Church3 from "./images/Church 16.webp";
import Church4 from "./images/Church 17.webp";
import Church5 from "./images/Church 18.webp";
import Church6 from "./images/Church 19.webp";
import BB1 from "./BeforeAfterPics/DB16.webp";
import BB from "./BeforeAfterPics/DB17.webp";
import BB2 from "./BeforeAfterPics/DB18.webp";
import BB3 from "./BeforeAfterPics/DB19.webp";
import BB4 from "./BeforeAfterPics/DB20.webp";
import BB5 from "./BeforeAfterPics/DB21.webp";

function Commercial() {
  return (
    <section id="commercial-pictures">
    <section
      
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
      <div className="d-flex">
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
      <div className="d-flex">
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
      <div className="d-flex">
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
       <div className="d-flex">
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
  )
}

export default Commercial