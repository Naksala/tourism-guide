import React from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyChooseUs2 from "../components/WhyChooseUs2";
import PopularDestinations from "../components/PopularDestinations";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <PopularDestinations />
      <WhyChooseUs2 />
      <Testimonials />
    </div>
  );
};

export default Home;