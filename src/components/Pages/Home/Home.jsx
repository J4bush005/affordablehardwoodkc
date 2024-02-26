import React from "react";
import Footer from "../../Footer/Footer";
import Hero from "./Hero";
import Main from "./Main";
import "./Home.css";

function home() {
  return (
    <div>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default home;
