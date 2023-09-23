import React from 'react';
import Insta from "./images/ig logo.webp";
import Face from "./images/face.webp";
import Linked from "./images/Linked.webp";
import { Link } from "react-router-dom";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://www.forbushtech.com/";

function Footer() {
  return (
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
  )
}

export default Footer