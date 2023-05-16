import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        André Boulter
      </a>
      <ul className="permaLinks">
        <a href="#">Home</a>
        <a href="#About">About me</a>
        <a href="#Experience">Experience</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a>
      </ul>

      <div className="footer__copyright">
        <small>&copy; André Boulter. All rights reserved </small>
      </div>
    </footer>
  );
}

export default Footer;
