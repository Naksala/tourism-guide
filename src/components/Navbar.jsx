import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-4 mr-3 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1733644591/wanderway_logo-03_hukdwr.png" // Replace with your logo URL
            alt="Logo"
            className="h-12 w-12 rounded-md"
          />
          <span className="font-bold text-lg">WANDERWAY</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-teal-500">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-teal-500">
            About
          </a>
          <a href="#packages" className="text-gray-700 hover:text-teal-500">
            Packages
          </a>
          <a href="#contact" className="text-gray-700 hover:text-teal-500">
            Contact
          </a>
          <button className="text-gray-700 hover:text-teal-500">
            <i className="fas fa-search"></i>
          </button>
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;