import React from "react";
import ContactForm from "../components/ContactForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 id="events-title" className="display-4">
        Contact Us
      </h1>
      <Container id="contact-container">
        <Row>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
