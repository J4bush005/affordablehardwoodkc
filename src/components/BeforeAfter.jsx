import React from "react";
import Second from "../components/BeforeAfterPics/DB2.webp";
import Third from "../components/BeforeAfterPics/DB5.webp";
import Fourth from "../components/BeforeAfterPics/DB6.webp";
import Fifth from "../components/BeforeAfterPics/DB7.webp";
import Sixth from "../components/BeforeAfterPics/DB8.webp";
import Seventh from "../components/BeforeAfterPics/DB3.webp";
import Eighth from "../components/BeforeAfterPics/DB4.webp";
import Twenty1 from "../components/BeforeAfterPics/DB23.webp";
import Twenty2 from "../components/BeforeAfterPics/DB24.webp";
import Twenty3 from "../components/BeforeAfterPics/DB25.webp";
import Twenty4 from "../components/BeforeAfterPics/DB26.webp";
import Twenty5 from "../components/BeforeAfterPics/DB27.webp";
import Twenty6 from "../components/BeforeAfterPics/DB28.webp";
import Twenty7 from "../components/BeforeAfterPics/DB29.webp";
import Twenty8 from "../components/BeforeAfterPics/DB30.webp";
import Twenty9 from "../components/BeforeAfterPics/DB31.webp";

const BeforeAfter = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div id="picture-height">
            <img
              src={Second}
              class="d-block image-resize"
              alt=""
            ></img>
          </div>
          </div>
          <div class="carousel-item">
            <div id="picture-height">
            <img
              src={Third}
              class="d-block image-resize"
              alt=""
            ></img>
            </div>
          </div>
          <div class="carousel-item">
            <div id="picture-height">
            <img
              src={Fourth}
              class="d-block image-resize"
              alt=""
            ></img>
            </div>
          </div>
          <div class="carousel-item">
          <div id="picture-height">
            <img
              src={Fifth}
              class="d-block image-resize"
              alt=""
            ></img>
            </div>
          </div>
          <div class="carousel-item">
          <div id="picture-height">
            <img
              src={Sixth}
              class="d-block image-resize"
              alt=""
            ></img>
            </div>
          </div>
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Seventh}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Eighth}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>   
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Twenty1}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Twenty2}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Twenty3}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Twenty4}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Twenty5}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
           <div class="carousel-item">
           <div id="picture-height">
            <img
              src={Twenty6}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
          <div class="carousel-item">
          <div id="picture-height">
            <img
              src={Twenty7}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
          <div class="carousel-item">
          <div id="picture-height">
            <img
              src={Twenty8}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
          <div class="carousel-item">
          <div id="picture-height">
            <img
              src={Twenty9}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BeforeAfter;
