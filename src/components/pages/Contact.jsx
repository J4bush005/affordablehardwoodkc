import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

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
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          window.open("/ThankYou");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    document.title =
      "Contact Us | Installation and Refinishing Specialist | Kansas City | Affordable Hardwood LLC";
  }, []);

  return (
    <div className="container-fluid">
      <form ref={form} onSubmit={sendEmail}>
        <div class="row g-3 d-flex justify-content-center">
          <div className="col-6">
            <label class="form-label topper">Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              placeholder="John Smith"
              name="user_name"
              required
            />
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                placeholder="JSmith@gmail.com"
                name="user_email"
                required
              />
            </div>
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Message:</label>
              <textarea
                className="width d-flex justify-content-center"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <input class="send" type="submit" value="Send" />
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
