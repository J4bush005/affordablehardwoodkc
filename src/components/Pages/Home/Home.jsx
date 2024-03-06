import React, { useEffect } from "react";
import Footer from "../../Footer/Footer";
import Hero from "./Hero";
import Main from "./Main";
import "./Home.css";

function Home() {

  useEffect(() => {
    document.title =
    "Kansas City Hardwood Flooring Experts - Affordable Hardwood LLC | Custom Installation, Refinishing & Restoration";
  }, []);

  return (
    <div>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
