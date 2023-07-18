import React from "react";
import { motion } from "framer-motion";
import Media from "react-media";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.webp";
import Face from "../images/face.webp";
import Linked from "../images/Linked.webp";
import Clean from "../images/clean.webp";
import ScrollToTop from "../ScrollToTop";
import { useRef } from "react";


const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

function About() {
  const reviews = useRef(null);
  const care = useRef(null);
  const jobs = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      {/*Phones*/}
      <Media query="(max-width: 768px)">
        <div>
          <section id="welcome">
            <div className="row d-flex justify-content-center">
              <div id="style" className="col text-center">
                <div id="open-heading-sm" className="1-text heading-text ">
                  About Our Family
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
                  At Affordable Hardwood, we pride ourselves on fostering a
                  welcoming and inclusive environment that feels like family. We
                  treat our customers with the same care and respect that we
                  would extend to our own loved ones. We prioritize open
                  communication, trust, and a genuine commitment to your
                  satisfaction.
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div>
                  <ul>
                    <li
                      id="move-left-sm"
                      onClick={() => scrollToSection(reviews)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Our Reviews
                    </li>
                    <li
                      id="section-scroll-about-sm"
                      onClick={() => scrollToSection(care)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Floor Caring Tips
                    </li>
                    <li
                      id="move-right-sm"
                      onClick={() => scrollToSection(jobs)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Find A Career
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              ref={reviews}
              id="reviews"
              className="page-section call-to-action d-flex mt-10"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Customer Reviews</h1>
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
                      At Affordable Hardwood, we consistently exceed customer
                      expectations. From attentive listening to meticulous
                      execution, our dedicated professionals go the extra mile
                      to deliver exceptional results. With open communication
                      and personalized solutions, we transform your space into a
                      true reflection of your vision. Trust us to exceed your
                      needs and provide unparalleled customer satisfaction.
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
                            "My sister kitchen floor was dry-rotted and needed
                            someone to look at it to get a quote/estimate my
                            neice referred him to us but I failed to take a
                            before and after shot of the damage floor...the
                            repair was priceless the entire family gave him a
                            100% rating for an outstanding job as well as being
                            very professional, knowledgeable, honest, kind and
                            polite...I highly recommend his service"
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
                            "I contacted Johnathon/Affordable Hardwood for a
                            quote on refinishing my existing floors. I explained
                            what I wanted and he was knowledgeable about the
                            finish and look I was going for. Pricing was
                            competitive and quality is amazing! The team worked
                            diligently! I highly recommend this company for your
                            flooring needs!"
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
                            "I want to thank Johnathon and his team for the
                            amazing job on my floors not only were they
                            professional they also was very efficient and clean
                            , They got the job done in a timely manner. My
                            floors look absolutely amazing ... I would recommend
                            them to ANYONE! If you want the job done right ..
                            contact Affordable hardwood .. you will not be
                            disappointed!!!!"
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
              ref={care}
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
                      At Affordable Hardwood, we understand the importance of
                      maintaining the pristine condition of your newly installed
                      floors. To help you protect your investment and ensure
                      their long-lasting beauty, we provide valuable floor care
                      instructions. By following these guidelines, you can
                      safeguard your floors from damage and enjoy their
                      impeccable appearance for years to come.
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
                        <div className="first-word">Prevent Measures</div>
                        <div className="second-word">
                          {" "}
                          Protect your floors by using felt pads or furniture
                          glides under your furniture to prevent scratches.
                          Avoid dragging heavy objects across the floor and
                          consider using area rugs or mats in high-traffic areas
                          to minimize wear.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Regular Cleaning</div>
                        <div className="second-word">
                          {" "}
                          Sweep or vacuum your hardwood floors regularly to
                          remove dust, dirt, and debris. Use a soft-bristle
                          broom or a vacuum with a floor attachment to avoid
                          scratching the surface. Avoid using a vacuum with a
                          beater bar, as it can damage the floor.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Spill Cleanup</div>
                        <div className="second-word">
                          {" "}
                          Accidents happen, so it's essential to clean up spills
                          promptly to prevent staining or warping. Use a soft,
                          damp cloth or mop to gently blot the spill, working
                          from the edges toward the center. Avoid excessive
                          moisture and ensure the floor is completely dry after
                          cleaning.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">
                          Proper Cleaning Products
                        </div>
                        <div className="second-word">
                          {" "}
                          Use hardwood floor cleaners specifically designed for
                          your floor type. Avoid using harsh chemicals, abrasive
                          cleaners, or excessive water, as they can damage the
                          finish. Follow the manufacturer's instructions and
                          test any new cleaning product in an inconspicuous area
                          first.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Expert Cleaning</div>
                        <div className="second-word">
                          {" "}
                          Consider scheduling professional hardwood floor
                          maintenance periodically to ensure your floors receive
                          the care they need. Professional cleaning and
                          refinishing can help restore the shine and luster of
                          your hardwood floors, enhancing their longevity and
                          beauty.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              ref={jobs}
              id="find-career"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Find a Career</h1>
                </div>
              </div>
            </section>

            <section id="join-fam">
              <div className="row">
                <div className="col">
                  <div id="care-heading" className="1-text heading-text">
                    Join Our Family
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div id="fam" className="second-word">
                    {" "}
                    We welcome dedicated individuals who are eager to join our
                    family-oriented team. As a leading hardwood flooring
                    company, we prioritize excellence, professionalism, and a
                    supportive work environment. We value the contributions of
                    each team member and foster a sense of belonging and growth.
                    Whether you have experience in installation, refinishing,
                    customer service, or administration, we invite you to apply
                    and become a part of our thriving family at Affordable
                    Hardwood. Embrace the opportunity to work alongside industry
                    experts, enhance your skills, and contribute to our
                    continued success. Join us on this exciting journey and
                    let's create beautiful spaces together.
                  </div>
                </div>
              </div>
            </section>

            <section id="job-table">
              <div className="row justify-content-center mt-5">
                <div className="col-10">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th
                          id="plus"
                          data-bs-toggle="collapse"
                          data-bs-target=".collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                        >
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=".collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Craftsman
                        </td>
                        <section
                          id="Crafts-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                A hardwood floor craftsman is a skilled
                                professional who specializes in the artistry of
                                hardwood flooring. At Affordable Hardwood, our
                                craftsmen are the backbone of our business,
                                bringing years of experience and expertise to
                                every project. They possess a deep understanding
                                of different wood species, finishes, and
                                installation techniques, ensuring precise and
                                flawless results.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Hardwood Floor Installation: Perform expert
                                  installation of hardwood floors, ensuring
                                  precise measurements, proper subfloor
                                  preparation, and secure placement of the
                                  flooring materials.
                                </li>
                                <li id="list" className="list-group-item">
                                  Refinishing and Sanding: Skillfully sand and
                                  refinish hardwood floors, removing old
                                  finishes, repairing any imperfections, and
                                  applying new coatings to restore the floor's
                                  beauty and durability.
                                </li>
                                <li id="list" className="list-group-item">
                                  Repairs and Maintenance: Assess and repair
                                  damaged hardwood floors, including replacing
                                  damaged boards, fixing gaps or squeaks, and
                                  addressing any issues with the floor's
                                  stability.
                                </li>
                                <li id="list" className="list-group-item">
                                  Attention to Detail: Exhibit meticulous
                                  attention to detail throughout the entire
                                  process, from assessing the space and making
                                  precise measurements to ensuring a flawless
                                  finish and seamless transitions between floor
                                  sections.
                                </li>
                                <li id="list" className="list-group-item">
                                  Continuous Learning: Stay updated with
                                  industry trends, techniques, and new products
                                  to enhance skills and knowledge in hardwood
                                  flooring craftsmanship.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th
                          id="plus"
                          scope="row"
                          data-bs-toggle="collapse"
                          data-bs-target=".inst.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                        >
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=".inst.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Installer
                        </td>
                        <section
                          id="Installer-desc"
                          className="inst collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                A hardwood floor installer at Affordable
                                Hardwood is a skilled professional responsible
                                for expertly installing hardwood floors in
                                residential and commercial settings. With a keen
                                eye for detail and a focus on precision, our
                                installers take pride in transforming spaces
                                with the timeless beauty of hardwood flooring.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Measurement and Assessment: Accurately measure
                                  the installation area and assess the condition
                                  of the subfloor, ensuring it is level, clean,
                                  and suitable for hardwood flooring
                                  installation.
                                </li>
                                <li id="list" className="list-group-item">
                                  Subfloor Preparation: Prepare the subfloor by
                                  removing existing flooring materials,
                                  smoothing rough areas, and addressing any
                                  issues such as moisture or unevenness to
                                  create a solid foundation for the hardwood
                                  flooring.
                                </li>
                                <li id="list" className="list-group-item">
                                  Installation Techniques: Apply appropriate
                                  installation techniques such as glue-down,
                                  nail-down, or floating methods based on the
                                  project requirements, ensuring proper
                                  alignment, spacing, and secure attachment of
                                  hardwood planks.
                                </li>
                                <li id="list" className="list-group-item">
                                  Cutting and Fitting: Use precise cutting tools
                                  to trim hardwood planks as needed, ensuring
                                  seamless integration with existing structures,
                                  corners, and edges for a professional and
                                  finished appearance.
                                </li>
                                <li id="list" className="list-group-item">
                                  Equipment and Tools: Operate and maintain a
                                  variety of installation tools and equipment,
                                  including saws, nailers, adhesive applicators,
                                  and moisture meters, ensuring they are in good
                                  working condition.
                                </li>
                                <li id="list" className="list-group-item">
                                  Safety and Compliance: Adhere to safety
                                  protocols, including proper handling of tools,
                                  following safety guidelines for the use of
                                  adhesives and finishing products, and
                                  maintaining a safe work environment.
                                </li>
                                <li id="list" className="list-group-item">
                                  Collaboration: Work collaboratively with other
                                  team members, such as contractors or project
                                  managers, to ensure seamless coordination and
                                  timely completion of projects.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th
                          id="plus"
                          scope="row"
                          data-bs-toggle="collapse"
                          data-bs-target=".sand.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                        >
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=".sand.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Sander
                        </td>
                        <section
                          id="Sander-desc"
                          className="sand collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                A hardwood floor sander and finisher at
                                Affordable Hardwood is a skilled professional
                                responsible for refinishing and restoring the
                                natural beauty of hardwood floors. With
                                precision and expertise, our sanders and
                                finishers take worn or damaged floors and
                                transform them into stunning masterpieces. They
                                use state-of-the-art sanding equipment to remove
                                old finishes, stains, and imperfections,
                                preparing the surface for a fresh new look.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Floor Assessment: Inspect hardwood floors to
                                  evaluate their condition and determine the
                                  appropriate refinishing process required.
                                </li>
                                <li id="list" className="list-group-item">
                                  Sanding: Utilize professional sanding
                                  equipment to remove old finishes, stains,
                                  scratches, and imperfections from the hardwood
                                  surface, ensuring a smooth and level result.
                                </li>
                                <li id="list" className="list-group-item">
                                  Dust Containment: Implement proper dust
                                  containment measures during the sanding
                                  process to minimize the spread of dust and
                                  debris throughout the space.
                                </li>
                                <li id="list" className="list-group-item">
                                  Finish Application: Apply the chosen finish,
                                  such as oil-based, water-based, or other
                                  appropriate coatings, using proper techniques
                                  to achieve an even and smooth finish.
                                </li>
                                <li id="list" className="list-group-item">
                                  Stain Application (if applicable): Apply
                                  stains to the hardwood floor surface as per
                                  the customer's preferences or design
                                  requirements, ensuring an even application and
                                  desired color outcome.
                                </li>
                                <li id="list" className="list-group-item">
                                  Protective Coating: Apply protective coats of
                                  finish to enhance the durability and longevity
                                  of the hardwood floor, ensuring proper drying
                                  and curing times between coats.
                                </li>
                                <li id="list" className="list-group-item">
                                  Repair and Patching: Address any necessary
                                  repairs or patching of the hardwood floor,
                                  such as filling gaps, replacing damaged
                                  boards, or repairing minor imperfections.
                                </li>
                                <li id="list" className="list-group-item">
                                  Safety Compliance: Adhere to safety protocols
                                  and guidelines, including proper handling and
                                  disposal of finishing products, utilization of
                                  personal protective equipment, and maintaining
                                  a safe work environment.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div>
          <section id="welcome">
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div id="open-heading" className="1-text heading-text">
                  About Our Family
                </div>
                <div className="flex">
                  <div className="x1 goldbar home-ab">
                    <div className="x1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div className="r-text">
                  At Affordable Hardwood, we pride ourselves on fostering a
                  welcoming and inclusive environment that feels like family. We
                  treat our customers with the same care and respect that we
                  would extend to our own loved ones. We prioritize open
                  communication, trust, and a genuine commitment to your
                  satisfaction.
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div>
                  <ul>
                    <li
                      id="move-left"
                      onClick={() => scrollToSection(reviews)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Our Reviews
                    </li>
                    <li
                      id="section-scroll-about"
                      onClick={() => scrollToSection(care)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Floor Caring Tips
                    </li>
                    <li
                      id="move-right"
                      onClick={() => scrollToSection(jobs)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Find A Career
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              id="reviews"
              className="page-section call-to-action d-flex mt-10"
              ref={reviews}
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Customer Reviews</h1>
                </div>
              </div>
            </section>

            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-5">
                    <p className="text-center rev mt-3">
                      At Affordable Hardwood, we consistently exceed customer
                      expectations. From attentive listening to meticulous
                      execution, our dedicated professionals go the extra mile
                      to deliver exceptional results. With open communication
                      and personalized solutions, we transform your space into a
                      true reflection of your vision. Trust us to exceed your
                      needs and provide unparalleled customer satisfaction.
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
                            "I am incredibly satisfied with the services
                            provided by Affordable Hardwood KC and would highly
                            recommend them to anyone in need of hardwood
                            flooring. Johnathon and his team have exceeded my
                            expectations in every aspect, and I am grateful for
                            their dedication to delivering exceptional results.
                            Look no further than Affordable Hardwood KC for
                            unmatched value and craftsmanship that will
                            transform your home."
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
                            "I contacted Johnathon/Affordable Hardwood for a
                            quote on refinishing my existing floors. I explained
                            what I wanted and he was knowledgeable about the
                            finish and look I was going for. Pricing was
                            competitive and quality is amazing! The team worked
                            diligently! I highly recommend this company for your
                            flooring needs!"
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
                            "I want to thank Johnathon and his team for the
                            amazing job on my floors not only were they
                            professional they also was very efficient and clean
                            , They got the job done in a timely manner. My
                            floors look absolutely amazing ... I would recommend
                            them to ANYONE! If you want the job done right ..
                            contact Affordable hardwood .. you will not be
                            disappointed!!!!"
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
                            "I recently had the pleasure of working with
                            Affordable Hardwood for the installation of hardwood
                            flooring in my home, and I must say that the
                            experience was nothing short of excellent.
                            Johnathon, the owner, and his team are true
                            professionals who prioritize customer satisfaction
                            and deliver outstanding results."
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
                            "What sets Affordable Hardwood apart is their
                            commitment to providing unbeatable value. Their
                            pricing is affordable without compromising on the
                            quality of materials or craftsmanship. Johnathon's
                            transparency and honesty in pricing made the entire
                            process stress-free and enjoyable. It's rare to find
                            such a perfect balance of affordability and
                            quality."
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
                            "The installation process was seamless and
                            efficient. The team arrived promptly and completed
                            the project within the agreed timeline. Their
                            craftsmanship was exceptional, leaving me with
                            beautiful hardwood floors that added elegance to my
                            home. I appreciate their commitment to ensuring
                            every detail was perfect."
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
                            "I highly recommend Affordable Hardwood to anyone in
                            need of hardwood flooring services. Johnathon and
                            his team have exceeded my expectations in terms of
                            professionalism, craftsmanship, and affordability. I
                            am delighted with the outcome and grateful for their
                            dedication. Thank you, Affordable Hardwood KC, for
                            transforming my home with beautiful hardwood
                            floors."
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
              ref={care}
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
                      At Affordable Hardwood, we understand the importance of
                      maintaining the pristine condition of your newly installed
                      floors. To help you protect your investment and ensure
                      their long-lasting beauty, we provide valuable floor care
                      instructions. By following these guidelines, you can
                      safeguard your floors from damage and enjoy their
                      impeccable appearance for years to come.
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
                        <div className="first-word">Prevent Measures</div>
                        <div className="second-word">
                          {" "}
                          Protect your floors by using felt pads or furniture
                          glides under your furniture to prevent scratches.
                          Avoid dragging heavy objects across the floor and
                          consider using area rugs or mats in high-traffic areas
                          to minimize wear.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Regular Cleaning</div>
                        <div className="second-word">
                          {" "}
                          Sweep or vacuum your hardwood floors regularly to
                          remove dust, dirt, and debris. Use a soft-bristle
                          broom or a vacuum with a floor attachment to avoid
                          scratching the surface. Avoid using a vacuum with a
                          beater bar, as it can damage the floor.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Spill Cleanup</div>
                        <div className="second-word">
                          {" "}
                          Accidents happen, so it's essential to clean up spills
                          promptly to prevent staining or warping. Use a soft,
                          damp cloth or mop to gently blot the spill, working
                          from the edges toward the center. Avoid excessive
                          moisture and ensure the floor is completely dry after
                          cleaning.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">
                          Proper Cleaning Products
                        </div>
                        <div className="second-word">
                          {" "}
                          Use hardwood floor cleaners specifically designed for
                          your floor type. Avoid using harsh chemicals, abrasive
                          cleaners, or excessive water, as they can damage the
                          finish. Follow the manufacturer's instructions and
                          test any new cleaning product in an inconspicuous area
                          first.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Expert Cleaning</div>
                        <div className="second-word">
                          {" "}
                          Consider scheduling professional hardwood floor
                          maintenance periodically to ensure your floors receive
                          the care they need. Professional cleaning and
                          refinishing can help restore the shine and luster of
                          your hardwood floors, enhancing their longevity and
                          beauty.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img id="mop" className="img-fluid" src={Clean} alt="" />
                </div>
              </div>
            </section>

            <section
              ref={jobs}
              id="find-career"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Find a Career</h1>
                </div>
              </div>
            </section>

            <section id="join-fam">
              <div className="row">
                <div className="col">
                  <div id="care-heading" className="1-text heading-text">
                    Join Our Family
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <div id="fam" className="second-word">
                    {" "}
                    We welcome dedicated individuals who are eager to join our
                    family-oriented team. As a leading hardwood flooring
                    company, we prioritize excellence, professionalism, and a
                    supportive work environment. We value the contributions of
                    each team member and foster a sense of belonging and growth.
                    Whether you have experience in installation, refinishing,
                    customer service, or administration, we invite you to apply
                    and become a part of our thriving family at Affordable
                    Hardwood. Embrace the opportunity to work alongside industry
                    experts, enhance your skills, and contribute to our
                    continued success. Join us on this exciting journey and
                    let's create beautiful spaces together.
                  </div>
                </div>
              </div>
            </section>

            <section id="job-table">
              <div className="row justify-content-center mt-5">
                <div className="col-10">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th
                          id="plus"
                          scope="row"
                          data-bs-toggle="collapse"
                          data-bs-target=".collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                        >
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=".collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Craftsman
                        </td>
                        <section
                          id="Crafts-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                A hardwood floor craftsman is a skilled
                                professional who specializes in the artistry of
                                hardwood flooring. At Affordable Hardwood, our
                                craftsmen are the backbone of our business,
                                bringing years of experience and expertise to
                                every project. They possess a deep understanding
                                of different wood species, finishes, and
                                installation techniques, ensuring precise and
                                flawless results.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Hardwood Floor Installation: Perform expert
                                  installation of hardwood floors, ensuring
                                  precise measurements, proper subfloor
                                  preparation, and secure placement of the
                                  flooring materials.
                                </li>
                                <li id="list" className="list-group-item">
                                  Refinishing and Sanding: Skillfully sand and
                                  refinish hardwood floors, removing old
                                  finishes, repairing any imperfections, and
                                  applying new coatings to restore the floor's
                                  beauty and durability.
                                </li>
                                <li id="list" className="list-group-item">
                                  Repairs and Maintenance: Assess and repair
                                  damaged hardwood floors, including replacing
                                  damaged boards, fixing gaps or squeaks, and
                                  addressing any issues with the floor's
                                  stability.
                                </li>
                                <li id="list" className="list-group-item">
                                  Attention to Detail: Exhibit meticulous
                                  attention to detail throughout the entire
                                  process, from assessing the space and making
                                  precise measurements to ensuring a flawless
                                  finish and seamless transitions between floor
                                  sections.
                                </li>
                                <li id="list" className="list-group-item">
                                  Continuous Learning: Stay updated with
                                  industry trends, techniques, and new products
                                  to enhance skills and knowledge in hardwood
                                  flooring craftsmanship.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th
                          id="plus"
                          scope="row"
                          data-bs-toggle="collapse"
                          data-bs-target=".inst.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                        >
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=".inst.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Installer
                        </td>
                        <section
                          id="Installer-desc"
                          className="inst collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                A hardwood floor installer at Affordable
                                Hardwood is a skilled professional responsible
                                for expertly installing hardwood floors in
                                residential and commercial settings. With a keen
                                eye for detail and a focus on precision, our
                                installers take pride in transforming spaces
                                with the timeless beauty of hardwood flooring.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                               <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Measurement and Assessment: Accurately measure
                                  the installation area and assess the condition
                                  of the subfloor, ensuring it is level, clean,
                                  and suitable for hardwood flooring
                                  installation.
                                </li>
                                <li id="list" className="list-group-item">
                                  Subfloor Preparation: Prepare the subfloor by
                                  removing existing flooring materials,
                                  smoothing rough areas, and addressing any
                                  issues such as moisture or unevenness to
                                  create a solid foundation for the hardwood
                                  flooring.
                                </li>
                                <li id="list" className="list-group-item">
                                  Installation Techniques: Apply appropriate
                                  installation techniques such as glue-down,
                                  nail-down, or floating methods based on the
                                  project requirements, ensuring proper
                                  alignment, spacing, and secure attachment of
                                  hardwood planks.
                                </li>
                                <li id="list" className="list-group-item">
                                  Cutting and Fitting: Use precise cutting tools
                                  to trim hardwood planks as needed, ensuring
                                  seamless integration with existing structures,
                                  corners, and edges for a professional and
                                  finished appearance.
                                </li>
                                <li id="list" className="list-group-item">
                                  Equipment and Tools: Operate and maintain a
                                  variety of installation tools and equipment,
                                  including saws, nailers, adhesive applicators,
                                  and moisture meters, ensuring they are in good
                                  working condition.
                                </li>
                                <li id="list" className="list-group-item">
                                  Safety and Compliance: Adhere to safety
                                  protocols, including proper handling of tools,
                                  following safety guidelines for the use of
                                  adhesives and finishing products, and
                                  maintaining a safe work environment.
                                </li>
                                <li id="list" className="list-group-item">
                                  Collaboration: Work collaboratively with other
                                  team members, such as contractors or project
                                  managers, to ensure seamless coordination and
                                  timely completion of projects.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th
                          id="plus"
                          scope="row"
                          data-bs-toggle="collapse"
                          data-bs-target=".sand.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                        >
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=".sand.collapse"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Sander
                        </td>
                        <section
                          id="Sander-desc"
                          className="sand collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                A hardwood floor sander and finisher at
                                Affordable Hardwood is a skilled professional
                                responsible for refinishing and restoring the
                                natural beauty of hardwood floors. With
                                precision and expertise, our sanders and
                                finishers take worn or damaged floors and
                                transform them into stunning masterpieces. They
                                use state-of-the-art sanding equipment to remove
                                old finishes, stains, and imperfections,
                                preparing the surface for a fresh new look.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Floor Assessment: Inspect hardwood floors to
                                  evaluate their condition and determine the
                                  appropriate refinishing process required.
                                </li>
                                <li id="list" className="list-group-item">
                                  Sanding: Utilize professional sanding
                                  equipment to remove old finishes, stains,
                                  scratches, and imperfections from the hardwood
                                  surface, ensuring a smooth and level result.
                                </li>
                                <li id="list" className="list-group-item">
                                  Dust Containment: Implement proper dust
                                  containment measures during the sanding
                                  process to minimize the spread of dust and
                                  debris throughout the space.
                                </li>
                                <li id="list" className="list-group-item">
                                  Finish Application: Apply the chosen finish,
                                  such as oil-based, water-based, or other
                                  appropriate coatings, using proper techniques
                                  to achieve an even and smooth finish.
                                </li>
                                <li id="list" className="list-group-item">
                                  Stain Application (if applicable): Apply
                                  stains to the hardwood floor surface as per
                                  the customer's preferences or design
                                  requirements, ensuring an even application and
                                  desired color outcome.
                                </li>
                                <li id="list" className="list-group-item">
                                  Protective Coating: Apply protective coats of
                                  finish to enhance the durability and longevity
                                  of the hardwood floor, ensuring proper drying
                                  and curing times between coats.
                                </li>
                                <li id="list" className="list-group-item">
                                  Repair and Patching: Address any necessary
                                  repairs or patching of the hardwood floor,
                                  such as filling gaps, replacing damaged
                                  boards, or repairing minor imperfections.
                                </li>
                                <li id="list" className="list-group-item">
                                  Safety Compliance: Adhere to safety protocols
                                  and guidelines, including proper handling and
                                  disposal of finishing products, utilization of
                                  personal protective equipment, and maintaining
                                  a safe work environment.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                    </tbody>
                  </table>
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

export default About;
