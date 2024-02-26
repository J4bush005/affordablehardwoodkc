import React from 'react'
import Phenoms from "./Gallery Photos/IMG_5779.webp";
import Phenoms2 from "./Gallery Photos/IMG_5753.webp";
import Phenoms3 from "./Gallery Photos/IMG_5754.webp";
import Phenoms4 from "./Gallery Photos/IMG_5759.webp";
import Phenoms5 from "./Gallery Photos/IMG_5762.webp";
import Phenoms6 from "./Gallery Photos/IMG_5772.webp";

function Phenomss() {
  return (
       <div>
      {" "}
      <div className="header mt-5 px-2 fs-2">The Missouri Phenoms</div>
      <div id="location" className="px-2">
        9001 James A Reed Rd, Kansas City, MO
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={Phenoms}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Phenoms2}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Phenoms3}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
      <div className=" d-flex">
        <div className="col-4">
          <img
            src={Phenoms4}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Phenoms5}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-4">
          <img
            src={Phenoms6}
            alt=""
            id="picture-size"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
    </div>
  )
}

export default Phenomss