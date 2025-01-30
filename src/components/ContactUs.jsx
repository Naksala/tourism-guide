// ContactUs.jsx
import React from "react";
import { FaDirections, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const LazyIcon = ({ children }) => (
  <LazyLoad height={50} offset={100}>
    {children}
  </LazyLoad>
);

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-teal-600 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2">Get in touch and let us know how we can help.</p>
      </div>

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Contact Info */}
        <div className="space-y-8 animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-3xl font-bold text-teal-700 mb-6 transform hover:scale-105 transition-transform duration-300">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">We are always here to help you. Reach out to us through any of the following contact methods:</p>

          <ul className="space-y-6">
            {/* Address */}
            <li className="flex items-center space-x-4 hover:bg-teal-100 p-2 rounded-lg shadow-md transition-all duration-300">
              <LazyIcon>
                <FaMapMarkerAlt className="text-teal-600 text-3xl transform hover:scale-110 transition-all" />
              </LazyIcon>
              <div>
                <p className="font-semibold text-teal-700">Head Office</p>
                <p className="text-gray-500">Jaffna, Sri Lanka.</p>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center space-x-4 hover:bg-teal-100 p-2 rounded-lg shadow-md transition-all duration-300">
              <LazyIcon>
                <FaEnvelope className="text-teal-600 text-3xl transform hover:scale-110 transition-all" />
              </LazyIcon>
              <div>
                <p className="font-semibold text-teal-700">Email Us</p>
                <p className="text-gray-500">wanderway@gmail.com</p>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-center space-x-4 hover:bg-teal-100 p-2 rounded-lg shadow-md transition-all duration-300">
              <LazyIcon>
                <FaPhone className="text-teal-600 text-3xl transform hover:scale-110 transition-all" />
              </LazyIcon>
              <div>
                <p className="font-semibold text-teal-700">Call Us</p>
                <p className="text-gray-500">+94 742826340</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section: Live Map Integration */}
        <div className="relative">
          <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <iframe
              src="https://www.google.com/maps?q=Jaffna+Town%2C+Sri+Lanka&output=embed"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="absolute bottom-4 right-4 bg-teal-700 text-white px-4 py-2 rounded-full transform hover:scale-110 transition-all duration-300">
            <a href="https://www.google.com/maps?q=Jaffna+Town%2C+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaDirections className="text-xl" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Green Section with Message */}
      <div className="bg-teal-600 text-white py-12">
        <div className="text-center container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
          <p className="mb-8">
            Have questions or need support? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="-mt-16 container mx-auto px-4">
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-3 rounded w-full mb-4"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-3 rounded w-full h-32 mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-600 text-white py-3 px-6 rounded hover:bg-teal-700 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;