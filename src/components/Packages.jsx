import React from 'react';
import LazyLoad from 'react-lazyload';

const packagesData = [
  {
    title: "Tropical Paradise",
    description: "Escape to the serene beaches and lush forests of Bali.",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737654269/12_kxyk7y.jpg",
    price: "$1200",
  },
  {
    title: "European Adventure",
    description: "Explore the iconic landmarks and rich history of Europe.",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657373/40_mjvgil.jpg",
    price: "$2500",
  },
  {
    title: "Safari Expedition",
    description: "Discover the wildlife wonders of Africa with a guided safari.",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657375/41_lmouhp.jpg",
    price: "$1800",
  },
  {
    title: "Beach Paradise",
    description:
      "Relax on the golden sands and enjoy crystal-clear waters in a tropical haven.",
    price: "$499",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657374/42_tlsgzx.jpg",
  },
  {
    title: "Mountain Adventure",
    description:
      "Hike the stunning trails and explore the breathtaking landscapes.",
    price: "$599",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657373/44_rr0trg.jpg",
  },
  {
    title: "City Escapade",
    description:
      "Experience the vibrant life, iconic landmarks, and culinary delights.",
    price: "$399",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737657374/43_vxwcem.jpg",
  },
];

const PackageCard = ({ packageData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <LazyLoad height={256} offset={100} debounce={false} once>
        <img src={packageData.image} alt={packageData.title} className="w-full h-64 object-cover" />
      </LazyLoad>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-teal-600 mb-2">{packageData.title}</h3>
        <p className="text-gray-700 mb-4">{packageData.description}</p>
        <p className="text-xl mb-3 font-bold text-teal-700">{packageData.price}</p>
        <a
          href="/booking"
          className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-600">Our Travel Packages</h2>
        <p className="text-gray-700 mt-4">Choose your dream destination from our exciting range of travel packages.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packagesData.map((pkg, index) => (
          <PackageCard key={index} packageData={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;