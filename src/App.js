import './App.css';
import React from 'react';
import Header from './Header'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Services from './components/pages/Services';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
   <Header />
   <Routes>
   <Route exact path="" element={<Home />} />
   <Route path="/About" element={<About />} />
   <Route path="/Contact" element={<Contact />} />
   <Route path="/Gallery" element={<Gallery />} />
   <Route path="/Services" element={<Services />} />
   </Routes>
   </div>
  );

}

export default App;
