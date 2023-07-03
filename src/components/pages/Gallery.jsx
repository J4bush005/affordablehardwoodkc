import React from "react";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import Media from "react-media";
import { motion } from "framer-motion";

import { useRef } from "react";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

function Gallery() {
    return(
        <>
            <figure className="figure">
            <img src="" alt="" className="figure-img img-fluid rounded" />
            <figcaption className="figure-caption">Classic Hardwood</figcaption></figure>
        </>
    );
}

export default Gallery;
