import React from "react";
import Church from "./Gallery Photos/Church 14.webp";
import Church2 from "./Gallery Photos/Church 15.webp";
import Church3 from "./Gallery Photos/Church 16.webp";
import Church4 from "./Gallery Photos/Church 17.webp";
import Church5 from "./Gallery Photos/Church 18.webp";
import Church6 from "./Gallery Photos/Church 19.webp";

function Churches() {
  return (
    <div>
      {" "}
      <div className="header mt-5 px-2 fs-2">Bannister Road Baptist Church</div>
      <div id="location" className="px-2">
        7503 E Bannister Rd, Kansas City, MO
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={Church}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Church2}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Church3}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={Church4}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Church5}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Church6}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
    </div>
  );
}

export default Churches;
