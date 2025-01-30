import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1733644591/wanderway_logo-03_hukdwr.png"
              alt="Logo"
              className="h-12 w-12 rounded-md"
            />
            <span className="font-bold text-lg">WANDERWAY</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-teal-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-500">
              About
            </Link>
            <Link to="/packages" className="text-gray-700 hover:text-teal-500">
              Packages
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-teal-500">
              Destinations
            </Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-teal-500">
              Contact Us
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden text-gray-700 hover:text-teal-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-teal-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </nav>

      {/* Content Spacer */}
      <div className="mt-20"></div>
    </>
  );
};

export default Navbar;