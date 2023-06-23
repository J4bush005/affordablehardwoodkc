import React from "react";
import Quote from "../images/My project.png";

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
      <section id="open-review" className="page-section call-to-action d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p className="text-center rev mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="review-cards">
        <div className="container-fluid text-center">
          <div className="row first-row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit. Maecenas porttitor
                      congue massa. Fusce posuere, magna sed pulvinar ultricies,
                      purus lectus malesuada libero, sit amet commodo magna eros
                      quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus
                      a tellus.
                    </p>
                    <footer className="blockquote-footer">
                      Valued Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                    <footer className="blockquote-footer">
                      Valued Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="row second-row">
            <div className="col-6 col-md-4">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                    <footer className="blockquote-footer">
                      Valued Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                    <footer className="blockquote-footer">
                      Valued Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                    <footer className="blockquote-footer">
                      Valued Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="row third-row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                    <footer className="blockquote-footer">
                      Valued Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                    <footer className="blockquote-footer">
                      Valued Customer
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
