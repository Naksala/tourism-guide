import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Wander<span className="text-teal-200">Way</span></h2>
          <h3 className="text-xl font-bold mb-4">Explore | <span className="text-teal-200">Dream | </span><span className="text-white-200">Discover</span></h3>
          <p className="text-gray-200 text-sm mb-4">
            At WanderWay, we are passionate about crafting unforgettable travel experiences. From serene getaways to thrilling adventures, let us guide you to your dream destinations. Your journey begins with us.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-teal-300">
              <i className="fab fa-facebook"></i> {/* Replace with SVG if desired */}
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-teal-300">About Us</a></li>
            <li><a href="#" className="hover:text-teal-300">Destinations</a></li>
            <li><a href="#" className="hover:text-teal-300">Services</a></li>
            <li><a href="#" className="hover:text-teal-300">Our Blog</a></li>
            <li><a href="#" className="hover:text-teal-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Instagram Grid */}
        <div>
          <h3 className="text-lg font-bold mb-4">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="./img-01.png"
              alt="Post 1"
              className="w-full rounded-md"
            />
            <img
              src="./img-02.png"
              alt="Post 2"
              className="w-full rounded-md"
            />
            <img
              src="./img-03.png"
              alt="Post 3"
              className="w-full rounded-md"
            />
            <img
              src="./img-04.png"
              alt="Post 4"
              className="w-full rounded-md"
            />
            <img
              src="./img-05.png"
              alt="Post 5"
              className="w-full rounded-md"
            />
            <img
              src="./img-06.png"
              alt="Post 6"
              className="w-full rounded-md"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <span>📍</span> Colombo, Sri Lanka.
            </li>
            <li>
              <span>📞</span> +94 742826340
            </li>
            <li>
              <span>📧</span> wanderway@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-200">
        <p>WanderWay © 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;