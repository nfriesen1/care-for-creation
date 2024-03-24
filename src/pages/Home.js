import React from "react";
import "../styles/Home.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1 className="display-4" id="home-title">
        Welcome to St. Cecilias Care for Creation Team Website! 💕🌎
      </h1>
      <br id="spacer" />
      <Container fluid="lg">
        <Row>
          <Col id="first-section-text">
            <h2 id="section-header">Who We Are</h2>
            <p>
              Starting in October 2023, we began with 90 people in small groups
              focused on Pope Francis' Laudato Si'...
            </p>
            <Button
              href="/about"
              variant="outline-dark"
              id="button"
              size="lg"
            >
              
              About Us
            </Button>
          </Col>
          <Col>
            <Image
              src="home-image-1.jpg"
              alt="Three people surrounding the earth and helping care for it"
              fluid
            />
            <figcaption className="caption">Image by Freepik </figcaption>
          </Col>
        </Row>
        <Row>
          <Col id="section-image">
            <Image
              src="home-image-1.jpg"
              alt="Three people surrounding the earth and helping care for it"
              fluid
            />
            <figcaption className="caption">Image by Freepik </figcaption>
          </Col>
          <Col id="section-text">
            <h2 id="section-header">Impactful Events</h2>
            <p>
              Join us our monthly events in supporting our parish's effors to uphold Creation...
            </p>
            <Button
              href="/events"
              variant="outline-dark"
              id="button"
              size="lg"
            >
              Sign up
            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="section-text">
            <h2 id="section-header">Engaging Resources</h2>
            <p>
              Looking to get started on your journey to Care for Creation or already a veteran?  Access our resource page to find things you can do
              no matter what stage you are at.  And, if you find some interesting not already there, <a href="/contact">Contact Us</a>, and we can add it for you!
            </p>
            <Button
              href="/resources"
              variant="outline-dark"
              id="button"
              size="lg"
            >
              Resources
            </Button>
          </Col>
          <Col id="section-image">
            <Image
              src="home-image-1.jpg"
              alt="Three people surrounding the earth and helping care for it"
              fluid
            />
            <figcaption className="caption">Image by Freepik </figcaption>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
