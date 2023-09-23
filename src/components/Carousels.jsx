import React from 'react';
import Demo1 from "./images/Demo1.webp";
import Demo2 from "./images/Demo2.webp";
import Demo3 from "./images/Demo3.webp";
import Demo4 from "./images/Demo4.webp";
import Demo5 from "./images/Demo5.webp";
import Demo6 from "./images/Demo6.webp";

function Carousels() {
  return (
    <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src={Demo1}
          class="d-block   img-fluid"
          alt=""
          id="large-screens"
        ></img>
      </div>
      <div class="carousel-item">
        <img
          src={Demo2}
          class="d-block   img-fluid"
          alt=""
          id="large-screens"
        ></img>
      </div>
      <div class="carousel-item">
        <img
          src={Demo3}
          class="d-block  img-fluid"
          alt=""
          id="large-screens"
        ></img>
      </div>
      <div class="carousel-item">
        <img
          src={Demo4}
          class="d-block   img-fluid"
          alt=""
          id="large-screens"
        ></img>
      </div>
      <div class="carousel-item">
        <img
          src={Demo5}
          class="d-block  img-fluid"
          alt=""
          id="large-screens"
        ></img>
      </div>
      <div class="carousel-item">
        <img
          src={Demo6}
          class="d-block   img-fluid"
          alt=""
          id="large-screens"
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
  )
}

export default Carousels