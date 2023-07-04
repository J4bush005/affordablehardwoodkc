import React from "react";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import Install from "../videos/Install 2.mp4";
import Stain from "../videos/Stain Video.mp4";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import Media from "react-media";
import Misc from "../videos/Misc.mp4";
import { motion } from "framer-motion";

import { useRef } from "react";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

function Services() {
  const install = useRef(null);
  const finish = useRef(null);
  const misc = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ScrollToTop />
      <Media query="(max-width: 768px)">
        <div>
           <section id="welcome">
            <div className="row d-flex justify-content-center">
              <div id="style" className="col text-center">
                <div id="open-heading-sm" className="1-text heading-text ">
                  What We Can Do For You
                </div>
                <div className="flex d-flex justify-content-center">
                  <div className="x1 goldbar home-ab">
                    <div className="x1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col">
                <div className="text-center rev">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div>
                  <ul>
                    <li
                      id="move-left-sms"
                      onClick={() => scrollToSection(install)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Installation
                    </li>
                    <li
                      id="section-scroll-about-sms"
                      onClick={() => scrollToSection(finish)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Refinishing
                    </li>
                    <li
                      id="move-right-sms"
                      onClick={() => scrollToSection(misc)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Misc
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="install-section" ref={install}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section
                id="mained"
                className="page-section call-to-action d-flex"
              >
                <video
                  id="install-video"
                  src={Install}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <div id="video-text-sm" className="py-lg-5">
                  <div className="col-lg-1 col-md-8 mx-auto">
                    <h1 className="mb-5">Installation</h1>
                  </div>
                </div>
              </section>

              <section
                id="open-review"
                className=" mt-2 page-section call-to-action d-flex"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <p className="text-center rev mt-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Maecenas porttitor congue massa. Fusce posuere,
                        magna sed pulvinar ultricies, purus lectus malesuada
                        libero, sit amet commodo magna eros quis urna. Nunc
                        viverra imperdiet enim. Fusce est. Vivamus a tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="caring-steps">
                <div className="row justify-content-evenly d-flex">
                  <div className="col">
                    {" "}
                    <div id="care-heading" className="1-text heading-text">
                      Typical Floor Installation Process
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home new">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </section>

          <section id="Refinishing-section" ref={finish}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section
                id="mained"
                className="page-section call-to-action d-flex mt-5"
              >
                <video
                  id="install-video"
                  src={Stain}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <div id="video-text-sm" className="py-lg-5">
                  <div className="col-lg-1 col-md-8 mx-auto">
                    <h1 className="mb-5">Refinishing</h1>
                  </div>
                </div>
              </section>

              <section
                id="open-review"
                className=" mt-2 page-section call-to-action d-flex"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <p className="text-center rev mt-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Maecenas porttitor congue massa. Fusce posuere,
                        magna sed pulvinar ultricies, purus lectus malesuada
                        libero, sit amet commodo magna eros quis urna. Nunc
                        viverra imperdiet enim. Fusce est. Vivamus a tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="caring-steps">
                <div className="row justify-content-evenly d-flex mt-3">
                  <div className="col">
                    {" "}
                    <div id="care-heading" className="1-text heading-text">
                      Typical Floor Refinishing Process
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home new">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </section>

          <section id="misc-section" ref={misc}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section
                id="mained"
                className="page-section call-to-action d-flex mt-5"
              >
                <video
                  id="install-video"
                  src={Misc}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <div id="video-text-sm" className="py-lg-5">
                  <div className="col-lg-1 col-md-8 mx-auto">
                    <h1 className="mb-5">Miscellaneous</h1>
                  </div>
                </div>
              </section>

              <section
                id="open-review"
                className=" mt-2 page-section call-to-action d-flex"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <p className="text-center rev mt-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Maecenas porttitor congue massa. Fusce posuere,
                        magna sed pulvinar ultricies, purus lectus malesuada
                        libero, sit amet commodo magna eros quis urna. Nunc
                        viverra imperdiet enim. Fusce est. Vivamus a tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="caring-steps">
                <div className="row justify-content-evenly d-flex">
                  <div className="col">
                    {" "}
                    <div id="care-heading" className="1-text heading-text">
                      Typical Miscellaneous Jobs
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home new">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </section>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div>
          <section id="welcome">
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div id="open-heading" className="1-text heading-text">
                  What We Can Do For You
                </div>
                <div className="flex">
                  <div className="x1 goldbar home">
                    <div className="x1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div className="r-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div>
                  <ul>
                    <li
                      id="move-left"
                      onClick={() => scrollToSection(install)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Installation
                    </li>
                    <li
                      id="section-scroll-about"
                      onClick={() => scrollToSection(finish)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Refinishing
                    </li>
                    <li
                      id="move-right"
                      onClick={() => scrollToSection(misc)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Miscellaneous
                    </li>
                  </ul>
                </div>
              </div>
            </div>

             <div className="row d-flex justify-content-center">
              <div className="col-3">
                <div>
                  <ul>
                    <li
                      id="move-left-last"
                      onClick={() => scrollToSection(install)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Installation
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="install-section" ref={install}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section
                id="mained"
                className="page-section call-to-action d-flex"
              >
                <video
                  id="install-video"
                  src={Install}
                  autoPlay
                  loop
                  muted
                ></video>
                <div id="video-text" className="py-lg-5">
                  <div className="col-lg-1 col-md-8 mx-auto">
                    <h1 className="mb-5">Installation</h1>
                  </div>
                </div>
              </section>

              <section
                id="open-review"
                className=" mt-2 page-section call-to-action d-flex"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <p className="text-center rev mt-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Maecenas porttitor congue massa. Fusce posuere,
                        magna sed pulvinar ultricies, purus lectus malesuada
                        libero, sit amet commodo magna eros quis urna. Nunc
                        viverra imperdiet enim. Fusce est. Vivamus a tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="caring-steps">
                <div className="row justify-content-evenly d-flex">
                  <div className="col-5">
                    {" "}
                    <div id="care-heading" className="1-text heading-text">
                      Typical Floor Installation Process
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home new-install">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </section>

          <section id="Refinishing-section" ref={finish}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section
                id="mained"
                className="page-section call-to-action d-flex mt-5"
              >
                <video
                  id="install-video"
                  src={Stain}
                  autoPlay
                  loop
                  muted
                ></video>
                <div id="video-text" className="py-lg-5">
                  <div className="col-lg-1 col-md-8 mx-auto">
                    <h1 className="mb-5">Refinishing</h1>
                  </div>
                </div>
              </section>

              <section
                id="open-review"
                className=" mt-2 page-section call-to-action d-flex"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <p className="text-center rev mt-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Maecenas porttitor congue massa. Fusce posuere,
                        magna sed pulvinar ultricies, purus lectus malesuada
                        libero, sit amet commodo magna eros quis urna. Nunc
                        viverra imperdiet enim. Fusce est. Vivamus a tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="caring-steps">
                <div className="row justify-content-evenly d-flex">
                  <div className="col-5">
                    {" "}
                    <div id="care-heading" className="1-text heading-text">
                      Typical Floor Refinishing Process
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home new-install">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </section>

          <section id="misc-section" ref={misc}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section
                id="mained"
                className="page-section call-to-action d-flex mt-5"
              >
                <video
                  id="install-video"
                  src={Misc}
                  autoPlay
                  loop
                  muted
                ></video>
                <div id="video-text" className="py-lg-5">
                  <div className="col-lg-1 col-md-8 mx-auto">
                    <h1 className="mb-5">Miscellaneous</h1>
                  </div>
                </div>
              </section>

              <section
                id="open-review"
                className=" mt-2 page-section call-to-action d-flex"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <p className="text-center rev mt-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Maecenas porttitor congue massa. Fusce posuere,
                        magna sed pulvinar ultricies, purus lectus malesuada
                        libero, sit amet commodo magna eros quis urna. Nunc
                        viverra imperdiet enim. Fusce est. Vivamus a tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="caring-steps">
                <div className="row justify-content-evenly d-flex">
                  <div className="col-11">
                    {" "}
                    <div id="care-heading" className="1-text heading-text">
                      Typical Miscellaneous Jobs
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar home new">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Step</div>
                          <div className="second-word">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </section>
        </div>
      </Media>
      <div class="container my-5 foot">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      About us
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Services" class="foot-hover">
                      Services
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      Reviews
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      Find a Career
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Contact" class="foot-hover">
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
              class="foot-hover space"
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

export default Services;
