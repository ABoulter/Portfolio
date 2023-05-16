import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiTwotoneFolderOpen } from "react-icons/ai";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Foto minha" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Objectives</h5>
              <small> Working</small>
            </article>
            <article className="about__card">
              <AiTwotoneFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small> Working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            optio unde asperiores libero doloremque provident suscipit
            recusandae architecto facere, harum soluta laborum dolor temporibus
            est blanditiis pariatur corrupti assumenda nulla?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
