import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Sticky,
  Fade,
  Move,
  FadeIn,
  MoveOut,
  Zoom,
} from "react-scroll-motion";
import Logo from "../images/Logo.png";
import Demo1 from "../images/Demo1.png";
import Demo2 from "../images/Demo2.png";
import Demo3 from "../images/Demo3.png";
import Demo4 from "../images/Demo4.png";
import Demo5 from "../images/Demo5.png";
import Demo6 from "../images/Demo6.png";
import { Link } from "react-router-dom";

const FadeUp = batch(Fade(), Sticky(38), Move());
const FadeUp2 = batch(Fade(), Sticky(), Move());

function Home() {
  return (
    <ScrollContainer>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Demo1}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={Demo2}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={Demo3}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={Demo4}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={Demo5}
              class="d-block img-responsive image-resize"
              alt=""
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={Demo6}
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

      <div className="container-fluid">
        <ScrollPage page={0}>
          <Animator animation={FadeUp}>
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="row">
                  <div class="col-12">
                    <div id="open-heading" class="1-text heading-text">
                      Providing Superior Quality
                    </div>
                    <div id="open-heading" class="1-text heading-text">
                      At An Affordable Price
                    </div>
                    <div class="flex">
                      <div class="x1 goldbar home"></div>
                      <div class="x1"></div>
                    </div>
                    <div class="r-text paragraph">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                      morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Proin pharetra nonummy pede. Mauris et
                      orci. Aenean nec lorem. In porttitor. Donec laoreet
                      nonummy augue. Suspendisse dui purus, scelerisque at,
                      vulputate vitae, pretium mattis, nunc. Mauris eget neque
                      at sem venenatis eleifend. Ut nonummy.
                    </div>

                    <div class="col-auto"></div>
                    <div class="col-auto"></div>
                  </div>
                  <div class="col-12 col-lg-6"></div>
                </div>
              </div>
              <div class="col-sm ">
                <div class="1-text heading-text d-flex justify-content-end">
                  <img className="pics" src={Demo1} alt="" />
                </div>
              </div>
            </div>
          </Animator>
        </ScrollPage>
      </div>
    </ScrollContainer>
  );
}

export default Home;
