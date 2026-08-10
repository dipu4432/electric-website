import { FaStar } from "react-icons/fa";
import user1 from "../assets/Priya_Sharma.webp";
import user2 from "../assets/Rajesh_Kumar.webp";

function Testimonials() {

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.950909774217!2d82.17369917404326!3d22.08969165049866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b551ae33dd1%3A0xcf318314bd506306!2sELECTRICAL%20BROTHERS%20GROUP!5e0!3m2!1sen!2sin!4v1786340706796!5m2!1sen!2sin";

  return (
    <section
      className="testimonial-section"
      style={{
        paddingTop: "20px",
        paddingBottom: "20px", // reduced bottom padding
        marginBottom: "0",
      }}
    >
      <div className="container pb-0 mb-0">
        <h2
          className="text-center fw-bold my-4"
        >
          Reviews
        </h2>

        <div className="row g-4 mb-0">
          {/* Map Card */}
          <div className="col-12 col-sm-6 col-md-4 mb-0">
            <div className="card p-3 shadow-sm rounded h-100 mb-0">
              <h5 className="fw-bold mb-3">Google Map</h5>

              <div style={{ position: "relative" }}>
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="200"
                  style={{
                    border: 0,
                    borderRadius: "10px",
                  }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Review 1 */}
          <div className="col-12 col-sm-6 col-md-4 mb-0">
            <div className="card p-4 shadow-sm rounded h-100 mb-0">
              <div className="d-flex align-items-center mb-3 gap-3">
                <img
                  src={user1}
                  className="rounded-circle"
                  width="50"
                  height="50"
                  alt="user"
                />
                <h6 className="mb-0 fw-bold">Priya Sharma</h6>
                <p className="text-muted mb-0">Homeowner</p>
              </div>

              <p className="text-muted">
                "We hired Electrical Brothers Group for electrical maintenance
                at our home, and the service exceeded our expectations. The
                electricians were knowledgeable, friendly, and the pricing was
                fair. We will definitely use their services again.."
              </p>

              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="col-12 col-sm-6 col-md-4 mb-0">
            <div className="card p-4 shadow-sm rounded h-100 mb-0">
              <div className="d-flex align-items-center mb-3 gap-3">
                <img
                  src={user2}
                  className="rounded-circle"
                  width="50"
                  height="50"
                  alt="user"
                />
                <h6 className="mb-0 fw-bold">Rajesh Kumar</h6>
                <p className="text-muted mb-0">Business Owner</p>
              </div>

              <p className="text-muted">
                "Electrical Brothers Group did an excellent job with the wiring
                and lighting installation at our office. Their team was
                professional, punctual, and completed the work safely and on
                schedule. Highly recommended!"
              </p>

              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
