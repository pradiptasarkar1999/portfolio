import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pradipta Sarkar </span>
            from <span className="purple">London, United Kingdom.</span>
            <br />
            I am pursuing MSc in Artificial Intelligence from the University of East London.
            <br />
            I hold a Bachelor's degree in Computer Science Engineering from Chandigarh University.
            <br />
            <br />
            Apart from academics and coding, I enjoy the following activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Blogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography and Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build intelligent systems that make a real-world impact!"
          </p>
          <footer className="blockquote-footer">Pradipta Sarkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
