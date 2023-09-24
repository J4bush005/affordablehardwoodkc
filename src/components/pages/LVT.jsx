import React from 'react';
import LVT1 from "../images/LVT.webp";
import LVT2 from "../images/LVT 2.webp";
import LVT3 from "../images/LVT 3 copy.webp";
import LVT4 from "../images/LVT 4.webp";
import LVT5 from "../images/LVT 5.webp";
import LVT6 from "../images/LVT 6.webp";
import LVT7 from "../images/LVT 7.webp";
import { Link } from 'react-router-dom';
import Footer from '../Footer';


function LVT() {
  return (
    <section id="lvt-pictures">
      <section id="join-fam">
        <div className="">
          <div className="col">
            <div id="care-headings" className="1-text heading-text">
              Luxury Vinyl Tile
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
            src={LVT1}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={LVT4}
            alt=""
            className="img-fluid img-thumbnail"
          />
          </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={LVT2}
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
            src={LVT5}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
        </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={LVT6}
            alt=""
            className="img-fluid img-thumbnail"
          />
        </div>
        </div>
        <div className="col">
        <div id="picture-widths">
          <img
            id=""
            src={LVT7}
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
            src={LVT3}
            alt=""
            className="img-fluid img-thumbnail"
          />{" "}
        </div>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
  )
}

export default LVT