import React from 'react';
import Header from './Header'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Services from './components/pages/Services';
import ThankYou from './components/pages/ThankYou';
import Application from './components/pages/Application';
import { Route, Routes } from 'react-router-dom';
import { Estimate } from './components/pages/Estimate';

function App() {
  return (
   <div>
   <Header />
   <Routes>
   <Route index element={<Home />} />
   <Route path="/About" element={<About />} />
   <Route path="/Contact" element={<Contact />} />
   <Route path="/Gallery" element={<Gallery />} />
   <Route path="/Services" element={<Services />} />
   <Route path="/ThankYou" element={<ThankYou />} />
   <Route path="/Application" element={<Application />} />
   <Route path="/Estimate" element={<Estimate />} />
   </Routes>
   </div>
  );

}

export default App;
