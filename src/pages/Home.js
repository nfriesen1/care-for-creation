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
              Embark on a journey with us that began in October 2023, when 90
              passionate individuals gathered in small groups to explore Pope
              Francis' Laudato Si'. Since then, we've grown into a vibrant
              community committed to preserving and nurturing our planet.
            </p>
            <Button href="/about" variant="outline-dark" id="button" size="lg">
              About Us
            </Button>
          </Col>
          <Col>
            <Image
              src="laudato-si.png"
              alt="Three people surrounding the earth and helping care for it"
              style={{ marginTop: "10%" }}
              fluid
            />
            <figcaption className="caption">
              Image from{" "}
              <a href="https://www.sdcatholicdisciples.net/earthday/">
                https://www.sdcatholicdisciples.net/earthday/{" "}
              </a>
            </figcaption>
          </Col>
        </Row>
        <Row>
          <Col id="section-image">
            <Image
              src="events.jpg"
              alt="Three people surrounding the earth and helping care for it"
              fluid
            />
            <figcaption className="caption">Image by Freepik </figcaption>
          </Col>
          <Col id="section-text">
            <h2 id="section-header">Impactful Events</h2>
            <p>
              Be part of something bigger than yourself by joining us in our
              monthly events dedicated to supporting our parish's efforts in
              upholding Creation. From learning how to talk about climate change
              to initiating creation caring actions individually and as a community, together, 
              we can make a tangible impact on our environment.
            </p>
            <Button href="/events" variant="outline-dark" id="button" size="lg">
              Sign up
            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="section-text">
            <h2 id="section-header">Engaging Resources</h2>
            <p>
              Ready to take action for a greener future? Whether you're just
              starting your journey or already a seasoned environmentalist, our
              resource page is your go-to destination. Discover practical tips,
              inspiring stories, and actionable steps to care for Creation at
              any stage. Found something noteworthy not on our list?{" "}
              <a href="/contact">Contact us</a>, and we'll gladly add it for
              you!
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
