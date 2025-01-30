import React from "react";
import LazyLoad from "react-lazyload";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">About WanderWay</h1>
          <p className="text-lg">
            Your gateway to discovering the most breathtaking destinations around the world. Let’s explore, dream, and discover together.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-teal-600">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-4">
              At WanderWay, we are dedicated to providing the best travel experiences for adventurers, families, and solo explorers alike. From exotic beaches to majestic mountains, we offer customized packages to meet every traveler’s dream.
            </p>
            <p className="text-gray-700 text-lg">
              We believe travel has the power to transform lives, broaden horizons, and create unforgettable memories.
            </p>
          </div>
          <div>
            <LazyLoad height={500} offset={100} once>
              <img
                src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654058/11_ovwzf9.jpg"
                alt="Travel Exploration"
                className="rounded-lg shadow-md w-[600px] h-[500px] object-cover"
              />
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Smith", role: "Founder", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657085/33_hjak0h.jpg" },
              { name: "Maria Johnson", role: "Travel Consultant", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657084/30_huhfoz.jpg" },
              { name: "Sarah Lee", role: "Tour Guide", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657084/31_jvedxv.jpg" },
              { name: "John Doe", role: "Marketing Specialist", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657084/35_dtjvlj.jpg" },
            ].map((teamMember, index) => (
              <LazyLoad key={index} height={200} offset={100} once>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="rounded-full mx-auto mb-4 w-[150px] h-[150px] object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-800">{teamMember.name}</h3>
                  <p className="text-teal-600">{teamMember.role}</p>
                </div>
              </LazyLoad>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-8">
            Ready to embark on an adventure of a lifetime? Let WanderWay be your trusted travel partner.
          </p>
          <a
            href="/contact-us"
            className="bg-teal-800 hover:bg-teal-700 text-white py-3 px-5 rounded-md text-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;