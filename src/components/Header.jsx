import "../index.css";
import React from "react";
import Logo from "../Photos/Logo.webp"
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid">
        <Link to="/" id="logo-img" className="navbar-brand">
          <img id="logo" className="img-fluid" src={Logo} alt="Affordable Hardwood LLC Logo" />
        </Link>
        <Link to="/" id="words" className="navbar-brand">
          <h1 className="1-text heading-text fs-2 bigger up">
            Affordable Hardwood
          </h1>
          <h1 className="1-text heading-text fs-2 bigger">Kansas City</h1>
          <div className="flex">
            <div className="x1 goldbar"></div>
            <div className="x1"></div>
          </div>
          <h2 className="1-text heading-text">
            Kansas City's Hardwood Specialist
          </h2>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".head.collapse"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="head collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto d-flex">
            <li className="nav-item dropdown mx-3">
              <Link
                to="/hardwood-flooring-gallery"
                id="sub"
                className="nav-link fs-5"
                role="button"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item dropdown mx-3 fs-5">
              <Link to="/About-Us" id="sub" className="nav-link" role="button">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown mx-3 fs-5">
              <Link
                to="/Request-An-Estimate"
                id="sub"
                className="nav-link"
                role="button"
              >
                Request an Estimate
              </Link>
            </li>
            <li className="nav-item dropdown mx-3 fs-5">
              <Link
                to="/Contact-Us"
                id="sub"
                className="nav-link"
                role="button"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
