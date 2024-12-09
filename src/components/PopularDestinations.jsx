import React from 'react';

const PopularDestinations = () => {
  const destinations = [
    {
      name: 'Lakshadweep',
      price: 'Rs. 45,000/-',
      days: '4 Days',
      rating: '4.0',
      reviews: '23',
      people: '10+',
      image: './img-01.png', // Replace with the actual image URL
      location: 'India',
    },
    {
      name: 'Kaziranga',
      price: 'Rs. 23,000/-',
      days: '6 Days',
      rating: '4.5',
      reviews: '32',
      people: '13+',
      image: './img-05.png', // Replace with the actual image URL
      location: 'Malaysia',
    },
    {
      name: 'Sun Temple',
      price: 'Rs. 19,000/-',
      days: '4 Days',
      rating: '4.7',
      reviews: '42',
      people: '10+',
      image: './img-06.png', // Replace with the actual image URL
      location: 'Sri Lanka',
    },
    {
      name: 'Sun Temple',
      price: 'Rs. 19,000/-',
      days: '4 Days',
      rating: '4.7',
      reviews: '42',
      people: '10+',
      image: './img-06.png', // Replace with the actual image URL
      location: 'Thailand',
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-6">
          Famous Destinations!
        </h2>
        <h2 className="text-xl text-center text-teal-600 mb-10">
          Our Popular Destinations
        </h2>
        <div className="flex space-x-4 overflow-x-auto">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 w-80 flex-shrink-0"
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
      </div>
    </section>
  );
};

export default PopularDestinations;