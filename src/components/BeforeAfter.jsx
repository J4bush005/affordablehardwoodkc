import React from "react";

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
            <img
              src={"/"}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={"/"}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={"/"}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={"/"}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={"/"}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={"/"}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
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
