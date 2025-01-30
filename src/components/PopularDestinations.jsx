import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PopularDestinations = () => {
  const destinations = [
    {
      name: 'Eiffel Tower',
      price: 'Rs. 60,000/-',
      days: '14 Days',
      rating: '4.2',
      reviews: '13',
      people: '18+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649825/4_dget07.jpg',
      location: 'France',
    },
    {
      name: 'Ella Nine Arch Bridge',
      price: 'Rs. 5,000/-',
      days: '1 Days',
      rating: '4.5',
      reviews: '20',
      people: '40+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649574/3_v2jqjh.jpg',
      location: 'Sri Lanka',
    },
    {
      name: 'Mount Fuji',
      price: 'Rs. 23,000/-',
      days: '8 Days',
      rating: '4.6',
      reviews: '32',
      people: '13+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650015/3_oxo54z.jpg',
      location: 'Japan',
    },
    {
      name: 'Colosseum',
      price: 'Rs. 80,000/-',
      days: '4 Days',
      rating: '4.7',
      reviews: '42',
      people: '10+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650248/3_jc6spg.jpg',
      location: 'Italy',
    },
    {
      name: 'Statue of Liberty',
      price: 'Rs. 19,000/-',
      days: '4 Days',
      rating: '4.7',
      reviews: '40',
      people: '11+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650955/3_vleqx6.jpg',
      location: 'United States',
    },
    {
      name: 'Tower of London',
      price: 'Rs. 50,000/-',
      days: '6 Days',
      rating: '4.6',
      reviews: '32',
      people: '5+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737651893/2_sfz68k.jpg',
      location: 'United Kingdom',
    },
    {
      name: 'Phi Phi Islands',
      price: 'Rs. 15,000/-',
      days: '4 Days',
      rating: '4.7',
      reviews: '42',
      people: '10+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652849/1_vaivar.jpg',
      location: 'Thailand',
    },
    {
      name: 'Taj Mahal',
      price: 'Rs. 10,000/-',
      days: '2 Days',
      rating: '4.8',
      reviews: '82',
      people: '60+',
      image: 'https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652082/2_ezr7uk.jpg',
      location: 'India',
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const cardWidth = 300 + 16; // Card width + gap (adjust based on styles)
    if (direction === 'left') {
      current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else {
      current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setActiveIndex((prev) => Math.min(prev + 1, destinations.length - 1));
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-2 relative">
        <h2 className="text-3xl font-bold text-center mb-6">Famous Destinations!</h2>
        <h2 className="text-xl text-center text-teal-600 mb-10">Our Popular Destinations</h2>

        {/* Arrow Buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700 z-10"
          onClick={() => scroll('left')}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700 z-10"
          onClick={() => scroll('right')}
        >
          <FaArrowRight />
        </button>

        {/* Destinations List */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar"
        >
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-2 flex-shrink-0"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="rounded-t-lg w-[300px] h-[200px] object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">{dest.name}</h4>
                <p className="text-teal-600 font-semibold">{dest.price} Per person</p>
                <p className="text-sm text-gray-600">{dest.days}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-500 flex items-center">
                    ⭐ {dest.rating} ({dest.reviews})
                  </span>
                  <span className="text-gray-600">{dest.people}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{dest.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bullets */}
        <div className="flex justify-center mt-6">
          {destinations.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                activeIndex === index
                  ? 'bg-teal-600'
                  : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
