import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ss7982j",
        "template_bhsiffv",
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
          setAddress("");
          setPosition("");
          window.open("/ThankYou");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    document.title =
      "Find a Career | Installation and Refinishing Specialist | Kansas City | Affordable Hardwood LLC";
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
              />
            </div>
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Phone Number:</label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                class="form-control"
                placeholder="(xxx)-xxx-xxxx"
                name="user_number"
              />
            </div>
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Address:</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                class="form-control"
                placeholder="425 Sugar Lane"
                name="user_address"
                required
              />
            </div>
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Position:</label>
              <input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Installer"
                name="user_position"
                required
              />
            </div>
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Experience:</label>
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
