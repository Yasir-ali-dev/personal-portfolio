import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const projects_items = ["All Projects", "Frontend", "Backend", "MERN Stack"];
const Projects = () => {
  return (
    <Container
      className="py-md-5 py-2"
      style={{ fontFamily: "roboto" }}
      id="projects"
    >
      <h1
        className="display-6 text-center"
        style={{
          color: "#40E0D0",
          textShadow: "5px 3px 3px #048a7c",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Projects
      </h1>
      <Row className="py-2">
        <Col className="gap-3 col-4 d-flex flex-column ">
          {projects_items.map((item, index) => {
            return (
              <Button
                style={{
                  backgroundColor: "#1E2A39",
                  border: "1px solid #1E2A39",
                  width: "170px",
                }}
                key={index}
              >
                {item}
              </Button>
            );
          })}
        </Col>
        <Col className="col-8 d-flex flex-column gap-4">
          <div className="d-flex gap-3">
            <Image src="/hostel.png" rounded width={"300px"} height={"210"} />
            <div className="d-flex flex-column gap-1">
              <h2 className="fs-5">Hostel Management System</h2>
              <span
                className="badge bg-info d-block py-2"
                style={{ width: "155px" }}
              >
                MERN STACK
              </span>
              <a className="d-block mx-1 text-decoration-none" href="">
                <i>video or link</i>
              </a>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "3px",
                }}
              >
                <span className="badge badge-pill bg-secondary">React</span>
                <span className="badge bg-secondary">Express</span>
                <span className="badge bg-secondary">Nodejs</span>
                <span className="badge bg-secondary">Mongodb</span>
                <span className="badge bg-secondary">Postman</span>
                <span className="badge bg-secondary">Javascript</span>
                <span className="badge bg-secondary">React Bootstrap</span>
                <span className="badge bg-secondary">React Router</span>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3">
            <Image
              src="/skin-cancer.jpg"
              rounded
              width={"300px"}
              height={"210"}
            />
            <div className="d-flex flex-column gap-1">
              <h2 className="fs-5">Multi Model Skin Cancer Detection</h2>
              <span
                className="badge bg-info d-block py-2"
                style={{ width: "155px" }}
              >
                MERN STACK
              </span>
              <a className="d-block mx-1 text-decoration-none" href="">
                <i>video or link</i>
              </a>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "3px",
                }}
              >
                <span className="badge badge-pill bg-secondary">
                  React-Native
                </span>
                <span className="badge bg-secondary">Express</span>
                <span className="badge bg-secondary">Nodejs</span>
                <span className="badge bg-secondary">Mongodb</span>
                <span className="badge bg-secondary">Postman</span>
                <span className="badge bg-secondary">Javascript</span>
                <span className="badge bg-secondary">Flask</span>
                <span className="badge bg-secondary">Star UML</span>
                <span className="badge bg-secondary">Figma</span>
                <span className="badge bg-secondary">Tensorflow</span>
                <span className="badge bg-secondary">Python</span>
                <span className="badge bg-secondary">Colab</span>
                <span className="badge bg-secondary">Deeplearning</span>
                <span className="badge bg-secondary">Reznet</span>
              </div>
            </div>
          </div>
        </Col>
        {/* <Col className="d-flex justify-content-center gap-3">
          <Image src="/hostel-backend.png" rounded width={"300px"} />
          <div className="d-flex flex-column gap-1">
            <h2 className="fs-5">Hostel Management System</h2>
            <span
              className="badge bg-info d-block py-2"
              style={{ width: "155px" }}
            >
              MERN STACK
            </span>
            <a className="d-block mx-1 text-decoration-none" href="">
              video
            </a>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
              }}
            >
              <span className="badge bg-secondary">React</span>
              <span className="badge bg-secondary">Express</span>
              <span className="badge bg-secondary">Nodejs</span>
              <span className="badge bg-secondary">Mongodb</span>
              <span className="badge bg-secondary">Postman</span>
              <span className="badge bg-secondary">Javascript</span>
              <span className="badge bg-secondary">React Bootstrap</span>
              <span className="badge bg-secondary">React Router</span>
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Projects;

/**
    {/* <a
            href="https://student-hostel.vercel.app/"
            target="_blank"
            alt="__"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down when tapped
              initial={{ opacity: 0, y: 50 }} // Initial
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} // Animation duration
            > */
{
  /* <Card
            style={{
              width: "18rem", // Adjust width for responsiveness
              border: "none",
            }}
            className="shadow"
          >
            <Card.Img variant="top" src="/hostel.jpg" />
          </Card> */
}
{
  /* </motion.div>
          </a> */
}

{
  /* <a
            href="https://github.com/Yasir-ali-dev/hostel-management-backend-nodejs/"
            target="_blank"
            alt="__"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down when tapped
              initial={{ opacity: 0, y: 50 }} // Initial
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} // Animation duration
            > */
}
{
  /* <Card
            style={{
              width: "1 8rem", // Adjust width for responsiveness
              border: "none",
            }}
            className="shadow"
          >
            <Card.Img variant="top" src="/hostel-backend.png" /> */
}
{
  /* <Card.Body>
              <Card.Title className="text-center">
                The Hostel Management
              </Card.Title>
              <Card.Text className="text-center">Backend</Card.Text>
            </Card.Body> */
}
{
  /* </Card> */
}

{
  /* </motion.div>
          </a> */
}
