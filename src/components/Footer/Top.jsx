import React from 'react'
import { Link } from 'react-router-dom'
import Phone from "../../Photos/phone-svgrepo-com (1).svg";
import Document from "../../Photos/document-text-svgrepo-com.svg"
import Quote from "../../Photos/quote-svgrepo-com.svg"

function Top() {
  return (
    <div className="container-fluid mt-5" id='top'>
        <div className="row text-center d-flex justify-content-center">
            <div className="col-md-4" id="first">
                <h6 className="text-uppercase font-weight-bold fs-4 mt-3">
                    <div className="foot-hover">
                        <figure className="text-over">
                            <img src={Phone} alt="Phone Number Icon" className='img-fluid' id="phone" />
                            <figcaption className="fs-2" id="red">Call Us</figcaption>
                            <figcaption className="fs-6" id="red">816-985-6420</figcaption>
                        </figure>
                    </div>
                </h6>
            </div>

            <div className="col-md-4" id="first">
                <h6 className="text-uppercase font-weight-bold fs-4 mt-3">
                    <div className="foot-hover">
                        <figure className="text-over">
                            <img src={Phone} alt="Phone Number Icon" className='img-fluid' id="phone" />
                            <figcaption className="fs-2" id="red">Get Started</figcaption>
                            <figcaption className="fs-6" id="red">Request an Estimate</figcaption>
                        </figure>
                    </div>
                </h6>
            </div>

            <div className="col-md-4" id="first">
                <h6 className="text-uppercase font-weight-bold fs-4 mt-3">
                    <div className="foot-hover">
                        <figure className="text-over">
                            <img src={Quote} alt="Phone Number Icon" className='img-fluid' id="phone" />
                            <figcaption className="fs-2" id="red">Leave A Review</figcaption>
                        </figure>
                    </div>
                </h6>
            </div>
        </div>
    </div>
  )
}

export default Top