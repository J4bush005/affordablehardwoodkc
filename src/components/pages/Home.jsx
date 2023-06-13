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
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import Boss from "../images/Practice.jpg";
import Easter from "../images/Easter.jpg";
import Family from "../images/Family .jpg";
import White from "../images/White.jpg";
import { Link } from "react-router-dom";

const FadeUp = batch(FadeIn(), MoveIn(400, 300));
const FadeUpTwo = batch(FadeIn(), MoveIn(-400, -300));

const FadeUpsm = batch(FadeIn(), MoveIn(50, 0));
const FadeUpTwosm = batch(FadeIn(), MoveIn(-50, 0));

const FadeUpmd = batch(FadeIn(), MoveIn(200, 150));
const FadeUpTwomd = batch(FadeIn(), MoveIn(-200, -150));

const FadeUplg = batch(FadeIn(), MoveIn(400, 300));

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

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

      {/* First Paragraph Small Screens */}
      <ScrollPage page={0}>
        <div className="flex container-fluid">
          <Media query="(min-width: 0px) and (max-width: 480px)">
            <Animator animation={FadeUpsm}>
              <div class="row">
                <div class="col">
                  <div id="open-heading-sm" class="1-text heading-text">
                    Providing Superior Quality
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="r-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src={Boss}
                    class="img-responsive pic x2 flex sm"
                    alt=""
                  />
                </div>
              </div>
            </Animator>
          </Media>

          {/* First Paragraph Medium Screens */}
          <Media query="(min-width: 480px) and (max-width: 768px)">
            <Animator animation={FadeUpmd}>
              <div class="row">
                <div class="col">
                  <div id="open-heading-md" class="1-text heading-text">
                    Providing Superior Quality
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="r-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={Boss}
                    class="img-responsive pic x2 flex mediums"
                    alt=""
                  />
                </div>
              </div>
            </Animator>
          </Media>

          {/* First Paragraph Regular Screens */}
          <Media query="(min-width: 768px) and (max-width: 1920px)">
            <Animator animation={FadeUp}>
              <div class="row justify-content-evenly open">
                <div class="col-6">
                  <div id="open-heading" class="1-text heading-text">
                    Providing Superior Quality
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="r-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </div>
                </div>
                <div className="col-6">
                  <img src={Boss} class="img-responsive pic x2 flex" alt="" />
                </div>
              </div>
            </Animator>
          </Media>

          {/* First Paragraph Large Screens */}
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

      <ScrollPage page={1}>
        <div className="flex container-fluid">
          {/* Second Paragraph Small Screens */}
          <Media query="(min-width: 0px) and (max-width: 480px)">
            <Animator animation={FadeUpTwosm}>
              <div class="row">
                <div class="col">
                  <div id="open-heading-sm" class="1-text heading-text">
                    At An Affordable Price
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="r-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src={White}
                    class="img-responsive pic x2 flex sm"
                    alt=""
                  />
                </div>
              </div>
            </Animator>
          </Media>

          {/* Second Paragraph Medium Screens */}
          <Media query="(min-width:480px) and (max-width: 768px)">
            <Animator animation={FadeUpTwomd}>
              <div class="row">
                <div class="col">
                  <div id="open-heading-md" class="1-text heading-text">
                    At An Affordable Price
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="r-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </div>
                </div>
              </div>
              <div className="row">
               <div className="col-6">
                  <img
                    src={White}
                    class="img-responsive pic x2 flex mediums"
                    alt=""
                  />
                </div></div>
            </Animator>
          </Media>
          {/* Second Paragraph Regular Screens */}
          <Media query="(min-width: 768px) and (max-width: 1920px)">
            <Animator animation={FadeUpTwo}>
              <div class="row justify-content-evenly lasts">
                <div class="col-6">
                  <img
                    src={White}
                    class="img-responsive x2 flex second"
                    alt=""
                  />
                </div>
                <div id="test" className="col-6">
                  <div id="open-headings" class="1-text heading-text">
                    At An Affordable Price
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div id="second-paragraph" className="r-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.{" "}
                  </div>
                </div>
              </div>
            </Animator>
          </Media>
        </div>
      </ScrollPage>

      {/* Footer */}
      <div class="container my-5 foot">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center pt-5">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="text-white">
                      About us
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Services" class="text-white">
                      Services
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="text-white">
                      Reviews
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="text-white">
                      Find a Career
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Contact" class="text-white">
                      Contact
                    </Link>
                  </h6>
                </div>
              </div>
            </section>

            <hr class="my-5" />
            <section class="mb-4 move">
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-instagram">
                  <img
                    src={Insta}
                    class="img-fluid hover"
                    onClick={() => window.open(insta, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-facebook-f">
                  <img
                    src={Face}
                    class="img-fluid hover"
                    onClick={() => window.open(face, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-linkedin">
                  <img
                    src={Linked}
                    class="img-fluid hover"
                    onClick={() => window.open(linked, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
            </section>
          </div>
          <div class="text-center p-3">
            <Link
              to="/"
              class="text-white"
              onClick={() => window.open(mine, "_blank")}
            >
              Designed by: Johnathon Forbush Jr{" "}
            </Link>
          </div>
        </footer>
      </div>
    </ScrollContainer>
  );
}

export default Home;
