import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../Footer/Footer";
import "./Estimate.css";

export const Estimate = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggoftfp",
        "template_yg7g411",
        form.current,
        "Xo5Ogclq3NzvJmthw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setNumber("");
          setAddress("");
          window.open("/Thank-You", "_self");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    document.title =
      "Request An Estimate | Installation and Refinishing Specialist | Kansas City | Affordable Hardwood LLC";
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
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
                <label class="form-label topper">Email:</label>
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
                <label class="form-label topper">Phone Number:</label>
                <input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  type="number"
                  class="form-control"
                  placeholder="(xxx)-xxx-xxxx"
                  name="user_number"
                  required
                />
              </div>
            </div>

            <div className="row g-3 d-flex justify-content-center">
              <div className="col-6">
                <label class="form-label topper">Address:</label>
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
                <input class="send" type="submit" value="Send" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Estimate;
