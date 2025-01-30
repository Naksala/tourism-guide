import React from "react";

const Booking = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Book Your Dream Trip
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Fill in the details below to reserve your travel package and start your journey.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
          <form className="space-y-6">
            {/* Travel Package */}
            <div>
              <label
                htmlFor="package"
                className="block text-gray-700 font-medium mb-2"
              >
                Select a Travel Package
              </label>
              <select
                id="package"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">-- Choose Package --</option>
                <option value="tropical-paradise">Tropical Paradise</option>
                <option value="european-adventure">European Adventure</option>
                <option value="safari-expedition">Safari Expedition</option>
                <option value="mountain-retreat">Mountain Retreat</option>
              </select>
            </div>

            {/* Travel Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="start-date"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="start-date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="end-date"
                  className="block text-gray-700 font-medium mb-2"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="end-date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Personal Details */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 234 567 890"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-gray-700 font-medium mb-2"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                placeholder="Any special requests or information?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-300"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;