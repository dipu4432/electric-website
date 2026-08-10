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
        // title="Orthopedic & Trauma Center Bilaspur"
        title="Electrical Brothers - Electrical Services in Bilaspur"
        description="Electrical Brothers - Electrical Services in Bilaspur. Expert electrical installation, maintenance, and repair services."
        ogUrl="https://electric-website-pink.vercel.app/"
        canonical="https://electric-website-pink.vercel.app/"
      />
      <div id="home"><Banner /></div>
      <div id="features"><Features /></div>
      <div id="meet-doctors">
        <h1 className="text-center fw-bold my-1">About Us</h1>
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