import React from 'react';

const WhyChooseUs2 = () => {
  return (
    <section className="py-10 px-3 bg-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h4 className="text-lg text-teal-500 font-semibold mb-2">Why Choose Us?</h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Choose Dream Destination For Explore World
          </h2>
          <p className="text-gray-600 mb-6 mr-2 leading-relaxed">
            At WanderWay, we’re dedicated to making your travel dreams a reality. Whether you seek breathtaking landscapes, cultural immersion, or thrilling adventures, we ensure every journey is unforgettable.
          </p>
          <a
            href="/about"
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md text-lg font-semibold"
          >
            About Us
          </a>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 relative">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655685/25_ddhuov.jpg"
              alt="Explore World"
              className="object-cover w-[800px] h-[400px]"
            />
          </div>
          {/* Emoji Reaction */}
          <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 mt-4 transform transition-transform duration-300 ease-in-out hover:scale-150">
            <span className="text-gray-700 text-sm font-semibold">How Your Experience?</span>
            <div className="flex space-x-2">
              <span className="text-red-500 text-lg">😡</span>
              <span className="text-yellow-500 text-lg">😟</span>
              <span className="text-yellow-400 text-lg">😐</span>
              <span className="text-green-500 text-lg">😊</span>
              <span className="text-pink-500 text-lg">😍</span>
            </div>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 lg:px-20 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">14</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">320+</h3>
            <p className="text-gray-600">Distention Collaboration</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">67+</h3>
            <p className="text-gray-600">Satisfied Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs2;