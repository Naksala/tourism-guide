import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyChooseUs2 from "./components/WhyChooseUs2";
import PopularDestinations from "./components/PopularDestinations";
import Testimonials from "./components/Testimonials";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <PopularDestinations />
      <WhyChooseUs2 />
      <Testimonials />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;