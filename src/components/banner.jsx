import { FaPhoneAlt } from "react-icons/fa";
import "./banner.css";
import { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "./appointmentForm";

/* Import your banner images */
import heroBg1 from "../assets/electrical-brothers/raze-solar.jpg";
import heroBg2 from "../assets/electrical-brothers/han-dora.jpg";
import heroBg3 from "../assets/electrical-brothers/bermix-studio.jpg";

function Banner() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

  /* Banner Slides Data */
  const slides = [
    {
      image: heroBg1,
      title: "Powering Homes & Businesses with Safe, Reliable Electrical Solutions",
      subtitle: "From residential wiring to industrial electrical services, Electrical Brothers Group delivers quality workmanship with safety and professionalism.",
      isPatholab: false,
    },
    {
      image: heroBg2,
      title: "Powering Homes & Businesses with Safe, Reliable Electrical Solutions",
      subtitle: "From residential wiring to industrial electrical services, Electrical Brothers Group delivers quality workmanship with safety and professionalism.",
      isPatholab: true,
    },
    {
      image: heroBg3,
      title: "Powering Homes & Businesses with Safe, Reliable Electrical Solutions",
      subtitle: "From residential wiring to industrial electrical services, Electrical Brothers Group delivers quality workmanship with safety and professionalism.",
      isPatholab: false,
    },
  ];

  return (
    <section className="hero-section">
      <Carousel
        fade
        controls={false}
        indicators={true}
        interval={3000}
        pause={false}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-slide"
              style={{
                background: `url(${slide.image}) center/cover no-repeat`,
              }}
            >
              <div className="hero-overlay"></div>

              <div className="hero-content container">
                <h1 className="hero-title">
                  {slide.title.split(" ").slice(0, 2).join(" ")} <br />
                  {slide.title.split(" ").slice(2).join(" ")}
                </h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-buttons">
                  {/* Call Doctor */}
                  {/* <Button
                    className="call-btn"
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    <FaPhoneAlt /> Call Doctor
                  </Button> */}

                  {/* Show only on 2nd slide */}
                  {slide.isPatholab && (
                    <Button
                      className="read-btn"
                      onClick={() => navigate("/patholab")}
                    >
                      Know More
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentForm onSuccess={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Banner;