/* gallery.jsx */

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./gallery.css";

import g1 from "../assets/gallery/andrey-matveev.webp";
import g2 from "../assets/gallery/blaz-erzetic.webp";
import g3 from "../assets/gallery/community-archives.webp";
import c1 from "../assets/gallery/mariana.webp";
import c2 from "../assets/gallery/singapore-st.webp";
import c3 from "../assets/gallery/sushanta-rokka.webp";

function Gallery() {

  const images = [
    g1, g2, g3, c1, c2, c3
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  /* Responsive visible cards */
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 576) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 992) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  /* Auto slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  /* Show visible images */
  const visibleImages = [];

  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(
      images[(startIndex + i) % images.length]
    );
  }

  return (
    <section className="gallery-section">
      <Container>
        <h2 className="text-center fw-bold gallery-title my-4">
          Gallery
        </h2>

        <div className="gallery-wrapper">
          <div className="gallery-row">
            {visibleImages.map((img, index) => (
              <div key={index} className="gallery-card">
                <img
                  src={img}
                  alt={`Tiwari Nursing Home gallery image ${startIndex + index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Gallery;