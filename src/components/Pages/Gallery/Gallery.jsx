import React, { useEffect } from "react";
import Choice from "./Choice";
import "./Gallery.css";
import Footer from "../../Footer/Footer";

function Gallery() {

  useEffect(() => {
    document.title =
    "Hardwood Flooring Gallery - Affordable Hardwood LLC | Custom Installation, Refinishing & Restoration";
  }, []);

  return (
    <div>
      <Choice />
      <Footer/>
    </div>
  );
}

export default Gallery;
