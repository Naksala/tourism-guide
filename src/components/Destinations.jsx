import React from "react";

const Destinations = () => {
  const countries = [
    {
      name: "Sri Lanka",
      destinations: [
        { name: "Sigiriya", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649573/2_vtbmov.jpg" },
        { name: "Ella", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649574/3_v2jqjh.jpg" },
        { name: "Galle Fort", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649577/8_w8gshr.jpg" },
      ],
    },
    {
      name: "France",
      destinations: [
        { name: "Eiffel Tower", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649825/4_dget07.jpg" },
        { name: "Louvre Museum", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649826/3_bxe9zy.jpg" },
        { name: "French Riviera", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737649826/1_zbsfbt.jpg" },
      ],
    },
    {
      name: "Japan",
      destinations: [
        { name: "Mount Fuji", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650015/3_oxo54z.jpg" },
        { name: "Kyoto Temples", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650015/1_ipejpa.avif" },
        { name: "Tokyo Skytree", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650016/2_fqw55j.jpg" },
      ],
    },
    {
      name: "Italy",
      destinations: [
        { name: "Colosseum", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650248/3_jc6spg.jpg" },
        { name: "Venice Canals", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650250/2_sdeite.jpg" },
        { name: "Leaning Tower of Pisa", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650249/1_vafwbo.jpg" },
      ],
    },
    // {
    //   name: "Australia",
    //   destinations: [
    //     { name: "Sydney Opera House", image: "https://via.placeholder.com/300x200?text=Sydney+Opera+House" },
    //     { name: "Great Barrier Reef", image: "https://via.placeholder.com/300x200?text=Great+Barrier+Reef" },
    //     { name: "Uluru", image: "https://via.placeholder.com/300x200?text=Uluru" },
    //   ],
    // },
    {
      name: "United States",
      destinations: [
        { name: "Grand Canyon", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650956/2_gznv2y.jpg" },
        { name: "Statue of Liberty", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650955/3_vleqx6.jpg" },
        { name: "Yellowstone National Park", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737650955/1_fhim2i.jpg" },
      ],
    },
    {
      name: "United Kingdom",
      destinations: [
        { name: "Big Ben", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737651890/3_eujfnp.jpg" },
        { name: "Stonehenge", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737651895/1_istv0v.jpg" },
        { name: "Tower of London", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737651893/2_sfz68k.jpg" },
      ],
    },
    {
      name: "India",
      destinations: [
        { name: "Taj Mahal", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652082/2_ezr7uk.jpg" },
        { name: "Kerala Backwaters", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652082/3_iioe8c.jpg" },
        { name: "Jaipur Palaces", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652081/1_x2j5zu.jpg" },
      ],
    },
    {
      name: "Thailand",
      destinations: [
        { name: "Phi Phi Islands", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652849/1_vaivar.jpg" },
        { name: "Grand Palace", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652850/3_xbnk0a.jpg" },
        { name: "Chiang Mai Temples", image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737652851/2_zhgslr.jpg" },
      ],
    },
    // {
    //   name: "South Africa",
    //   destinations: [
    //     { name: "Table Mountain", image: "https://via.placeholder.com/300x200?text=Table+Mountain" },
    //     { name: "Kruger National Park", image: "https://via.placeholder.com/300x200?text=Kruger+National+Park" },
    //     { name: "Cape of Good Hope", image: "https://via.placeholder.com/300x200?text=Cape+of+Good+Hope" },
    //   ],
    // },
    // {
    //   name: "Singapore",
    //   destinations: [
    //     { name: "Marina Bay Sands", image: "https://via.placeholder.com/300x200?text=Marina+Bay+Sands" },
    //     { name: "Gardens by the Bay", image: "https://via.placeholder.com/300x200?text=Gardens+by+the+Bay" },
    //     { name: "Sentosa Island", image: "https://via.placeholder.com/300x200?text=Sentosa+Island" },
    //   ],
    // },
    // {
    //   name: "Switzerland",
    //   destinations: [
    //     { name: "Matterhorn", image: "https://via.placeholder.com/300x200?text=Matterhorn" },
    //     { name: "Lake Geneva", image: "https://via.placeholder.com/300x200?text=Lake+Geneva" },
    //     { name: "Château de Chillon", image: "https://via.placeholder.com/300x200?text=Château+de+Chillon" },
    //   ],
    // },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Explore Destinations🌏
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Discover popular destinations across the globe, categorized by country.
        </p>

        {countries.map((country, index) => (
          <div key={index} className="mb-16">
            {/* Country Header with New Design */}
            <div className="relative mb-6">
              <h3 className="text-4xl font-bold text-white bg-teal-600 py-3 px-6 rounded-md shadow-md text-center">
                {country.name}
              </h3>
              <div className="absolute top-0 right-0 bg-teal-600 w-10 h-10 rounded-full transform rotate-45 mt-4 mr-4"></div>
            </div>
            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {country.destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-teal-600">
                      {destination.name}
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Discover the beauty of {destination.name} and immerse
                      yourself in its unique attractions and culture.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;