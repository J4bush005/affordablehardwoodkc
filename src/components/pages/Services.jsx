import React from "react";
import ScrollToTop from "../ScrollToTop";
import Install from "../videos/Install 2.mp4";

function Services() {
  return (
    <div >
      <ScrollToTop />
         <section
         id="main"
              className="page-section call-to-action d-flex"
            >
             <video id="install-video" src={Install} autoPlay loop muted></video>
            </section>

    </div>
  );
}

export default Services;
