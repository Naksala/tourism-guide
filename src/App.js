import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import About from "./components/AboutUs";
import Packages from "./components/Packages";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Booking from "./components/Booking";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
// import InfiniteCarousel from "./components/InfiniteCarousel";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop to ensure scrolling to top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* <InfiniteCarousel /> */}
      
      <SubscribeSection />
      <Footer />
    </Router>
  );
}

export default App;