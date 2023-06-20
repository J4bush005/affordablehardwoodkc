import React from "react";
import { motion } from "framer-motion";
import Media from "react-media";
import Demo1 from "../images/Demo1.png";
import Demo2 from "../images/Demo2.png";
import Demo3 from "../images/Demo3.png";
import Demo4 from "../images/Demo4.png";
import Demo5 from "../images/Demo5.png";
import Demo6 from "../images/Demo6.png";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import Kids from "../images/kids.png";
import Buffer from "../images/buff.png";
import Rappers from "../images/Rappers.png";
import { Link } from "react-router-dom";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

function Home() {
  return (
    <>
      {/*Image Carousel*/}
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

      {/*PHONES*/}
      <Media query="(min-width: 0px) and (max-width: 640px)">
        <motion.div
          className="graph-container"
          initial={{ opacity: 0, x: 9 }}
          whileInView={{ opacity: 1, x: 15 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="row sm-screen">
            <div className="col-9">
              <div id="open-heading-sm" className="1-text heading-text">
                Providing Superior Quality
              </div>
              <div className="flex">
                <div className="x1 goldbar home">
                  <div className="x1"></div>
                </div>
              </div>
              <div className="r-text-sm">
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus.
              </div>
            </div>
            <div className="col">
              <img
                src={Kids}
                alt=""
                className="img-responsive pic x2 flex sm"
              />
            </div>
          </div>
        </motion.div>
      </Media>
      <Media query="(min-width: 0px) and (max-width: 640px)">
        <motion.div
          className="graph-container"
          initial={{ opacity: 0, x: 9 }}
          whileInView={{ opacity: 1, x: 15 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div id="sm-screen" className="row">
            <div className="col-9">
              <div id="open-heading-sm" className="1-text heading-text">
                At An Affordable Price
              </div>
              <div className="flex small">
                <div className="x1 goldbar home">
                  <div className="x1"></div>
                </div>
              </div>
              <div className="r-text-sm">
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus.
              </div>
            </div>
            <div className="col">
              <img
                src={Buffer}
                alt=""
                className="img-responsive pic x2 flex sms"
              />
            </div>
          </div>
        </motion.div>
      </Media>
      <Media query="(min-width: 0px) and (max-width: 640px)">
        <motion.div
          className="graph-container"
          initial={{ opacity: 0, x: -9 }}
          whileInView={{ opacity: 1, x: 15 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="row screen">
            <div className="col-9">
              <div id="third-open-heading-sm" className="1-text heading-text">
                Meet The HardwoodBoss
              </div>
              <div className="flex">
                <div className="x1 goldbar home">
                  <div className="x1"></div>
                </div>
              </div>
              <div className="r-text-sm">
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus.
              </div>
            </div>
            <div className="col">
              <img
                src={Rappers}
                alt=""
                id="third-image-small"
                className="img-responsive pic x2 flex small"
              />
            </div>
          </div>
        </motion.div>
      </Media>

      {/*Tablets*/}
      <Media query="(min-width: 641px) and (max-width: 1024px)">
       <motion.div
          className="graph-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        <div className="row justify-content-evenly open">
          <div className="col-4">
            <div id="open-heading" className="1-text heading-text">
              Providing Superior Quality
            </div>
            <div className="flex">
              <div className="x1 goldbar home">
                <div className="x1"></div>
              </div>
            </div>
            <div className="r-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus.
            </div>
          </div>
          <div className="col-6">
            <img
              src={Kids}
              alt=""
              className="img-responsive pic x2 flex mediums"
            />
          </div>
        </div>
        </motion.div>
      </Media>
      <Media query="(min-width: 641px) and (max-width: 1024px)">
       <motion.div
          className="graph-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        <div className="row justify-content-evenly lasts">
          <div className="col-6">
            <img
              src={Buffer}
              alt=""
              className="img-responsive x2 flex mediums-buff"
            />
          </div>
           <div className="col-4">
            <div id="open-heading" className="1-text heading-text">
              At An Affordable Price
            </div>
            <div className="flex">
              <div className="x1 goldbar home">
                <div className="x1"></div>
              </div>
            </div>
            <div className="r-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus.
            </div>
          </div>
        </div>
        </motion.div>
      </Media>
      <Media query="(min-width: 641px) and (max-width: 1024px)">
      <motion.div
          className="graph-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        <div className="row justify-content-evenly open">
          <div className="col-4">
            <div id="open-heading" className="1-text heading-text">
              Providing Superior Quality
            </div>
            <div className="flex">
              <div className="x1 goldbar home">
                <div className="x1"></div>
              </div>
            </div>
            <div className="r-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus.
            </div>
          </div>
          <div className="col-6">
            <img
              src={Rappers}
              alt=""
              className="img-responsive pic x2 flex mediums-sc"
            />
          </div>
        </div>
        </motion.div>
      </Media>

      <Media query="(min-width: 1025px) and (max-width: 2000px)">
        <div className="flex container-fluid">
          <div className="row">
            <section className="paragraph1">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: -900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="row justify-centent-evenly open">
                  <div className="col-6">
                    <div id="open-heading" className="1-text heading-text">
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
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </div>
                  </div>
                  <div className="col-6">
                    <img src={Kids} alt="" className="img-fluid pic x2 flex" />
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="paragraph2">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: 900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="row justify-content-evenly lasts">
                  <div className="col-6">
                    <img
                      src={Buffer}
                      alt=""
                      className="img-fluid x2 flex second"
                    />
                  </div>
                  <div id="test" className="col-6">
                    <div id="open-headings" className="1-text heading-text">
                      At An Affordable Price
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div id="second-paragraph" className="r-text">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.{" "}
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="paragraph3">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: -900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="row justify-centent-evenly open">
                  <div className="col-6">
                    <div id="open-heading" className="1-text heading-text">
                      Meet The Hardwood Boss
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="r-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </div>
                  </div>
                  <div className="col-6">
                    <img src={Rappers} alt="" className="img-fluid pic x2 flex" />
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </Media>

      {/*Large Screens*/}
      <Media query="(min-width: 2000px)">
        <div className="flex container-fluid">
          <div className="row">
            <section className="paragraph1">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: -900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="row justify-centent-evenly open">
                  <div className="col-6">
                    <div id="open-heading" className="1-text heading-text">
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
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </div>
                  </div>
                  <div className="col-6">
                    <img src={Kids} alt="" className="img-fluid pic x2 flex" style={{width: "600px"}}/>
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="paragraph2">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: 900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="row justify-content-evenly open">
                  <div className="col-4">
                    <img
                      src={Buffer}
                      alt=""
                      className="img-fluid x2 flex second-lg"
                      style={{width: "500px"}}
                    />
                  </div>
                  <div className="col-6 lgs">
                    <div id="open-headings" className="1-text heading-text">
                      At An Affordable Price
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div id="second-paragraph" className="r-text">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.{" "}
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="paragraph3">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: -900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="row justify-centent-evenly open">
                  <div className="col-6">
                    <div id="open-heading" className="1-text heading-text">
                      Meet The Hardwood Boss
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="r-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </div>
                  </div>
                  <div className="col-6">
                    <img src={Rappers} alt="" className="img-fluid pic x2 flex" style={{width: "500px"}}/>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </Media>

      {/* Footer */}
      <div class="container my-5 foot">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center">
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
            Designed by:
            <Link
              to="/"
              class="text-white space"
              onClick={() => window.open(mine, "_blank")}
            >
              Forbush Technologies LLC{" "}
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
