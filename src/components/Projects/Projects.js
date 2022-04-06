import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iamGo from "../../Assets/Projects/main.go.png";
import helloFarmer from "../../Assets/Projects/hello_farmer.png";
import roomie from "../../Assets/Projects/roomie.png";
import iamGo from "../../Assets/Projects/main.go.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iamGo}
              isBlog={false}
              title="IAM manager"
              description="AWS IAM reporting tool built with golang and AWS SDK to mail the inactive users to the configured email adresses deployed on AWS lambda, using GO over the Python and nodejs gave me 4X performance boost!"
              link="https://github.com/Team-Homo-Novus/IAM-lister"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helloFarmer}
              isBlog={false}
              title="Hello farmer"
              description="Plant disease detection app built with tensorflow, Django, and python hosted on AWS with help of elastic beanstalk, This app follows standard 3 tier architecture."
              link="https://github.com/Team-Homo-Novus/hello-farmer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roomie}
              isBlog={false}
              title="Hello Roomie"
              description="Room mate chores and expence management app built with flutter and firebase, App has multiple OAuth singing in methods such as facebook, google, email and phone login."
              link="https://github.com/Team-Homo-Novus/hello-roomie"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
