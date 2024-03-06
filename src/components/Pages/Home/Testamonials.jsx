import React from "react";
import Next from "../../../Photos/next-svgrepo-com.svg";
import Prev from "../../../Photos/previous-svgrepo-com.svg";

import { useState } from "react";

function Testimonials() {
  const testimonials = [
    "I want to thank Johnathon and his team for the amazing job on my floors. Not only were they professional, they also was very efficient and clean. They got the job done in a timely manner. My floors look absolutely amazing",
    "I recently had the pleasure of working with Affordable Hardwood for the installation of hardwood floors in my home, and I must say that the experience was nothing short of excellent. Johnathon, the owner, and his team are true professionals who prioritize customer satisfaction and deliver outstanding results.",
    "I contacted Johnathon/Affordable Hardwood for a quote on refinishing my existing floors. I explained what I wanted and he was knowledgable about the finish and look I was looking for. Pricing was competitive and quality is amazing! The team worked diligently! I highly recommend this company for your flooring needs!",
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div id="Testamonials">
      <div className="mt-5 testimonials">
        <div className="container-fluid">
          <h1 className="d-flex justify-content-center text-white display-5">
            Testimonials
          </h1>
        </div>
        <div className="d-flex container-fluid mt-2">
          <div className="col-1 m-auto justify-content-end">
            <button className="btn" onClick={handlePrev}>
              <img
                className="img-fluid mb-4 align-items-center justify-content-center"
                src={Prev}
                alt="Previous Button"
              />
            </button>
          </div>
          <div className="col-7">
            <p className="fs-4 text-center text-white">
              {testimonials[currentTestimonial]}
            </p>
          </div>
          <div className="col-1 m-auto justify-content-end">
            <button className="btn" onClick={handleNext}>
              <img
                className="img-fluid mb-4 align-items-center justify-content-end"
                src={Next}
                alt="Next Button"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
