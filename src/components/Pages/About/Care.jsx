import React from "react";
import Cleaning from "../../../Photos/OIP (1).jpg";
function Care() {
  return (
    <div>
      <div className="container-fluid">
        <div className="header display-5 mt-5 d-flex justify-content-center mx-auto">
          How To Take Care For Your Floors:
        </div>
      </div>
      <div className="container">
        <div className="row d-flex mt-3">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="d-flex">
              <div id="sub-title" className="col-3 fs-5">
                Prevent Measures:
              </div>
              <div id="story" className="col-9 justify-content-start fs-6">
                Protect your floors by using felt pads or furniture glides under
                your furniture to prevent scratches. Avoid dragging heavy
                objects across the floor and consider using area rugs or mats in
                high-traffic areas to minimize wear.
              </div>
            </div>
            <div className="d-flex mt-3">
              <div id="sub-title" className="col-3 fs-5">
                Regular Cleaning:
              </div>
              <div id="story" className="col-9 justify-content-start fs-6">
                Sweep or vacuum your hardwood floors regularly to remove dust,
                dirt, and debris. Use a soft-bristle broom or a vacuum with a
                floor attachment to avoid scratching the surface. Avoid using a
                vacuum with a beater bar, as it can damage the floor.
              </div>
            </div>
            <div className="d-flex mt-3">
              <div id="sub-title" className="col-3 fs-5">
                Spill Cleanup:
              </div>
              <div id="story" className="col-9 justify-content-start fs-6">
                Accidents happen, so it's essential to clean up spills promptly
                to prevent staining or warping. Use a soft, damp cloth or mop to
                gently blot the spill, working from the edges toward the center.
                Avoid excessive moisture and ensure the floor is completely dry
                after cleaning.
              </div>
            </div>
            <div className="d-flex mt-3">
              <div id="sub-title" className="col-3 fs-5">
                Cleaning Products:
              </div>
              <div id="story" className="col-9 justify-content-start fs-6">
                Use hardwood floor cleaners specifically designed for your floor
                type. Avoid using harsh chemicals, abrasive cleaners, or
                excessive water, as they can damage the finish. Follow the
                manufacturer's instructions and test any new cleaning product in
                an inconspicuous area first.
              </div>
            </div>
            <div className="d-flex mt-3">
              <div id="sub-title" className="col-3 fs-5">
                Expert Cleaning:
              </div>
              <div id="story" className="col-9 justify-content-start fs-6">
                Consider scheduling professional hardwood floor maintenance
                periodically to ensure your floors receive the care they need.
                Professional cleaning and refinishing can help restore the shine
                and luster of your hardwood floors, enhancing their longevity
                and beauty.
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 px-4 d-flex m-auto">
            <img src={Cleaning} alt="Cleaning Floor" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Care;
