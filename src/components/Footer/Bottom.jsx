import React from "react";
import { Link } from "react-router-dom";
import Gram from  "../../Logos/icons8-instagram.svg";
import Face from "../../Logos/icons8-facebook.svg";
import Pint from "../../Logos/icons8-pinterest.svg";


function Bottom() {
  const insta = "https://www.instagram.com/hardwoodboss_/";
  const face = "https://www.facebook.com/profile.php?id=100001292195808";
  const mine = "https://www.forbushtech.com/";
  return (
    <>
      <div class="container-fluid foot">
        <section class="">
          <div class="row text-center d-flex justify-content-center">
            <div class="col-md-4">
              <h6 class="text-uppercase font-weight-bold fs-4 mt-3">
                <Link to="/Gallery" class="foot-hover">
                  Gallery
                </Link>
              </h6>
            </div>

            <div class="col-md-4">
              <h6 class="text-uppercase font-weight-bold fs-4 mt-3">
                <Link to="/About-Us" class="foot-hover">
                  Services
                </Link>
              </h6>
            </div>
            <div class="col-md-4">
              <h6 class="text-uppercase font-weight-bold fs-4 mt-3">
                <Link to="/Contact-Us" class="foot-hover">
                  Send a Message
                </Link>
              </h6>
            </div>
          </div>
        </section>

        <hr id="line" class="my-2" />
        <section class="mb-4 move d-flex container ">
          <Link
            to={insta}
            target="_blank"
            class="btn btn-floating m1 col-md-4 col-sm-12 "
            role="button"
            aria-expanded="false"
          >
            <i class="fab fa-instagram ">
              <img src={Gram} alt="Instagram" className="hover"/>
            </i>
          </Link>
          <Link
            to={face}
            target="_blank"
            class="btn btn-floating m1 col-md-4 col-sm-12"
            role="button"
            aria-expanded="false"
          >
            <i class="fab fa-facebook-f">
              <img src={Face} alt="Facebook" className="hover"/>
            </i>
          </Link>
          <Link
            to="/"
            target="_blank"
            class="btn btn-floating m1 col-md-4 col-sm-12"
            role="button"
            aria-expanded="false"
          >
            <i class="fab fa-pintrest">
              <img src={Pint} alt="Pintrest" className="hover" />
            </i>
          </Link>
        </section>
        
        <div class="text-center p-3">
        Designed by:
        <Link
          to={mine}
          class="foot-hover space"
          onClick={() => window.open(mine, "_blank")}
        >
          {" "}
          Forbush Technologies LLC{" "}
        </Link>
      </div>
      </div>
  
    </>
  );
}

export default Bottom;
