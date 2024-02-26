import React from 'react'
import BB1 from "./Gallery Photos/DB16.webp";
import BB from "./Gallery Photos/DB17.webp";
import BB2 from "./Gallery Photos/DB18.webp";
import BB3 from "./Gallery Photos/DB19.webp";
import BB4 from "./Gallery Photos/DB20.webp";
import BB5 from "./Gallery Photos/DB21.webp";

function BlackArchives() {
  return (
       <div>
      {" "}
      <div className="header mt-5 px-2 fs-2">The Black Archives</div>
      <div id="location" className="px-2">
        1722 E 17th Ter, Kansas City, MO
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={BB}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={BB1}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={BB2}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={BB3}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={BB4}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={BB5}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
    </div>
  )
}

export default BlackArchives