import React from 'react'
import LVT1 from "./Gallery Photos/LVT.webp";
import LVT2 from "./Gallery Photos/LVT 2.webp";
import LVT3 from "./Gallery Photos/LVT 3 copy.webp";
import LVT4 from "./Gallery Photos/LVT 4.webp";
import LVT5 from "./Gallery Photos/LVT 5.webp";
import LVT6 from "./Gallery Photos/LVT 6.webp";
import LVT7 from "./Gallery Photos/LVT 7.webp";

import Footer from "../../Footer/Footer";
import List from './List';

function Luxury() {
  return (
    <div>
     <div className=" header display-5 mt-4 px-2">Luxury Vinyl Planks</div>
        <List />
        <div id="">
        <div className=" d-flex">
          <div className="col-3">
            <img src={LVT1} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={LVT2} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={LVT3} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={LVT4} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-4">
            <img src={LVT5} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-4">
            <img src={LVT6} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-4">
            <img src={LVT7} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default Luxury