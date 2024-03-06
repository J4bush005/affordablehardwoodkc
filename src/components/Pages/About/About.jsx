import React, { useEffect } from 'react'
import './About.css'
import Footer from '../../Footer/Footer'
import AboutUs from './AboutUs'
import Services from './Services'
import Care from './Care'

function About() {

  useEffect(() => {
    document.title =
    "About Us - Affordable Hardwood LLC | Custom Installation, Refinishing & Restoration";
  }, []);

  return (
    <div>
    <AboutUs/>
    <Services/>
    <Care/>
    <Footer/>
    </div>
  )
}

export default About