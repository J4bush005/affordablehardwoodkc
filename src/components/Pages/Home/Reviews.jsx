import React from "react";
import Kids from "../../../Photos/kids.webp";
function Story() {
  return (
    <div>
      <div className="container mt-5">
        <h3 className="header display-5">Our Story</h3>
        <article className="row d-flex">
          <p className="col-lg-6 col-md-12 col-sm-12 fs-4" id="story">
            Johnathon Forbush founded Affrodable Hardwood Kansas City with a commitment to
            providing top-notch hardwood services. For more than 25 years
            Affordable Hardwood has ensured precision and expertise in every
            project. We pride ourselves on exceptional service and results. We
            exceed expectations with unparalleled craftsmanship and attention to
            detail with customer satisfaction being our highest priority.
          </p>
          <div id="kid-picture" className="col-lg-6 col-md-12 col-sm-12">
            <img src={Kids} alt="Boss" className="img-fluid" />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Story;
