import { Helmet } from "react-helmet-async";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Tiwari Nursing Home",
  description: "Orthopedic and Trauma Center in Bilaspur offering joint replacement, fracture treatment, trauma surgery, and pathology lab services.",
  url: "https://tiwariorthocare.com",
  telephone: "+919901106057",
  email: "info@tiwariorthocare.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Orthopedic and Trauma Center",
    addressLocality: "Bilaspur",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  medicalSpecialty: ["Orthopedic Surgery", "Trauma Surgery", "Diagnostic Lab"],
  founder: [
    {
      "@type": "Person",
      name: "Dr. Shekhar Tiwari",
      jobTitle: "Senior Orthopedic Surgeon & Trauma Specialist",
    },
    {
      "@type": "Person",
      name: "Dr. Vaibhav Tiwari",
      jobTitle: "Consultant Orthopedic Surgeon",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

export default StructuredData;
