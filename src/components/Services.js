import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { icons } from "../assets/icons";
const Services = () => {
  return (
    <Container className="py-md-3 py-sm-1 py-lg-4 py-xs-0">
      <Row>
        <h3
          className="display-6 text-center mb-3 py-1"
          style={{
            color: "#40E0D0",
            textShadow: "5px 3px 3px #048a7c",
            fontWeight: "bold",
          }}
        >
          SERVICES
        </h3>
      </Row>
      <Row className="py-1 py-md-2">
        <Col className="py-2 py-md-0">
          <div
            className="d-flex justify-content-center flex-column py-4 px-3"
            style={{
              border: "none",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "1px",
              transition: "box-shadow 0.3s ease",
            }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 9px 13px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="pb-2 d-flex justify-content-center">
              <Image src="/frontend.webp" width={"200px"}></Image>
            </div>
            <div className="py-3">
              <h1 className="fs-5 fw-normal pb-1 text-center">
                FRONTEND DEVELOPMENT
              </h1>
              <h2 className="fs-6 lead  text-center">
                Crafting innovative user experiences with cutting-edge React
                solutions
              </h2>
            </div>
          </div>
        </Col>
        <Col className="py-2 py-md-0">
          <div
            className="d-flex flex-column justify-content-center py-4 px-3"
            style={{
              border: "none",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "1px",
              transition: "box-shadow 0.3s ease", // Smooth transition for shadow
            }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 9px 13px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="pb-2 d-flex justify-content-center">
              <Image src="/back.png" width={"200px"}></Image>
            </div>
            <div className="py-3">
              <h1 className="fs-5 fw-normal pb-1 text-center">
                BACKEND DEVELOPMENT
              </h1>
              <h2 className="lead fs-6 text-center">
                Empowering your applications with robust back-end solutions
                using Flask and Node-js
              </h2>
            </div>
          </div>
        </Col>
        <Col className="py-2 py-md-0">
          <div
            className="d-flex flex-column justify-content-center py-4 px-3"
            style={{
              border: "none",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "1px", // Initial shadow
              transition: "box-shadow 0.7s ease", // Smooth transition for shadow
            }}
            whileHover={{
              scale: 0.9,
              boxShadow: "0 9px 13px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="pb-2 d-flex justify-content-center">
              <Image src="/ml.png" width={"300px"}></Image>
            </div>
            <div className="py-3">
              <h1 className="fs-5 fw-normal pb-1 text-center ">
                MACHINE LEARNING
              </h1>
              <h2 className="lead text-center  fs-6 ">
                Elevating your Machine Learning Models with tensorflow and
                deeplearning techniques
              </h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
