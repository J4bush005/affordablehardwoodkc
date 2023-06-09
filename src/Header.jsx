import "./index.css";
import React from "react";
import FloorLogo from "./components/images/floor logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(){
    return(
 <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
   <Link to="/" id="words" class="navbar-brand" >
      <img id="logo" src={FloorLogo} alt=""></img>
          </Link>
          <Link to="/" id="words" class="navbar-brand">
          <div className="1-text heading-text">Affordable Hardwood Kansas City</div>
              <div class="flex">
              <div class="x1 goldbar"></div>
              <div class="x1"></div>
            </div>
            <div className="1-text heading-text">Kansas City's Hardwood Specialist</div>
      
        </Link>
          
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown ">
            <Link to="/About" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
          <ul class="dropdown-menu">
            <li><Link to="/About" class="nav-link " role="button" aria-expanded="false">Action</Link></li>
            <li><Link to="/About" class="nav-link " role="button" aria-expanded="false">Another action</Link></li>
            <li><Link to="/About" class="nav-link " role="button" aria-expanded="false">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link to="/Contact" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact</Link>
          <ul class="dropdown-menu">
            <li><Link to="/Contact" class="nav-link" role="button"  aria-expanded="false">Action</Link></li>
            <li><Link to="/Contact" class="nav-link" role="button"  aria-expanded="false">Another action</Link></li>
            <li><Link to="/Contact" class="nav-link" role="button"  aria-expanded="false">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Header;