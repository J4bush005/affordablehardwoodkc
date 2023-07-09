import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";

export const Estimate = () => {
  const form = useRef();

  const insta = "https://www.instagram.com/hardwoodboss_/";
  const face = "https://www.facebook.com/profile.php?id=100001292195808";
  const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
  const mine = "https://j4bush005.github.io/";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c61r9qu",
        "template_kw9o0cd",
        form.current,
        "GsA9p9y8g2h-WuHxL"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.open("/ThankYou");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
};
