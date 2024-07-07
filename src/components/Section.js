import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const Section = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const handleSubmit = () => {};

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  return (
    <Container
      style={{ fontFamily: "roboto" }}
      className="py-md-5 py-3 container-full-screen"
      id="contact"
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
        Contact Us
      </h1>
      <Row className="justify-content-center align-items-center ">
        <Col xs={12} md={6} className="py-md-3 py-sm-2 py-1">
          <motion.div
            whileHover={{ x: "-10px" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1 className="display-6 pb-3">Get in touch</h1>
            <p className="lead pb-2">
              Empowering your business with scalable solutions, we provide
              innovative web development tailored for you. Our expertise ensures
              seamless integration and exceptional performance, delivering a
              robust and efficient web presence Offering cutting-edge web
              development solutions with a focus on scalability and performance.
            </p>
            <div>
              <Image src="/whatsapp.svg" alt="whatsapp" className="me-3" />
              <Image src="/facebook.svg" alt="facebook" />
              <a
                href="https://www.linkedin.com/in/yasir-ali-30ab09241"
                target="_blank"
              >
                <img src="/linkedin.png" alt="" srcset="" width={"45px"} />
              </a>
              <a href="https://github.com/Yasir-ali-dev" target="_blank">
                <img src="/github.png" alt="" srcset="" width={"45px"} />
              </a>
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className="py-md-3 py-sm-2 py-1">
          <motion.div
            whileHover={{ x: "10px" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Form onSubmit={handleSubmit} className="py-3">
              <Form.Control
                type="text"
                className="mb-3"
                value={formDetails.firstName}
                placeholder="Full Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
              <Form.Control
                type="email"
                value={formDetails.email}
                className="mb-3"
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <Form.Control
                as="textarea"
                rows="7"
                value={formDetails.message}
                placeholder="drop the message here"
                className="mb-5"
                style={{
                  boxShadow: "3px 3px 7px grey",
                  borderRadius: "5px",
                }}
                onChange={(e) => onFormUpdate("message", e.target.value)}
              />
              <Button
                variant="dark"
                className="px-5"
                style={{
                  boxShadow: "3px 3px 7px grey",
                  textTransform: "uppercase",
                  backgroundColor: "#1E2A39",
                }}
              >
                Submit
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
