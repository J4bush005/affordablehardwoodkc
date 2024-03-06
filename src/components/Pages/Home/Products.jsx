import React from "react";
import Hardwood from "../../../Photos/Demo5.webp"
import LVT from "../../../Photos/LVT 3 copy.webp"
import Concrete from "../Gallery/Gallery Photos/IMG_0286.webp"
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <div id="margin" className="container">
        <div className="d-flex our-products">
          <h1 className="display-5 col-10">Our Products</h1>
          <Link to="/Gallery" className="gallery-link d-flex justify-content-end mt-3">
            <h3 className="fs-5 views">View Gallery</h3>
          </Link>
        </div>

        <div className="row d-flex container mt-3">
        <div className="col-lg-4 col-md-4 col-sm-12 p-2">
        
          <div id="card" class="card">
          <Link to="/Classic-Hardwood">
            <img id="picture-size" className="card-img-top" src={Hardwood} alt="Custom hardwood floor design" />
            </Link>
            <div id="body" class="card-body">
              <h5 id="title" class="card-title text-center fs-5">Hardwood Floors</h5>
            </div>
          </div>
          </div>
              <div className="col-lg-4 col-md-4 col-sm-12 p-2">
         
          <div id="card" class="card">
           <Link to="/Luxury-Vinyl-Planks">
            <img id="picture-size" className="card-img-top" src={LVT} alt="Luxury vinyl plank install" />
            </Link>
            <div id="body" class="card-body">
              <h5 id="title" class="card-title text-center fs-5">LVP's</h5>
            </div>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 p-2">
          <div id="card" class="card">
          <Link to="/Hardwood-Stairs">
            <img id="picture-size" className="card-img-top" src={Concrete} alt="Hardwood stair install" />
            </Link>
            <div id="body" class="card-body">
              <h5 id="title" class="card-title text-center fs-5">Stairs</h5>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
