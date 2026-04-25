import Container from "react-bootstrap/Container";
import "./pathologyPriceList.css";

function PathologyPriceList() {
  const packages = [
    {
      title: "Test Price List",
      price: "",
      className: "big-card",
      items: [
        ["Hemoglobin", "60/-"],
        ["Complete Blood Count", "250/-"],
        ["Blood Group", "60/-"],
        ["Sickling Test", "160/-"],
        ["Blood Sugar", "50/-"],
        ["HbA1c", "500/-"],
        ["Renal Function Test", "300/-"],
        ["Liver Function Test", "300/-"],
        ["Lipid Profile", "550/-"],
        ["Thyroid Function Test", "550/-"],
        ["Uric Acid", "160/-"],
        ["Vitamin D3", "1200/-"],
        ["Vitamin B12", "800/-"],
        ["Urine Routine", "100/-"],
      ],
    },

    {
      title: "Complete Health Package",
      price: "2050 - 1500",
      className: "mid-card",
      items: [
        ["CBC", ""],
        ["ESR", ""],
        ["RBS", ""],
        ["HbA1c", ""],
        ["Blood Group", ""],
        ["RFT", ""],
        ["Bilirubin", ""],
        ["Cholestrol", ""],
        ["Triglyceride", ""],
        ["Urine Routine", ""],
        ["Vitamin D3", ""],
        ["Vitamin B12", ""],
      ],
    },

    {
      title: "Thyroid + Sugar Package",
      price: "1100 - 800",
      className: "small-card",
      items: [
        ["FBS", ""],
        ["PPBS", ""],
        ["HbA1c", ""],
        ["T3, T4, TSH", ""],
      ],
    },

    {
      title: "Comprehensive Health Package",
      price: "2550 - 1600",
      className: "small-card",
      items: [
        ["CBC", ""],
        ["ESR", ""],
        ["RBS", ""],
        ["HbA1c", ""],
        ["Blood Group", ""],
        ["RFT", ""],
      ],
    },

    {
      title: "Fever Profile",
      price: "2280 - 1600",
      className: "small-card",
      items: [
        ["CBC", ""],
        ["ESR", ""],
        ["CRP", ""],
        ["Malaria", ""],
        ["Typhoid", ""],
        ["Dengue", ""],
      ],
    },
  ];

  return (
    <section className="package-section py-0">
      <Container>
        <div className="package-grid">
          {packages.map((pkg, index) => (
            <div className={`package-card ${pkg.className}`} key={index}>
              {/* <div className="package-header">
                {pkg.title} {pkg.price && <span>{pkg.price}</span>}
              </div> */}
              <div className="package-header">
                {pkg.title}

                {pkg.price && (
                  <span className="price-box">
                    <span className="old-price">
                      ₹{pkg.price.split("-")[0].trim()}
                    </span>

                    <span className="new-price">
                      ₹{pkg.price.split("-")[1].trim()}
                    </span>
                  </span>
                )}
              </div>

              {/* FIXED: two column only cards WITH price */}
              <div
                className={`package-body ${
                  pkg.price !== "" ? "two-column" : ""
                }`}
              >
                {pkg.items.map((item, i) => (
                  <div className="package-row" key={i}>
                    <span>• {item[0]}</span>
                    <span>{item[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PathologyPriceList;
