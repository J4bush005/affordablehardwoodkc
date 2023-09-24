import React from 'react';
import Floor20 from "../BeforeAfterPics/DB3.webp";
import Floor21 from "../BeforeAfterPics/DB4.webp";
import Stair2 from "../images/Stairs2.webp";
import Stair3 from "../images/Stairs.webp";
import Stair from "../images/IMG_0286.webp";
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Stairs() {
  return (
    <section id="stair-pictures">
       <section id="join-fam">
        <div className="">
          <div className="col">
            <div id="care-headings" className="1-text heading-text">
              Classic Floors
            </div>
            <div className="flex">
              <div className="x1 goldbar home news">
                <div className="x2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="col">
            <div id="" className="second-word">
              <ul className="options">
                <li className="listed-one">
                  <Link to={"/Classic"} className="sections">Classic</Link>
                </li>
                <li className="listed-two">|</li>
                <li className="listed-three">
                  <Link to={"/LVT"} className="sections">LVT</Link>
                </li>
                <li className="listed-four">|</li>
                <li className="listed-five">
                  <Link to={"/Commercial"} className="sections">Commercial</Link>
                </li>
                <li className="listed-six">|</li>
                <li className="listed-seven">
                  <Link to={"/Custom"} className="sections">Custom</Link>
                </li>
                <li className="listed-eight">|</li>
                <li className="listed-nine">
                  <Link to={"/Stairs"} className="sections">Stairs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    <div className="move-right">
    <section id="row-clasic">
      <div className="d-flex">
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Stair}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Stair3}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Stair2}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
      </div>
       <div className="d-flex mt-3">
        <div className="col-4">
        <div id="picture-widths">
          <img
            id=""
            src={Floor21}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Floor20}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        </div>
     

    </section>
    </div>
    <Footer/>
  </section>
  )
}

export default Stairs