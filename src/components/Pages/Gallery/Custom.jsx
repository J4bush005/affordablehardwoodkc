import React from 'react'
import Customs from "./Gallery Photos/Finish After 4.webp";
import Custom2 from "./Gallery Photos/custom floor.webp";
import Custom3 from "./Gallery Photos/Custom Floor 2.webp";
import Custom4 from "./Gallery Photos/Custom Floor 3.webp";
import Custom5 from "./Gallery Photos/Custom Floor 4.webp";
import Custom6 from "./Gallery Photos/Custom Floor 5.webp";
import Custom7 from "./Gallery Photos/Custom Floor 6.webp";
import Custom8 from "./Gallery Photos/DB26.webp";
import Custom9 from "./Gallery Photos/DB27.webp";
import Custom11 from "./Gallery Photos/DB33.webp";
import List from './List';
import Footer from '../../Footer/Footer';

function Custom() {
  return (
    <div>
      <div>
        <div className=" header display-5 mt-4 px-2">Custom Hardwood Designs</div>
        <List />
        <div id="">
        <div className=" d-flex">
          <div className="col-3">
            <img src={Customs} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Custom2} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Custom3} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Custom4} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-3">
            <img src={Custom5} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Custom6} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Custom7} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Custom8} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-3">
            <img src={Custom9} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Custom11} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Custom