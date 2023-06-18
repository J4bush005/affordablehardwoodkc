import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c61r9qu', 'template_kw9o0cd', form.current, 'GsA9p9y8g2h-WuHxL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label class="form-label">Name</label>
      <input type="text" class="form-control" placeholder="John Smith"name="user_name" />
      <label class="form-label">Email</label>
      <input type="email" class="form-control" placeholder="JSmith@gmail.com" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
