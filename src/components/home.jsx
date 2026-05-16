import Banner from "./banner";
import Features from "./features";
import Gallery from "./gallery";
import Services from "./services";
import Testimonials from "./testimonials";
import ContactList from "./contactList";
import Doctors from "./doctors";
import SEO from "./SEO";

const Home = () => {
  return (
    <div>
      <SEO
        title="Orthopedic & Trauma Center Bilaspur"
        description="Tiwari Nursing Home - Orthopedic and Trauma Center in Bilaspur. Expert joint replacement, fracture treatment, and trauma surgery by Dr. Shekhar Tiwari and Dr. Vaibhav Tiwari."
        ogUrl="https://tiwariorthocare.com"
        canonical="https://tiwariorthocare.com"
      />
      <div id="home"><Banner /></div>
      <div id="features"><Features /></div>
      <div id="meet-doctors">
        <h1 className="text-center fw-bold my-1">Meet Our Doctors</h1>
        <Doctors />
      </div>
      <div id="services"><Services /></div>
      <div id="gallery"><Gallery /></div>
      <div id="reviews"><Testimonials /></div>
      <div id="contact"><ContactList /></div>
    </div>
  )
}

export default Home