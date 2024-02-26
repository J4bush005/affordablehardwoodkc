import React from 'react'
import './About.css'
import Footer from '../../Footer/Footer'
import AboutUs from './AboutUs'
import Services from './Services'
import Care from './Care'

function About() {
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