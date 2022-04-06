import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import myImg from "../../Assets/contact.svg";
import Tilt from "react-parallax-tilt";
import axios from 'axios';

import {

  AiOutlineSend,
} from "react-icons/ai";

function Contact() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  var name = '';
  var email = '';
  var message = '';
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={5} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let's <span className="purple"> connect </span>
            </h1>
            <p className="home-about-body">

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control required type="name" placeholder="Enter name...." onChange={e => name = e.target.value} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email...." onChange={e => email = e.target.value} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message for me </Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Type your message here...." onChange={e => message = e.target.value} />
              </Form.Group>
              <Button variant="primary" onClick={e => {                
                axios.post('https://formsubmit.co/ajax/dhirajraje113@gmail.com', {
                  name, email, message
                })
                  .then(response => {
                    alert("Message sent successfully");
                  })
                  .catch(error => console.log(error));
              }}>
                Submit <AiOutlineSend />
              </Button>
            </p>
          </Col>
          <Col md={7} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
