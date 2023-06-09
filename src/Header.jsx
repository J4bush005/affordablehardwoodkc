import "./index.css";
import React from "react";
import Logo from "./components/images/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(){
    return(
 <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
   <Link to="/" id="words" class="navbar-brand" >
      <img id="logo" src={Logo} alt=""></img>
          </Link>
          <Link to="/" id="words" class="navbar-brand">
            <div className="1-text heading-text bigger up">Affordable</div>
            <div className="space"></div>
             <div className="1-text heading-text bigger">Hardwood LLC</div>
              <div class="flex">
              <div class="x1 goldbar"></div>
              <div class="x1"></div>
            </div>
            <div className="1-text heading-text">Kansas City's Hardwood Specialist</div>
      
        </Link>
          
    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto d-flex flex-row">
              <li class="nav-item dropdown">
                
            <Link to="/About" id="sub" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
          <ul class="dropdown-menu">
            <li><Link to="/About" class="nav-link " role="button" aria-expanded="false">Reviews</Link></li>
            <li><Link to="/About" class="nav-link " role="button" aria-expanded="false">Our Mission</Link></li>
                  <li><Link to="/About" class="nav-link " role="button" aria-expanded="false">Floor Caring Tips</Link></li>
                   <li><Link to="/About" class="nav-link " role="button" aria-expanded="false">Jobs</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link to="/Gallery" id="sub" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gallery</Link>
          <ul class="dropdown-menu">
            <li><Link to="/Gallery" class="nav-link" role="button"  aria-expanded="false">Before and After</Link></li>
            <li><Link to="/Gallery" class="nav-link" role="button"  aria-expanded="false">Custom Designs</Link></li>
            <li><Link to="/Gallery" class="nav-link" role="button"  aria-expanded="false">Luxury Vinyl Tiles</Link></li>
            <li><Link to="/Gallery" class="nav-link" role="button" aria-expanded="false">Classic Hardwood</Link></li>
            <li><Link to="/Gallery" class="nav-link" role="button" aria-expanded="false">Stairs</Link></li>
            <li><Link to="/Gallery" class="nav-link" role="button" aria-expanded="false">Commercial Jobs</Link></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
            <Link to="/Servicest" id="sub" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
          <ul class="dropdown-menu">
            <li><Link to="/Services" class="nav-link " role="button" aria-expanded="false">Installation</Link></li>
            <li><Link to="/Services" class="nav-link " role="button" aria-expanded="false">Sanding and Finishing</Link></li>
            <li><Link to="/Services" class="nav-link " role="button" aria-expanded="false">Repairs</Link></li>
            <li><Link to="/Services" class="nav-link " role="button" aria-expanded="false">Misc.</Link></li>
          </ul>
        </li>
         <li class="nav-item dropdown last">
            <Link to="/Contact" id="sub" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact</Link>
          <ul class="dropdown-menu">
            <li><Link to="/Contact" class="nav-link " role="button" aria-expanded="false">Request an Estimate</Link></li>
            <li><Link to="/Contact" class="nav-link " role="button" aria-expanded="false">Contact Us</Link></li>
            <li><Link to="/Contact" class="nav-link " role="button" aria-expanded="false">Online Payment</Link></li>
          </ul>
        </li>
      </ul>
      </div>
  </div>
</nav>
    );
}

export default Header;