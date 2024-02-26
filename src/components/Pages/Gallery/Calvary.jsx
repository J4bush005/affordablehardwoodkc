import React from 'react'
import Calvary from "./Gallery Photos/Calvary.webp";
import Calvary2 from "./Gallery Photos/Calvary2.webp";
import Calvary3 from "./Gallery Photos/Calvary3.webp";
import Calvary4 from "./Gallery Photos/Calvary4.webp";
import Calvary5 from "./Gallery Photos/Calvary5.webp";
import Calvary7 from "./Gallery Photos/Calvary7.webp";
import Calvary8 from "./Gallery Photos/Calvary8.webp";
import Calvary11 from "./Gallery Photos/Calvary11.webp";
import Calvary10 from "./Gallery Photos/Calvary10.webp";

function Calvarys() {
  return (
    <>
    <div className="header mt-5 px-2 fs-2">Calvary University</div>
      <div id="location" className="px-2">
        15800 Calvary Rd, Kansas City, MO
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={Calvary}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Calvary2}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Calvary3}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={Calvary4}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Calvary5}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Calvary7}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
           <div className=" d-flex">
        <div className="col-4">
          <img
            src={Calvary8}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Calvary11}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Calvary10}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
    </>
  )
}

export default Calvarys