import React from "react";
import Floor1 from "./Gallery Photos/Sand 6 After.webp";
import Floor2 from "./Gallery Photos/Floor 2 After 6.webp";
import Floor3 from "./Gallery Photos/Demo6.webp";
import Floor4 from "./Gallery Photos/Demo 10.webp";
import Floor5 from "./Gallery Photos/Repair 3 After 2.webp";
import Floor6 from "./Gallery Photos/Repair 3 After 3.webp";
import Floor8 from "./Gallery Photos/Demo 13.webp";
import Floor9 from "./Gallery Photos/Demo 14.webp";
import Floor10 from "./Gallery Photos/Demo 15.webp";
import Floor12 from "./Gallery Photos/Normal.webp";
import Floor13 from "./Gallery Photos/Normal2.webp";
import Floor14 from "./Gallery Photos/Normal5.webp";
import Floor15 from "./Gallery Photos/Normal3.webp";
import Floor16 from "./Gallery Photos/Normal4.webp";
import Floor17 from "./Gallery Photos/Normal6.webp";
import Floor22 from "./Gallery Photos/DB7.webp";
import Floor23 from "./Gallery Photos/DB8.webp";
import Floor19 from "./Gallery Photos/Normal8.webp";
import Final from "./Gallery Photos/DB35.webp";
import Final2 from "./Gallery Photos/DB36.webp";
import List from "./List";
import Footer from "../../Footer/Footer";
function Classic() {
  return (
    <div>
      <div>
        <div className=" header display-5 mt-4 px-2">Classic Hardwood</div>
        <List />
        <div id="picture-size">
        <div className=" d-flex">
          <div className="col-3">
            <img src={Floor1} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor2} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor3} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor4} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-3">
            <img src={Floor5} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor6} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor8} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor9} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-3">
            <img src={Floor10} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor12} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor13} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor14} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-3">
            <img src={Floor15} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor16} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor17} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor22} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-3">
            <img src={Floor23} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Floor19} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Final} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-3">
            <img src={Final2} alt="" id="picture-size" className="img-fluid img-thumbnail" />
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Classic;
