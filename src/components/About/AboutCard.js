import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhiraj Salunke </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am a junior software developer working on <span className="purple">AWS, FastAPI, Flutter ,React and Web Technologies </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Modern Physics
            </li>
            <li className="about-activity">
              <ImPointRight /> Video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Internet Surfing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Take one step forward, Your are n-1 step away from your goal."{" "}
          </p>
          <footer className="blockquote-footer">Dhiraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
