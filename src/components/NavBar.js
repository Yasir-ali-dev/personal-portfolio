import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css";
const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container style={{ fontFamily: "roboto", color: "#1E2A39" }}>
        <Navbar.Brand href="#home">Yasir.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
