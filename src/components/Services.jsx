import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Our Services
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Discover our diverse range of services designed to make your travel
          experience seamless and memorable.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654895/16_gibslp.jpg"
              alt="Tour Packages"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Tour Packages
              </h3>
              <p className="text-gray-600">
                Explore our curated tour packages that take you to the world's
                most beautiful destinations.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654893/Benefits-to-booking-a-room-directly-with-a-hotel-over-a-third-party-travel-site_yishgi.webp"
              alt="Hotel Booking"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Hotel Booking
              </h3>
              <p className="text-gray-600">
                Book your stay with ease at top-rated hotels, resorts, and
                villas around the globe.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654898/Airtickets_ijh7we.jpg"
              alt="Flight Booking"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Flight Booking
              </h3>
              <p className="text-gray-600">
                Find the best flight deals to your dream destination with our
                easy-to-use flight booking service.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654903/2cd6397c-04be-11ec-89fd-c0c117172485_1629832872875_1629832929484_mkmcpp.webp"
              alt="Travel Insurance"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Travel Insurance
              </h3>
              <p className="text-gray-600">
                Stay safe and protected during your travels with our comprehensive travel insurance options.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654892/OIP_ubamsn.jpg"
              alt="Private Tours"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Private Tours
              </h3>
              <p className="text-gray-600">
                Experience the luxury and comfort of private tours, with a
                personalized guide to show you the best sights.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654896/190325-rental-cars-cs-229p_9f30034b54ca5e3246b9cdfa3eb6dbb8_20210118160917_pj5jrz.jpg"
              alt="Car Rental"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                Car Rental
              </h3>
              <p className="text-gray-600">
                Rent a car for your journey and travel at your own pace with our
                reliable car rental service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;