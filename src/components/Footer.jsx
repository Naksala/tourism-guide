import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

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
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/about" className="hover:text-teal-300">About Us</Link></li>
            <li><Link to="/destinations" className="hover:text-teal-300">Destinations</Link></li>
            <li><Link to="/services" className="hover:text-teal-300">Services</Link></li>
            <li><Link to="/blog" className="hover:text-teal-300">Our Blog</Link></li>
            <li><Link to="/contact-us" className="hover:text-teal-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Instagram Grid */}
        <div>
          <h3 className="text-lg font-bold mb-4">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655422/21_kl6ibp.jpg"
              alt="Post 1"
              className="w-full rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655423/22_liuzxc.jpg"
              alt="Post 2"
              className="w-full rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655425/24_rxyins.jpg"
              alt="Post 3"
              className="w-full rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655427/23_xthkiv.jpg"
              alt="Post 4"
              className="w-full rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655685/25_ddhuov.jpg"
              alt="Post 5"
              className="w-full rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655687/26_bcwkwd.jpg"
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
              <span>📍</span> Jaffna, Sri Lanka.
            </li>
            <li>
              <span>📞</span> +94 742826340
            </li>
            <li>
              <span>📧</span> wanderway@gmail.com
            </li>
          </ul>

          {/* Follow Us on Social Media */}
          <h4 className="text-sm font-semibold text-teal-200 mt-6 mb-2">Follow Us on Social Media</h4>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-teal-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <FaTiktok />
            </a>
          </div>
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