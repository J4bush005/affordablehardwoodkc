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
  StickyIn,
  MoveIn,
  Zoom,
} from "react-scroll-motion";
import Media from "react-media";
import Logo from "../images/Logo.png";
import Demo1 from "../images/Demo1.png";
import Demo2 from "../images/Demo2.png";
import Demo3 from "../images/Demo3.png";
import Demo4 from "../images/Demo4.png";
import Demo5 from "../images/Demo5.png";
import Demo6 from "../images/Demo6.png";
import { Link } from "react-router-dom";

const FadeUp = batch(FadeIn(), MoveIn(400, 300), StickyIn(15, 16));


const FadeUpsm = batch(FadeIn(), MoveIn(50, 0), StickyIn(50, 25));


const FadeUpmd = batch(FadeIn(), MoveIn(50, 0), StickyIn(50, 25));


const FadeUplg = batch(FadeIn(), MoveIn(400, 300), StickyIn(15, 16));


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

      <ScrollPage page={0}>
        <div className="flex container-fluid">

        <Media query="(min-width: 0px) and (max-width: 480px)">
         <Animator animation={FadeUpsm}>
            <div class="row">
              <div class="col">
                <div id="open-heading" class="1-text heading-text">
                  Providing Superior Quality
                </div>
                <div id="open-heading" class="1-text heading-text">
                  At An Affordable Price
                </div>
                <div className="flex">
              <div className="x1 goldbar home">
                <div className="x1"></div>
              </div>
            </div>
              </div>
            </div>
          </Animator>
          </Media>

          <Media query="(min-width: 480px) and (max-width: 768px)">
          <Animator animation={FadeUpmd}>
            <div class="row">
              <div class="col">
                <div id="open-heading" class="1-text heading-text">
                  Providing Superior Quality
                </div>
                <div id="open-heading" class="1-text heading-text">
                  At An Affordable Price
                </div>
                <div className="flex">
              <div className="x1 goldbar home">
                <div className="x1"></div>
              </div>
            </div>
            </div>
            </div>
          </Animator>
          </Media>

           <Media query="(min-width: 768px) and (max-width: 1920px)">
          <Animator animation={FadeUp}>
            <div class="row">
              <div class="col">
                <div id="open-heading" class="1-text heading-text">
                  Providing Superior Quality
                </div>
                <div id="open-heading" class="1-text heading-text">
                  At An Affordable Price
                </div>
                <div className="flex">
              <div className="x1 goldbar home">
                <div className="x1"></div>
              </div>
            </div>
              </div>
            </div>
          </Animator>
          </Media>

           <Media query="(min-width: 1920px)">
          <Animator animation={FadeUplg}>
            <div class="row">
              <div class="col">
                <div id="open-heading" class="1-text heading-text">
                  Providing Superior Quality
                </div>
                <div id="open-heading" class="1-text heading-text">
                  At An Affordable Price
                </div>
                <div className="flex">
              <div className="x1 goldbar home">
                <div className="x1"></div>
              </div>
            </div>
              </div>
            </div>
          </Animator>
          </Media>

        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default Home;
