import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-white py-16 px-8 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
      Stay Updated! Subscribe to WanderWay
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-md">
      Join our travel community and never miss out on the latest travel tips, exclusive deals, and exciting destinations. Let’s make your next adventure unforgettable!
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:w-auto px-4 py-2 border rounded-md outline-none text-gray-800 focus:ring-2 focus:ring-teal-400"
        />
        <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition">
          Subscribe
        </button>
      </div>
      <div className="relative mt-8 flex justify-between w-full max-w-md">
        <div className="text-2xl">✈️</div>
        <div className="text-2xl">✈️</div>
      </div>
    </div>
  );
};

export default SubscribeSection;