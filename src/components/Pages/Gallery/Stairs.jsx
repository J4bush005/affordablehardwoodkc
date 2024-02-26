import React from 'react'
import Floor20 from "./Gallery Photos/DB3.webp";
import Floor21 from "./Gallery Photos/DB4.webp";
import Stair2 from "./Gallery Photos/Stairs2.webp";
import Stair3 from "./Gallery Photos/Stairs.webp";
import Stair from "./Gallery Photos/IMG_0286.webp";
import Footer from '../../Footer/Footer';
import List from './List';
function Stairs() {
  return (
    <div>
      <div>
        <div className=" header display-5 mt-4 px-2">Classic Hardwood</div>
        <List />
        <div id="">
        <div className=" d-flex">
          <div className="col-4">
            <img src={Floor20} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-4">
            <img src={Floor21} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-4">
            <img src={Stair} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-4">
            <img src={Stair2} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-4">
            <img src={Stair3} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Stairs