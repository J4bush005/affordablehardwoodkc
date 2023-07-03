import React from "react";
import ScrollToTop from "../ScrollToTop";
import Install from "../videos/Install 2.mp4";
import Stain from "../videos/Stain Video.mp4";
import Media from "react-media";
import Misc from "../videos/Misc.mp4";
import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <ScrollToTop />
      <Media query="(min-width: 769px)">
        <div>
       
          
          <section id="install-section">
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            >
            <section id="mained" className="page-section call-to-action d-flex">
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
              </div>
            </section>
             </motion.div>
          </section>

          <section id="Refinishing-section">
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            >
            <section id="mained" className="page-section call-to-action d-flex mt-5">
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
              </div>
            </section>
             </motion.div>
          </section>

           <section id="misc-section">
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            >
            <section id="mained" className="page-section call-to-action d-flex mt-5">
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
              </div>
            </section>
             </motion.div>
          </section>
         
        </div>
      </Media>
    </>
  );
}

export default Services;
