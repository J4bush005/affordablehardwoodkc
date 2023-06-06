import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [menuOpen, openMenu] = useState(true);
    const toggleMenu = () => {
        openMenu(!menuOpen);
    };

    return (

    );
}