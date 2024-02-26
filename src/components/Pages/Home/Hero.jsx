import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid" id="hero-section">
    <div className="m-auto">
      <div id="excellenc" className="d-flex justify-content-center text-white">
        <h1 className="bigger">Crafting Excellence,</h1>
      </div>
       <div id="" className="d-flex justify-content-center text-white">
        <h2 className="bigger">Floor by Floor</h2>
      </div>
      <div id="" className="d-flex justify-content-center align-items-center mx-auto text-white">
        <h3 className="smaller">Where Quality Meets Luxury</h3>
      </div>
           <div
        id="excellence"
        className="d-flex justify-content-center text-center display-1"
      >
        <Link to={"/Request-An-Estimate"} id="estimate-button" className="btn fs-4">Request an Estimate</Link>
      </div>
      </div>
 
    
    </div>
  );
}

export default Hero;
