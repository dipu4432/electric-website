import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "./services.css";

// import fractureImg from "../assets/services/fracture-treatment.webp";
// import jointImg from "../assets/services/joint.webp";
// import arthritisImg from "../assets/services/arthritis-treatment.webp";
// import pathology from "../assets/services/patholab.png";
// import kneeImg from "../assets/services/knee.webp";

import {
  FaBolt,
  FaPlug,
  FaTools,
  FaBuilding,
  FaSolarPanel,
} from "react-icons/fa";

function Services() {
  const navigate = useNavigate();

  const services = [
  {
    image: <FaBolt size={60} color="#FFC107" />,
    title: "Electrical Installation",
    desc: "Professional electrical installations for homes, offices, and industries.",
  },
  {
    image: <FaPlug size={60} color="#FFC107" />,
    title: "Electrical Equipment Supply",
    desc: "Supply of quality electrical equipment, components, and accessories.",
  },
  {
    image: <FaTools size={60} color="#FFC107" />,
    title: "Repair & Maintenance",
    desc: "Fast troubleshooting, repair, and preventive maintenance services.",
  },
  {
    image: <FaBuilding size={60} color="#FFC107" />,
    title: "Residential, Commercial & Industrial Services",
    desc: "Complete electrical solutions.",
  },
  {
    image: <FaSolarPanel size={60} color="#FFC107" />,
    title: "Solar Services",
    desc: "Installation, maintenance, and support for efficient solar power systems.",
  },
];

  return (
    <section className="services-section">
      <Container>
        {/* Heading */}
        <h2 className="text-center fw-bold services-title my-4">
          Services We Provide
        </h2>

        {/* Row */}
        <div className="services-row">
          {services.map((item, index) => (
            <div key={index} className="service-card-wrapper">
              <div className="service-card">
                {/* Image */}
                <div className="icon-circle">
                  {/* <img
                    src={item.image}
                    alt={item.title}
                    className="service-img"
                  /> */}
                  {item.image}
                </div>

                {/* Title */}
                <h5 className="fw-bold">{item.title}</h5>

                {/* Description */}
                <p className="text-muted">{item.desc}</p>

                {/* Read More only for Physiotherapy */}
                {item.readMore && (
                  <button
                    className="read-more-btn"
                    onClick={() => navigate("/patholab")}
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;