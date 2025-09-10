import React from "react";
import "../styles/About.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div>
      <h1 id="about-title" className="display-4">
        About Us
      </h1>
      <Container fluid="lg">
        <Row>
          <Col id="first-section-text">
            <h2 id="section-header">Who We Are</h2>
            <p>
              Our journey began in October 2023 with a group of 90 passionate
              individuals coming together in small groups for six weeks, united
              by a common purpose: to explore and embody the principles outlined
              in Laudato Si'. Over those six weeks, we delved deep into the
              encyclical's teachings, discussing its relevance to our lives and
              communities, and brainstorming ways to enact positive change in
              our world. Encouraged by the transformative experience of our
              initial gatherings, we are excited to announce the launch of a new
              season of small groups focused on Laudato Deum. Building upon the
              foundation laid by our study of Laudato Si', we embark on this
              next phase of our journey with renewed zeal and dedication.
            </p>
          </Col>
        </Row>
        <Row>
          <Col id="first-section-text">
            <h2 id="section-header">Our Mission</h2>
            <p>
              At St. Cecilia's, we are committed to living out the values
              espoused in Laudato Si' and Laudato Deum. Guided by our faith and
              inspired by the wisdom of Pope Francis, we seek to foster a deeper
              connection with our planet, promote environmental stewardship, and
              advocate for justice and compassion towards all of creation.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="strategicFramework.png" fluid></Image>
          </Col>
        </Row>
        <Row>
          <Col id="first-section-text">
            <h2 id="section-header">Get Involved</h2>
            <p>
              Whether you're a long-time member of our community or a newcomer
              seeking to make a difference, there are many ways to get involved
              with our Laudato Si' group. Join one of our upcoming small groups,
              participate in our community events and initiatives, or explore
              the resources available on our website.
            </p>
            
          </Col>
        </Row>
        <Row>
          <Col id="first-section-text">
            <h2 id="section-header">Contact Us</h2>
            <p>
              We'd love to hear from you! If you have any questions,
              suggestions, or would like to learn more about our group, please
              don't hesitate to reach out. You can contact us at
              stcs.careforcreation@gmail.com or send a message through our contact form:
            </p>
            <Button  
              href="/contact"
              variant="outline-dark"
              style={{fontWeight: "bold", margin: "1%"}}
              size="lg">Contact Form</Button>
            <br/>
            <p>Thank you for joining us on this journey of faith, stewardship, and solidarity with creation.</p>
            <br/>
            <p>Together, let's strive to make a positive impact on our world!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
