import "./patholab.css";
import bannerImg from "../assets/patholab-bg.webp";
import PathGallery from "./pathGallery.jsx";
import PathoFeatures from "./pathoFeatures.jsx";
import PathoServices from "./pathoservices.jsx";
import PathologyPriceList from "./pathologyPriceList.jsx";
import SEO from "./SEO";

function Patholab() {
  return (
    <div>
      <SEO
        title="Pathology Lab Services Bilaspur"
        description="Advanced pathology lab services at Tiwari Nursing Home, Bilaspur. Blood tests, urine tests, diabetes screening, thyroid profile, liver function test, and full body checkups."
        ogTitle="Pathology Lab Services | Tiwari Nursing Home"
        ogDescription="Accurate testing, trusted diagnostics and fast reports. Blood tests, diabetes screening, thyroid profile, and more."
        ogUrl="https://tiwariorthocare.com/patholab"
        canonical="https://tiwariorthocare.com/patholab"
      />
      <section className="physio-page">
        {/* Banner */}
        <div
          className="physio-banner"
          style={{
            background: `url(${bannerImg}) center/cover no-repeat`,
          }}
        >
          <div className="physio-overlay"></div>

          <div className="physio-content">
            <h1>Advanced Patholab Services</h1>
            <p>
              Accurate testing, trusted diagnostics and fast reports for better
              healthcare decisions.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="physio-details">
          <h2>Our Patholab Services</h2>

          <p>
            We provide modern laboratory testing with reliable results and quick
            turnaround time. Our services help doctors diagnose and monitor
            health conditions accurately.
          </p>

          <p>
            Blood tests, urine tests, diabetes screening, thyroid profile, liver
            function test, kidney function test and many more health checkups
            are available.
          </p>
        </div>
      </section>
      <PathoFeatures />
      <PathoServices />
      <PathologyPriceList />
      <PathGallery />
    </div>
  );
}

export default Patholab;
