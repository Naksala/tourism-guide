import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCheck, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 px-4 ml-5 mb-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Side: Image */}
        <div className="relative">
          <div className="absolute inset-0 -left-6 -top-6 rounded-3xl bg-blue-100 w-full h-full"></div>
          <img
            src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655687/26_bcwkwd.jpg" // Replace with your image URL
            alt="Travel Destination"
            className="relative z-10 rounded-3xl shadow-lg w-[300px] h-[300px] object-cover"
          />
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <button className="bg-white text-blue-500 p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.06v5.879a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
          {/* Badge */}
          <div className="absolute bottom-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
          <FontAwesomeIcon icon={faInfoCircle} />
           
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="text-center md:text-left">
          {/* <h3 className="text-blue-500 font-semibold text-sm">Why WanderWay?</h3> */}
          <h2 className=" text-teal-600 font-bold text-2xl md:text-3xl mt-2 mb-6">
            Plan Your Trip With Us!
          </h2>
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-teal-500 p-2 rounded-full">
              <FontAwesomeIcon icon={faCheck} />
              </div>
              <div>
                <h4 className="text-gray-800 font-bold">Best Price Guarantee</h4>
                <p className="text-gray-600 text-sm">
                Affordable packages without compromising on quality.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-teal-500 p-2 rounded-full">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h4 className="text-gray-800 font-bold">Flexible Booking</h4>
                <p className="text-gray-600 text-sm">
                Enjoy hassle-free bookings with flexible policies tailored for your convenience.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-teal-500 p-2 rounded-full">
              <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div>
                <h4 className="text-gray-800 font-bold">Professional Tour Guide</h4>
                <p className="text-gray-600 text-sm">
                Our experienced guides ensure you have an enriching journey, full of stories and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;