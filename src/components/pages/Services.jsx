import React from "react";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import Install from "../videos/Install 2.mp4";
import Stain from "../videos/Stain Video.mp4";
import Insta from "../images/ig logo.webp";
import Face from "../images/face.webp";
import Linked from "../images/Linked.webp";
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
  const estimate = useRef(null);

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
                  At Affordable Hardwood, we pride ourselves on our ability to
                  fulfill a wide range of hardwood floor requests and go beyond
                  traditional services. Our expertise extends far beyond the
                  installation, refinishing, and repair of hardwood floors. We
                  understand that each customer may have unique needs and
                  desires, and we are dedicated to accommodating them. Whether
                  you have a specific design vision, require custom staining or
                  inlays, or seek unique finishes or textures, we have the skill
                  and creativity to bring your ideas to life.
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
                  id="install-video-sm"
                  src={Install}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <div id="video-text-sm" className="py-lg-5">
                  <div className="col-lg-1 ">
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
                        At Affordable Hardwood, our installation service sets
                        the standard of excellence in the industry. With
                        meticulous attention to detail and unwavering dedication
                        to quality, we go above and beyond to ensure flawless
                        installations that surpass customer expectations. Our
                        team of skilled professionals possesses extensive
                        expertise in hardwood floor installation, employing
                        precise techniques and utilizing top-of-the-line
                        equipment to deliver impeccable results.
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
                          <div className="first-word">
                            Subfloor Preparation:
                          </div>
                          <div className="second-word">
                            {" "}
                            Assess the condition of the subfloor and ensure it
                            is clean, level, and free from any debris. Address
                            any issues, such as unevenness or moisture, to
                            create a suitable foundation for the hardwood
                            flooring.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Layout and Planning:</div>
                          <div className="second-word">
                            {" "}
                            Plan the layout of the hardwood flooring,
                            considering factors such as room size, direction of
                            the wood grain, and transitions between different
                            areas or flooring materials. Ensure an aesthetically
                            pleasing and functional arrangement.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Installation Method:</div>
                          <div className="second-word">
                            {" "}
                            Choose the appropriate installation method based on
                            the type of hardwood flooring and the subfloor.
                            Common methods include glue-down, nail-down, or
                            floating installations. Follow manufacturer
                            guidelines and industry best practices for each
                            method.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Plank Installation:</div>
                          <div className="second-word">
                            {" "}
                            Begin installing the hardwood planks according to
                            the chosen layout and installation method. Use
                            appropriate fasteners or adhesives to securely
                            attach the planks to the subfloor.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">
                            Cutting and Trimming:
                          </div>
                          <div className="second-word">
                            {" "}
                            Cut and trim the hardwood planks as needed to fit
                            around obstacles, walls, or architectural features.
                            Ensure precise measurements and clean cuts for a
                            professional finish.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">
                            Transitions and Trim Work:
                          </div>
                          <div className="second-word">
                            {" "}
                            Install transitions and molding pieces to create
                            smooth and aesthetically pleasing transitions
                            between different rooms, flooring materials, or
                            surfaces. Install baseboards or trim around the
                            perimeter of the room for a polished look.
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
                  id="install-video-sm"
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
                        At Affordable Hardwood, our refinishing service
                        exemplifies a standard of excellence in the industry.
                        With meticulous attention to detail and a passion for
                        restoring the natural beauty of hardwood floors, we go
                        above and beyond to deliver exceptional refinishing
                        results. Our skilled professionals utilize
                        state-of-the-art sanding equipment and techniques to
                        remove old finishes, stains, and imperfections,
                        revealing the true splendor of the wood. We offer
                        optional staining to enhance the floor's color and
                        grain, customizing the result to your preferences.
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
                          <div className="first-word">Inspect and Prep:</div>
                          <div className="second-word">
                            {" "}
                            Inspect the existing hardwood floors to assess their
                            condition, including any wear, scratches, or damage.
                            Prepare the area by removing furniture, rugs, and
                            other objects from the space.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Sanding:</div>
                          <div className="second-word">
                            {" "}
                            Use professional-grade sanding equipment to remove
                            the old finish, stains, scratches, and imperfections
                            from the hardwood surface. Begin with a coarse grit
                            sandpaper and gradually progress to finer grits for
                            a smooth and even result. Take care to maintain
                            consistent pressure and movement during the sanding
                            process.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Apply Stain:</div>
                          <div className="second-word">
                            {" "}
                            If desired, apply stain to the sanded hardwood floor
                            to achieve a specific color or enhance the natural
                            wood grain. Ensure even coverage and follow the
                            manufacturer's instructions for the staining
                            product, including drying time and recommended
                            number of coats.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Apply Finish:</div>
                          <div className="second-word">
                            {" "}
                            Apply a protective finish, such as polyurethane or
                            varnish, to seal and enhance the appearance of the
                            hardwood floor. Use a brush, roller, or applicator
                            pad to evenly distribute the finish, following the
                            grain of the wood. Apply multiple coats as needed,
                            allowing sufficient drying time between coats.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">
                            Apply a Buff and Polish:
                          </div>
                          <div className="second-word">
                            {" "}
                            After the final coat of finish has dried, buff the
                            hardwood floor to smooth out any imperfections or
                            unevenness. Use a buffer or a buffing machine with a
                            fine-grit pad to achieve a smooth and glossy finish.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Clean and Inspect:</div>
                          <div className="second-word">
                            {" "}
                            Thoroughly clean the refinished hardwood floor,
                            removing any dust or debris. Conduct a final
                            inspection to ensure the finish is even, smooth, and
                            free from blemishes. Make any necessary touch-ups or
                            corrections.
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
                  id="install-video-sm"
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
                        At Affordable Hardwood, we offer a range of services
                        that go beyond traditional hardwood flooring, ensuring
                        we meet all of our customers' needs. Our skilled team is
                        equipped to provide additional services such as concrete
                        leveling, building staircases, installing Luxury Vinyl
                        Tile (LVT) flooring, and performing floor repairs.
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
                          <div className="first-word">Concrete Leveling</div>
                          <div className="second-word">
                            {" "}
                            At Affordable Hardwood, our concrete leveling
                            service is designed to address uneven or sunken
                            concrete surfaces. Our skilled technicians utilize
                            advanced techniques and leveling materials to
                            restore the integrity and stability of the concrete.
                            The process involves assessing the condition of the
                            concrete, selecting the appropriate leveling
                            material, and applying it to the affected areas. The
                            leveling material self-levels, filling in low spots
                            and raising sunken sections to create a smooth and
                            even surface.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Floor Repairs</div>
                          <div className="second-word">
                            {" "}
                            At Affordable Hardwood, our floor repair service is
                            dedicated to addressing a range of issues and
                            restoring the integrity of your hardwood floors. Our
                            skilled technicians have the expertise to handle
                            various types of floor repairs, including damaged
                            boards, scratches, or minor imperfections. The
                            process begins with a thorough assessment of the
                            floor to identify the specific areas that require
                            attention. Our team then employs precise techniques
                            to address the damage, such as replacing damaged
                            boards, sanding and refinishing scratched areas, or
                            filling in minor imperfections.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">LVT Installs</div>
                          <div className="second-word">
                            {" "}
                            At Affordable Hardwood, our Luxury Vinyl Tile (LVT)
                            installation service brings the beauty and
                            resilience of this versatile flooring option to your
                            space. Our experienced team is well-versed in the
                            precise techniques required for LVT installation.
                            The process begins with meticulous planning and
                            preparation, including measuring the area and
                            assessing the subfloor condition. Our skilled
                            installers then carefully lay the LVT planks or
                            tiles, ensuring precise fitting and alignment for a
                            seamless and visually appealing result.
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
                   At Affordable Hardwood, we pride ourselves on our ability to
                  fulfill a wide range of hardwood floor requests and go beyond
                  traditional services. Our expertise extends far beyond the
                  installation, refinishing, and repair of hardwood floors. We
                  understand that each customer may have unique needs and
                  desires, and we are dedicated to accommodating them. Whether
                  you have a specific design vision, require custom staining or
                  inlays, or seek unique finishes or textures, we have the skill
                  and creativity to bring your ideas to life.
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
                        At Affordable Hardwood, our installation service sets
                        the standard of excellence in the industry. With
                        meticulous attention to detail and unwavering dedication
                        to quality, we go above and beyond to ensure flawless
                        installations that surpass customer expectations. Our
                        team of skilled professionals possesses extensive
                        expertise in hardwood floor installation, employing
                        precise techniques and utilizing top-of-the-line
                        equipment to deliver impeccable results.
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
                          <div className="first-word">Subfloor Preparation:</div>
                          <div className="second-word">
                            {" "}
                           Assess the condition of the subfloor and ensure it
                            is clean, level, and free from any debris. Address
                            any issues, such as unevenness or moisture, to
                            create a suitable foundation for the hardwood
                            flooring.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Layout and Planning:</div>
                          <div className="second-word">
                            {" "}
                             Plan the layout of the hardwood flooring,
                            considering factors such as room size, direction of
                            the wood grain, and transitions between different
                            areas or flooring materials. Ensure an aesthetically
                            pleasing and functional arrangement.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Installation Method:</div>
                          <div className="second-word">
                            {" "}
                            Choose the appropriate installation method based on
                            the type of hardwood flooring and the subfloor.
                            Common methods include glue-down, nail-down, or
                            floating installations. Follow manufacturer
                            guidelines and industry best practices for each
                            method.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Plank Installation:</div>
                          <div className="second-word">
                            {" "}
                            Begin installing the hardwood planks according to
                            the chosen layout and installation method. Use
                            appropriate fasteners or adhesives to securely
                            attach the planks to the subfloor.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Cutting and Trimming:</div>
                          <div className="second-word">
                            {" "}
                            Cut and trim the hardwood planks as needed to fit
                            around obstacles, walls, or architectural features.
                            Ensure precise measurements and clean cuts for a
                            professional finish.
                          </div>
                        </div>
                      </div>
                    </div>
                     <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Transitions and Trim Work:</div>
                          <div className="second-word">
                            {" "}
                            Install transitions and molding pieces to create
                            smooth and aesthetically pleasing transitions
                            between different rooms, flooring materials, or
                            surfaces. Install baseboards or trim around the
                            perimeter of the room for a polished look.
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
                        At Affordable Hardwood, our refinishing service
                        exemplifies a standard of excellence in the industry.
                        With meticulous attention to detail and a passion for
                        restoring the natural beauty of hardwood floors, we go
                        above and beyond to deliver exceptional refinishing
                        results. Our skilled professionals utilize
                        state-of-the-art sanding equipment and techniques to
                        remove old finishes, stains, and imperfections,
                        revealing the true splendor of the wood. We offer
                        optional staining to enhance the floor's color and
                        grain, customizing the result to your preferences.
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
                      <div className="col-10">
                        <div className="first-row">
                          <div className="first-word">Inspect and Prep:</div>
                          <div className="second-word">
                            {" "}
                            Inspect the existing hardwood floors to assess their
                            condition, including any wear, scratches, or damage.
                            Prepare the area by removing furniture, rugs, and
                            other objects from the space.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Sanding:</div>
                          <div className="second-word">
                            {" "}
                            Use professional-grade sanding equipment to remove
                            the old finish, stains, scratches, and imperfections
                            from the hardwood surface. Begin with a coarse grit
                            sandpaper and gradually progress to finer grits for
                            a smooth and even result. Take care to maintain
                            consistent pressure and movement during the sanding
                            process.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Apply Stain:</div>
                          <div className="second-word">
                            {" "}
                             If desired, apply stain to the sanded hardwood floor
                            to achieve a specific color or enhance the natural
                            wood grain. Ensure even coverage and follow the
                            manufacturer's instructions for the staining
                            product, including drying time and recommended
                            number of coats.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <div className="first-row">
                          <div className="first-word">Apply Finish:</div>
                          <div className="second-word">
                            {" "}
                            Apply a protective finish, such as polyurethane or
                            varnish, to seal and enhance the appearance of the
                            hardwood floor. Use a brush, roller, or applicator
                            pad to evenly distribute the finish, following the
                            grain of the wood. Apply multiple coats as needed,
                            allowing sufficient drying time between coats.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Apply a Buff and Polish:</div>
                          <div className="second-word">
                            {" "}
                           After the final coat of finish has dried, buff the
                            hardwood floor to smooth out any imperfections or
                            unevenness. Use a buffer or a buffing machine with a
                            fine-grit pad to achieve a smooth and glossy finish.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <div className="first-row">
                          <div className="first-word">Clean and Inspect:</div>
                          <div className="second-word">
                            {" "}
                            Thoroughly clean the refinished hardwood floor,
                            removing any dust or debris. Conduct a final
                            inspection to ensure the finish is even, smooth, and
                            free from blemishes. Make any necessary touch-ups or
                            corrections.
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
                        At Affordable Hardwood, we offer a range of services
                        that go beyond traditional hardwood flooring, ensuring
                        we meet all of our customers' needs. Our skilled team is
                        equipped to provide additional services such as concrete
                        leveling, building staircases, installing Luxury Vinyl
                        Tile (LVT) flooring, and performing floor repairs.
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
                          <div className="first-word">Concrete Leveling:</div>
                          <div className="second-word">
                            {" "}
                            At Affordable Hardwood, our concrete leveling
                            service is designed to address uneven or sunken
                            concrete surfaces. Our skilled technicians utilize
                            advanced techniques and leveling materials to
                            restore the integrity and stability of the concrete.
                            The process involves assessing the condition of the
                            concrete, selecting the appropriate leveling
                            material, and applying it to the affected areas. The
                            leveling material self-levels, filling in low spots
                            and raising sunken sections to create a smooth and
                            even surface.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">Floor Repairs:</div>
                          <div className="second-word">
                            {" "}
                           At Affordable Hardwood, our floor repair service is
                            dedicated to addressing a range of issues and
                            restoring the integrity of your hardwood floors. Our
                            skilled technicians have the expertise to handle
                            various types of floor repairs, including damaged
                            boards, scratches, or minor imperfections. The
                            process begins with a thorough assessment of the
                            floor to identify the specific areas that require
                            attention. Our team then employs precise techniques
                            to address the damage, such as replacing damaged
                            boards, sanding and refinishing scratched areas, or
                            filling in minor imperfections.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="first-row">
                          <div className="first-word">LVT Installs:</div>
                          <div className="second-word">
                            {" "}
                            At Affordable Hardwood, our Luxury Vinyl Tile (LVT)
                            installation service brings the beauty and
                            resilience of this versatile flooring option to your
                            space. Our experienced team is well-versed in the
                            precise techniques required for LVT installation.
                            The process begins with meticulous planning and
                            preparation, including measuring the area and
                            assessing the subfloor condition. Our skilled
                            installers then carefully lay the LVT planks or
                            tiles, ensuring precise fitting and alignment for a
                            seamless and visually appealing result.
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

export default Services;
