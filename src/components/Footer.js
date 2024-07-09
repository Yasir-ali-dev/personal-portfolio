import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="py-2 mt-3"
      style={{ backgroundColor: "#1E2A39", color: "#40E0D0" }}
    >
      <strong>
        <h1 className="lead text-center">all rights reserved @Yasir Ali</h1>
      </strong>
    </Container>
  );
};

export default Footer;
