import React from "react";
import ScrollToTop from "../ScrollToTop";
import Install from "../videos/Install 2.mp4";

function Services() {
  return (
    <>
      <ScrollToTop />
      <section id="mained" className="page-section call-to-action d-flex">
        <video id="install-video" src={Install} autoPlay loop muted></video>
        <div id="video-text" className="py-lg-5">
          <div className="col-lg-1 col-md-8 mx-auto">
            <h1 className="mb-5">Install</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
