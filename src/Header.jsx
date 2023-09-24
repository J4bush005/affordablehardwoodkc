import "./index.css";
import React from "react";
import Logo from "./components/images/Logo.webp";
import { Link } from "react-router-dom";

function Header() {
 
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" id="words" className="navbar-brand">
          <img id="logo" src={Logo} alt=""/>
        </Link>
        <Link to="/" id="words" className="navbar-brand">
          <div className="1-text heading-text bigger up">Affordable</div>
          <div className="1-text heading-text bigger">Hardwood LLC</div>
          <div className="flex">
            <div className="x1 goldbar"></div>
            <div className="x1"></div>
          </div>
          <div className="1-text heading-text">
            Kansas City's Hardwood Specialist
          </div>
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
                to="/About"
                id="sub"
                className="nav-link"
                role="button"
              >
                About
              </Link>
             
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/Gallery"
                id="sub"
                className="nav-link"
                role="button"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item dropdown mx-3">
              <Link
                to="/Services"
                id="sub"
                className="nav-link"
                role="button"
              >
                Services
              </Link>
            </li>
            <li className="nav-item dropdown last mx-3">
              <Link
                to="/Contact"
                id="sub"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/Estimate"
                    className="nav-link under"
                    role="button"
                    aria-expanded="false"
                  >
                    Request an Estimate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="nav-link under"
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
