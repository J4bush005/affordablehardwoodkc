import React from "react";
import { motion } from "framer-motion";
import Media from "react-media";
import Carousels from "../Carousels";
import Demo10 from "../images/Demo 10.webp";
import Insta from "../images/ig logo.webp";
import Face from "../images/face.webp";
import Linked from "../images/Linked.webp";
import Kids from "../images/kids.webp";
import Buffer from "../images/buff.webp";
import Rappers from "../images/Rappers.webp";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import { Carousel } from "bootstrap";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://www.forbushtech.com/";

function Home() {
  return (
    <>
      <ScrollToTop />
      <Carousels />
      {/*PHONES*/}
      <Media query="(max-width: 768px)">
        <div className="flex container">
          <div className="row">
            <motion.div
              className="graph-container"
              initial={{ opacity: 0, x: -9 }}
              whileInView={{ opacity: 1, x: 10 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="row sm-screen">
                <div className="col-11">
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
                    At Affordable Hardwood, we take immense pride in our
                    commitment to providing superior quality work that exceeds
                    your expectations. We source the finest materials and
                    utilize state-of-the-art techniques and equipment to achieve
                    impeccable results. Trust us to deliver a finished product
                    that is not only visually stunning but also built to
                    withstand the demands of everyday life. Your satisfaction is
                    our top priority, and we strive to create a lasting
                    partnership with every client based on trust, reliability,
                    and unparalleled quality. Experience the Affordable Hardwood
                    difference and let us transform your space into a true
                    masterpiece.
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
            <motion.div
              className="graph-container"
              initial={{ opacity: 0, x: -9 }}
              whileInView={{ opacity: 1, x: 10 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div id="sm-screen" className="row">
                <div className="col-11">
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
                    At Affordable Hardwood, we believe that superior quality
                    shouldn't come at a premium price. We are proud to offer
                    some of the most affordable prices in the industry without
                    compromising on the excellence of our work. Our commitment
                    to providing exceptional craftsmanship and top-notch
                    materials extends to ensuring that our services remain
                    accessible to all. With our competitive pricing, you can
                    experience the highest level of quality and professionalism
                    without breaking the bank. We understand the importance of
                    value for our customers, and that's why we strive to deliver
                    the perfect balance of affordability and superior results.
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

            <motion.div
              className="install-small mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section className="">
                <div className="row justify-content-center">
                  <div className="col-11">
                    <div className="1-text heading-text brag-small">
                      Kansas City's Number One Floor Company
                    </div>
                    <div className="flex">
                      <div className="x1 goldbar-small home">
                        <div className="x1"></div>
                      </div>
                    </div>
                    <div className="row justify-content-evenly">
                      <div className="r-text-sm">
                        Discover why Affordable Hardwood is the number one
                        hardwood flooring company in Kansas City. With an
                        unmatched reputation for excellence, we offer a
                        comprehensive range of services that include
                        installation, refinishing, and even concrete leveling.
                        Our team of skilled professionals combines extensive
                        experience with a meticulous attention to detail,
                        ensuring flawless results every time. Whether you're
                        looking to enhance your residential or commercial space,
                        trust Affordable Hardwood to provide unparalleled
                        expertise and customer satisfaction. Experience the
                        difference and elevate your surroundings with the
                        leading hardwood flooring specialists in Kansas City.
                      </div>
                      <div className="col">
                        <img src={Demo10} alt="" className="demo-pic-small" />
                      </div>
                      <div className="row view">
                        <Link
                          to={"/Services"}
                          className="service mb-2"
                          type="button"
                          role="button"
                        >
                          View Our Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>

            <motion.div
              className="graph-container"
              initial={{ opacity: 0, x: -9 }}
              whileInView={{ opacity: 1, x: 10 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="row screen">
                <div className="col-11">
                  <div
                    id="third-open-heading-sm"
                    className="1-text heading-text"
                  >
                    Meet The HardwoodBoss
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="r-text-sm">
                    {" "}
                    With over 25 years of experience in the industry, owner
                    Johnathon Forbush started this business with a vision of
                    providing exceptional hardwood services to customers like
                    you. Throughout the years, Johnathon has honed his craft and
                    perfected his techniques, ensuring that every project is
                    executed with precision and expertise. At Affordable
                    Hardwood, we take great pride in our dedication to
                    delivering the best service and results to our valued
                    customers. From hardwood floor installations to refinishing
                    and repairs, our team is committed to exceeding your
                    expectations. Experience the unparalleled craftsmanship and
                    personalized attention to detail that sets Affordable
                    Hardwood apart. Trust us to transform your space into a
                    stunning showcase of timeless beauty and durability. Your
                    satisfaction is our utmost priority.
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
          </div>
        </div>
      </Media>

      {/*Laptops*/}
      <Media query="(min-width: 769px)">
        <div className="flex container-fluid">
          <div className="row">
            <section className="paragraph1">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: -900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="row justify-content-evenly open">
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
                      At Affordable Hardwood, we take immense pride in our
                      commitment to providing superior quality work that exceeds
                      your expectations. We source the finest materials and
                      utilize state-of-the-art techniques and equipment to
                      achieve impeccable results. Trust us to deliver a finished
                      product that is not only visually stunning but also built
                      to withstand the demands of everyday life. Your
                      satisfaction is our top priority, and we strive to create
                      a lasting partnership with every client based on trust,
                      reliability, and unparalleled quality. Experience the
                      Affordable Hardwood difference and let us transform your
                      space into a true masterpiece.
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
                viewport={{ once: true }}
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
                      At Affordable Hardwood, we believe that superior quality
                      shouldn't come at a premium price. We are proud to offer
                      some of the most affordable prices in the industry without
                      compromising on the excellence of our work. Our commitment
                      to providing exceptional craftsmanship and top-notch
                      materials extends to ensuring that our services remain
                      accessible to all. With our competitive pricing, you can
                      experience the highest level of quality and
                      professionalism without breaking the bank. We understand
                      the importance of value for our customers, and that's why
                      we strive to deliver the perfect balance of affordability
                      and superior results.{" "}
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
            <motion.div
              className="install mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section className="mt-5">
                <div className="row justify-content-center">
                  <div className="col-5">
                    <div className="1-text heading-text brag">
                      Kansas City's Number One Floor Company
                    </div>
                  </div>
                </div>
                <div className="row justify-content-evenly mt-5">
                  <div className="col-6">
                    <img src={Demo10} alt="" className="demo-pic img-fluid" />
                  </div>
                  <div className="col-6">
                    <div className="r-text-brag">
                      Discover why Affordable Hardwood is the number one
                      hardwood flooring company in Kansas City. With an
                      unmatched reputation for excellence, we offer a
                      comprehensive range of services that include installation,
                      refinishing, and even concrete leveling. Our team of
                      skilled professionals combines extensive experience with a
                      meticulous attention to detail, ensuring flawless results
                      every time. Whether you're looking to enhance your
                      residential or commercial space, trust Affordable Hardwood
                      to provide unparalleled expertise and customer
                      satisfaction. Experience the difference and elevate your
                      surroundings with the leading hardwood flooring
                      specialists in Kansas City.
                    </div>
                    <div className="row view">
                      <Link
                        to={"/Services"}
                        className="service"
                        type="button"
                        role="button"
                      >
                        View Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>

            <section className="paragraph3">
              <motion.div
                className="graph-container"
                initial={{ opacity: 0, x: -900 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="row justify-content-evenly open">
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
                      With over 25 years of experience in the industry, owner
                      Johnathon Forbush started this business with a vision of
                      providing exceptional hardwood services to customers like
                      you. Throughout the years, Johnathon has honed his craft
                      and perfected his techniques, ensuring that every project
                      is executed with precision and expertise. At Affordable
                      Hardwood, we take great pride in our dedication to
                      delivering the best service and results to our valued
                      customers. From hardwood floor installations to
                      refinishing and repairs, our team is committed to
                      exceeding your expectations. Experience the unparalleled
                      craftsmanship and personalized attention to detail that
                      sets Affordable Hardwood apart. Trust us to transform your
                      space into a stunning showcase of timeless beauty and
                      durability. Your satisfaction is our utmost priority.
                    </div>
                  </div>
                  <div className="col-6">
                    <img
                      src={Rappers}
                      alt=""
                      className="img-fluid pic"
                    />
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
                    <Link to="/Estimate" class="foot-hover">
                      Request An Estimate
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

export default Home;
