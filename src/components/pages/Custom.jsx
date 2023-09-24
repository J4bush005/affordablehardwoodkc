import React from 'react';
import Customs from "../images/Finish After 4.webp";
import Custom2 from "../images/custom floor.webp";
import Custom3 from "../images/Custom Floor 2.webp";
import Custom4 from "../images/Custom Floor 3.webp";
import Custom5 from "../images/Custom Floor 4.webp";
import Custom6 from "../images/Custom Floor 5.webp";
import Custom7 from "../images/Custom Floor 6.webp";
import Custom8 from "../BeforeAfterPics/DB26.webp";
import Custom9 from "../BeforeAfterPics/DB27.webp";
import Custom11 from "../BeforeAfterPics/DB33.webp";
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Custom() {
  return (
    <section id="custom-pictures">
        <section id="join-fam">
        <div className="">
          <div className="col">
            <div id="care-headings" className="1-text heading-text">
              Custom Floors
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

    <section id="row-clasic">
      <div className="d-flex">
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Customs}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom7}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom3}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
      </div>
      <div className="d-flex mt-3">
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom4}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom5}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom6}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        </div>
        <div className="d-flex mt-3">
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom2}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom8}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom9}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
      </div>
       <div className="d-flex mt-3">
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={Custom11}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
  )
}

export default Custom