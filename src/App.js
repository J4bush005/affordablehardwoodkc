import './App.css';
import React from 'react';
import Header from './Header'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="" element={<Home />}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
