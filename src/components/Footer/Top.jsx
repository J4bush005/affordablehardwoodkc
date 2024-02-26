import React from "react";
import { Link } from "react-router-dom";
import Phone from "../../Photos/phone-svgrepo-com (1).svg";
import Document from "../../Photos/document-text-svgrepo-com.svg";
import Quote from "../../Photos/quote-svgrepo-com.svg";

function Top() {
  return (
    <div className="container-fluid mt-5" id="top">
      <div class="row text-center d-flex justify-content-center">
        <div class="col-md-4" id="first">
          <h6 class="text-uppercase font-weight-bold fs-4 mt-3">
            <div class="foot-hover">
              <figure className="text-over">
                <img
                  id="phone"
                  src={Phone}
                  alt="Phone Number Icon"
                  className="img-fluid"
                />
                <figcaption className="fs-2" id="red">Call Us</figcaption>
                <figcaption className="fs-6" id="red">816-985-6420</figcaption>
              </figure>
            </div>
          </h6>
        </div>

        <div class="col-md-4" id="first">
          <h6 class="text-uppercase font-weight-bold fs-4 mt-3">
            <Link to="/Request-An-Estimate" class="foot-hover" >
              <figure className="text-over">
                <img
                  id="phone"
                  src={Document}
                  alt="Document Icon"
                  className="img-fluid"
                />
                <figcaption className="fs-2" id="red">Get Started</figcaption>
                <figcaption className="fs-6" id="reds">Request an Estimate</figcaption>
              </figure>
            </Link>
          </h6>
        </div>
        <div class="col-md-4">
          <h6 class="text-uppercase font-weight-bold fs-4 mt-3">
            <Link to="/Contact-Us" class="foot-hover">
                 <figure className="text-over">
                <img
                  id="phone"
                  src={Quote}
                  alt="Document Icon"
                  className="img-fluid"
                />
                <figcaption className="fs-3" id="red">Leave a Review</figcaption>
              </figure>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Top;
