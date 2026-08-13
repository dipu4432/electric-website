import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/electric-img.jpg"; // Replace with your image

const AboutEB = () => {
  return (
    <section className="py-3" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Image */}
          <Col lg={6}>
            <img
              src={aboutImg}
              alt="Electrical Brothers Team"
              className="img-fluid rounded shadow"
            />
          </Col>

          {/* Content */}
          <Col lg={6}>
            <span className="text-primary fw-semibold">
              ABOUT ELECTRICAL BROTHERS
            </span>

            <h2 className="fw-bold mt-2 mb-4">
              Reliable Electrical Solutions You Can Trust
            </h2>

            <p className="text-muted">
              Electrical Brothers is committed to providing safe,
              reliable, and professional electrical services for
              residential, commercial, and industrial clients.
              Our experienced electricians deliver high-quality
              installations, maintenance, repairs, and troubleshooting
              solutions tailored to your needs.
            </p>

            <p className="text-muted">
              We focus on safety, efficiency, and customer satisfaction,
              ensuring every project is completed with precision and care.
              Whether it's a small repair or a large-scale installation,
              Electrical Brothers is your trusted partner for dependable
              electrical services.
            </p>

            <Row className="mt-4">
              <Col sm={6}>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Skilled Electricians</li>
                  <li className="mb-2">✓ Quality Workmanship</li>
                  <li className="mb-2">✓ Safety First Approach</li>
                </ul>
              </Col>

              <Col sm={6}>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Fast Response</li>
                  <li className="mb-2">✓ Affordable Pricing</li>
                  <li className="mb-2">✓ Customer Satisfaction</li>
                </ul>
              </Col>
            </Row>

            {/* Stats */}
            <Row className="mt-4 text-center">
              <Col xs={4}>
                <h3 className="fw-bold text-primary">500+</h3>
                <small>Projects</small>
              </Col>

              <Col xs={4}>
                <h3 className="fw-bold text-primary">100+</h3>
                <small>Clients</small>
              </Col>

              <Col xs={4}>
                <h3 className="fw-bold text-primary">5+</h3>
                <small>Years</small>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutEB;