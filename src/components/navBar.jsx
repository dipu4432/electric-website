import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import AppointmentForm from "./appointmentForm";
import CallbackForm from "./callBackForm";
import "./navBar.css";
import logo from "../assets/llogoo.webp";
import { Link } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  // Numbers from .env
  const phoneNumber1 = import.meta.env.VITE_PHONE_NUMBER;
  const phoneNumber2 = import.meta.env.VITE_PHONE_NUMBER_2;

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-2 shadow-sm">
        <Container fluid className="px-3 px-lg-5">

          {/* Logo */}
          <Navbar.Brand
            as={Link}
            to="/#home"
            className="d-flex align-items-center"
          >
            <img
              src={logo}
              alt="Tiwari Nursing Home"
              style={{
                height: "80px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            {/* Links */}
            <Nav className="mx-auto nav-mobile">
              <Nav.Link as={Link} to="/#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/#meet-doctors">Meet Doctors</Nav.Link>
              <Nav.Link as={Link} to="/#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/#gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/#reviews">Reviews</Nav.Link>
              <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/pytholab">Pythology Lab</Nav.Link>
            </Nav>

            {/* Right Side Buttons */}
            <div className="d-flex gap-2 nav-btn-group">

              {/* Dropdown Call Doctor */}
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "#3B82A0",
                    border: "none",
                    padding: "8px 16px",
                    fontWeight: "500",
                  }}
                >
                  <FaPhoneAlt className="me-2" />
                  Call Doctor
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">

                  {/* Number 1 */}
                  <Dropdown.Item
                    href={`tel:${phoneNumber1}`}
                  >
                    📞 {phoneNumber1}
                  </Dropdown.Item>

                  {/* Number 2 */}
                  <Dropdown.Item
                    href={`tel:${phoneNumber2}`}
                  >
                    📞 {phoneNumber2}
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;