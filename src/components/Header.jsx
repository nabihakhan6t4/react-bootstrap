import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {
  FaMoon,
  FaSun,
  FaSearch,
  FaShoppingCart,
  FaPhoneAlt,
} from "react-icons/fa";

function Header({ mode, toggleMode, showAlert  }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg={mode } variant={mode }>
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold fs-3"
          style={{ color: "#39db4a" }}
        >
          FOODI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link
              href="#home"
              className="fw-bold"
              style={{ color: "#39db4a" }}
            >
              Home
            </Nav.Link>
            <NavDropdown
              title={
                <span
                  style={{ color: mode === "light" ? "#000000" : "#ffffff" }}
                >
                  Menu
                </span>
              }
              className="fw-bold"
            >
              <NavDropdown.Item href="#action/3.1">Burgers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drinks</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span
                  style={{ color: mode === "light" ? "#000000" : "#ffffff" }}
                >
                  Services
                </span>
              }
              className="fw-bold"
            >
              <NavDropdown.Item href="#delivery">Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#catering">Catering</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#offers"
              className="fw-bold"
              style={{ color: mode === "light" ? "#000000" : "#ffffff" }}
            >
              Offers
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link
              href="#search"
              style={{ color: mode === "light" ? "#000000" : "#ffffff" }}
            >
              <FaSearch />
            </Nav.Link>
            <Nav.Link
              href="#cart"
              style={{
                position: "relative",
                color: mode === "light" ? "#000000" : "#ffffff",
              }}
            >
              <FaShoppingCart />
              <Badge
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  fontSize: "0.7rem",
                  borderRadius: "50%",
                  backgroundColor: "#39db4a",
                  color: "#ffffff",
                }}
              >
                8
              </Badge>
            </Nav.Link>
            <Button
              className="ms-3 d-flex align-items-center"
              style={{
                background: "#39db4a",
                border: "none",
                padding: "8px 16px",
              }}
            >
              <FaPhoneAlt className="me-2" /> Contact
            </Button>
            <Button
              variant={mode === "light" ? "outline-dark" : "outline-light"}
              onClick={toggleMode}
              className="ms-2"
            >
              {mode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
