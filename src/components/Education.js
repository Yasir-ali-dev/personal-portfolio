import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <Container style={{ fontFamily: "roboto" }}>
      <Row className="py-3">
        <Col className="col-5" xs={12} md={6}>
          <h1
            className="display-3 fs-2"
            style={{
              color: "#90E0D0",
              fontWeight: "normal",
              textTransform: "uppercase",
            }}
          >
            Education
          </h1>
          <p className="lead fs-5 ">
            Now I am learning every day. I try to learn something new every
            single day;
          </p>
        </Col>
        <Col className="px-5">
          <div>
            <h1
              className="display-5 fs-5 pt-1"
              style={{ textTransform: "uppercase" }}
            >
              <strong>Bachelor of Computer Science</strong>
            </h1>
            <h6 style={{ fontWeight: "normal" }}>Sukkur IBA University</h6>
            <p className="lead fs-6">2020 - 2024</p>
          </div>
          <div>
            <h1
              className="display-5 fs-5 pt-1"
              style={{ textTransform: "uppercase" }}
            >
              <strong>Intermediate</strong>
            </h1>
            <h6 style={{ fontWeight: "normal" }}>Superior Science College</h6>
            <p className="lead fs-6">2018 - 2020</p>
          </div>
          <div>
            <h1
              className="display-5 fs-5 pt-1"
              style={{ textTransform: "uppercase" }}
            >
              <strong>Matriculation</strong>
            </h1>
            <h6 style={{ fontWeight: "normal" }}>Saint Threasas High School</h6>
            <p className="lead fs-6">2016 - 2018</p>
          </div>
        </Col>
      </Row>
      <Row className="py-3">
        <Col className="col-5" xs={12} md={6}>
          <h1
            className="display-3 fs-2"
            style={{
              color: "#90E0D0",
              fontWeight: "normal",
              textTransform: "uppercase",
            }}
          >
            Courses
          </h1>
          <p className="lead fs-5 ">
            Core Courses completed during the learning process;
          </p>
        </Col>
        <Col className="px-5 ">
          <div className=" gap-1 ">
            <h5>
              <span className="badge bg-secondary">Web Development</span>
            </h5>
            <h5>
              <span className="badge bg-secondary">Mobile App Development</span>
            </h5>
            <h5>
              <span className="badge bg-secondary">
                Database Management System
              </span>
            </h5>
            <h5>
              <span className="badge bg-secondary">
                Artificial Intelligence
              </span>
            </h5>
            <h5>
              <span className="badge bg-secondary">
                Object Oriented Programming{" "}
              </span>
            </h5>
            <h5>
              <span className="badge bg-secondary">
                Enterprise Application Development{" "}
              </span>
            </h5>
            <h5>
              <span className="badge bg-secondary">
                Data Structures and Algorithms
              </span>
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
