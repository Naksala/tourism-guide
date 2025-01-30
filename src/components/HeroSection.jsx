import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-5 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-teal-600 leading-tight">
            Let’s Create <br />
            <span className="underline">Memorable</span> Journey
          </h1>
          <p className="mt-4 text-gray-600">
          Explore breathtaking destinations, crafted with care for travelers like you. Begin your adventure with WanderWay today.
          </p>
          <div className="mt-6 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Location
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm">
                <option>Lakshadweep</option>
                <option>Maldives</option>
                <option>Switzerland</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Price
              </label>
              <input
                type="text"
                placeholder="Rs. 87,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
              />
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-1 px-3 rounded-md">
            Search Packages
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655422/21_kl6ibp.jpg"
            alt="Travel 1"
            className="rounded-lg shadow-lg w-[300px] h-[300px] object-cover"
          />
          <img
            src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655423/22_liuzxc.jpg"
            alt="Travel 2"
            className="rounded-lg shadow-lg w-[300px] h-[300px] object-cover"
          />
          <img
            src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655425/24_rxyins.jpg"
            alt="Travel 3"
            className="rounded-lg shadow-lg w-[300px] h-[300px] object-cover"
          />
          <img
            src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655427/23_xthkiv.jpg"
            alt="Travel 4"
            className="rounded-lg shadow-lg w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;