import React from "react";
import { motion } from "framer-motion";
import Media from "react-media";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import Clean from "../images/clean.jpg";
import Damage from "../images/water floors.png";
import Milk from "../images/milk.jpg";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

function About() {
  return (
    <>
      <section
        id="reviews"
        className="page-section call-to-action d-flex mt-10"
      >
        <div className="py-lg-5">
          <div className="col-lg-12 col-md-8 mx-auto">
            <h1 className="mb-5">Customer Reviews</h1>
          </div>
        </div>
      </section>

      {/*Phones*/}
      <Media query="(max-width: 768px)">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <p className="text-center rev mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="review-cards">
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              id="floor-care"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Hardwood Care Instructions</h1>
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
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="caring-steps-sm">
              <div className="row">
                <div className="col">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    How to Take Care of Your Hardwood Floors
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img className="mop-sm" src={Clean} alt="" />
                </div>
              </div>
            </section>

            <section id="dont">
              <div className="row">
               
                <div className="col">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    How to Not Damage Your Floors
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="col">
                  <img src={Damage} alt="" className="damage-sm" />
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-5">
                    <p className="text-center rev mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="review-cards">
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row second-row">
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row third-row">
                  <div className="col-6">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    {" "}
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              id="floor-care"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Hardwood Care Instructions</h1>
                </div>
              </div>
            </section>
            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-7">
                    <p className="text-center rev mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
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
                    How to Take Care of Your Hardwood Floors
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img className="mop" src={Clean} alt="" />
                </div>
              </div>
            </section>

            <section id="dont" className="page-section call-to-action d-flex">
              <div className="row justify-content-evenly">
                <div className="col-6">
                  <img src={Damage} alt="" className="damage" />
                </div>
                <div className="col-5">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    How to Not Damage Your Floors
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
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
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="mistakes">
              <div className="row justify-content-evenly d-flex">
                <div className="col-5">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    Common Mistakes
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="mistake">Step:</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="mistake">Step:</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="mistake">Step:</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img className="milk" src={Milk} alt="" />
                </div>
              </div>
            </section>
          </motion.div>
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

export default About;
