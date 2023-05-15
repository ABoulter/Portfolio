import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y63zqsf",
        "template_iivtyfz",
        form.current,
        "hLnedq3vUeDc0eBjJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touche</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>paink_34@hotmail.com</h5>
            <a href="mailto:paink_34@hotmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+351916343233</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+351916343233"
              target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
