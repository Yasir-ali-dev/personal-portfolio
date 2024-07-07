import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./index.css";
const HeroSection = () => {
  return (
    <Container
      className="hero-section"
      id="hero"
      style={{ fontFamily: "roboto", paddingBottom: "1.5rem" }}
    >
      <Row className="align-items-center py-2">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <h1 className="display-4" style={{ color: "#40E0D0" }}>
            Hello I'M A MERN Stack Developer
          </h1>
          <p className="lead pt-1">
            I'm a full-stack software developer working with React-JS, Node-JS,
            Flask and the web platform
          </p>
          <div className="social-links py-2 gap-2 d-flex justify-content-start">
            <div className="d-flex align-items-end">
              <Image src="/whatsapp.svg" alt="whatsapp" className="me-3" />
              <i>
                <p>+92 311 2172777</p>
              </i>
            </div>
          </div>
          <div className="d-flex align-items-center px-1">
            <Image
              src="/email.png"
              alt="whatsapp"
              style={{ width: "40px" }}
              className="me-3"
            />
            <i className="d-flex ">
              <a href="mailto:yasirali.bscssef20@iba-suk.edu.pk?subject=''&body=''">
                yasirali.bscssef20@iba-suk.edu.pk
              </a>
            </i>
          </div>

          <a href="/resume.pdf" download style={{ backgroundColor: "#1E2A39" }}>
            <Button
              variant="dark"
              style={{
                boxShadow: "3px 3px 7px grey",
                textTransform: "uppercase",
                backgroundColor: "#1E2A39",
              }}
              className="my-2"
            >
              <i>DOWNLOAD RESUME </i>
            </Button>
          </a>
        </Col>
        <Col md={6}>
          <section className="home section " id="home">
            <div className="home__container container grid">
              <div className="home__content d-flex justify-content-center align-items-center">
                <div className="home__img "></div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
