import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/beakman.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>André Boulter</h1>
        <h5 className="text-light">Fullstack Developer Junior</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="A minha foto de perfil" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
