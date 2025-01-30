import React from "react";

const blogs = [
  {
    title: "10 Must-Visit Destinations in Asia",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655219/OIP_1_mgqy7c.jpg",
    description:
      "Explore the hidden gems and top tourist spots across Asia. From serene beaches to bustling cities, Asia has it all.",
    author: "John Doe",
    date: "December 10, 2024",
  },
  {
    title: "Tips for Traveling on a Budget",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655218/R_qmscq1.jpg",
    description:
      "Traveling doesn’t have to break the bank! Discover practical tips to explore the world without spending a fortune.",
    author: "Jane Smith",
    date: "December 5, 2024",
  },
  {
    title: "Exploring Europe: A Backpacker's Guide",
    image: "https://res.cloudinary.com/dz1yqf7jx/image/upload/v1737655217/OIP_2_yvs0oc.jpg",
    description:
      "A complete guide for backpackers planning to explore Europe. Tips on transport, accommodation, and must-visit spots.",
    author: "Emily Clarke",
    date: "November 30, 2024",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Travel Blogs
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Discover travel tips, destination guides, and inspirational stories to plan your next adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold text-teal-600 mb-2">
                  {blog.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-xs">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
              <div className="p-4 border-t">
                <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;