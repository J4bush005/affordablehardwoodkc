import "./index.css";
import React from "react";
import Logo from "./components/images/Logo.webp";
import { Link } from "react-router-dom";

function Header() {
 
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/" id="words" class="navbar-brand">
          <img id="logo" src={Logo} alt=""/>
        </Link>
        <Link to="/" id="words" class="navbar-brand">
          <div className="1-text heading-text bigger up">Affordable</div>
          <div className="1-text heading-text bigger">Hardwood LLC</div>
          <div class="flex">
            <div class="x1 goldbar"></div>
            <div class="x1"></div>
          </div>
          <div className="1-text heading-text">
            Kansas City's Hardwood Specialist
          </div>
        </Link>

        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".head.collapse"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="head collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto d-flex">
            <li class="nav-item dropdown mx-3">
              <Link
                to="/About"
                id="sub"
                class="nav-link"
                role="button"
              >
                About
              </Link>
             
            </li>
            <li class="nav-item mx-3">
              <Link
                to="/Gallery"
                id="sub"
                class="nav-link"
                role="button"
              >
                Gallery
              </Link>
            </li>
            <li class="nav-item dropdown mx-3">
              <Link
                to="/Services"
                id="sub"
                class="nav-link"
                role="button"
              >
                Services
              </Link>
            </li>
            <li class="nav-item dropdown last mx-3">
              <Link
                to="/Contact"
                id="sub"
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link
                    to="/Estimate"
                    class="nav-link under"
                    role="button"
                    aria-expanded="false"
                  >
                    Request an Estimate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    class="nav-link under"
                    role="button"
                    aria-expanded="false"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
