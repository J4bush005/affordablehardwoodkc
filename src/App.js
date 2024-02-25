import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/home";
import Estimate from "./Components/Pages/Estimate/Estimate";
import Contact from "./Components/Pages/Contact/Contact";
import About from "./Components/Pages/About/About";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Classic from "./Components/Pages/Gallery/Classic";
import LVT from "./Components/Pages/Gallery/LVT";
import Custom from "./Components/Pages/Gallery/Custom";
import Stairs from "./Components/Pages/Gallery/Stairs";
import Commercial from "./Components/Pages/Gallery/Commercial";
import AutoScroll from "./Components/AutoScroll";
import ThankYou from "./Components/Pages/Contact/ThankYou";

function App() {
  return (
    <>
    <AutoScroll/>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About-Us" element={<About />} />
        <Route path="/Request-An-Estimate" element={<Estimate />} />
        <Route path="/Contact-Us" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Classic-Hardwood" element={<Classic />} />
        <Route path="/Luxury-Vynil-Tile" element={<LVT />} />
        <Route path="/Custom-Hardwood-Designs" element={<Custom />} />
        <Route path="/Hardwood-Stairs" element={<Stairs />} />
        <Route path="/Commercial-Projects" element={<Commercial />} />
        <Route path="/Thank-You" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;