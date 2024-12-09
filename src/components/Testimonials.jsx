import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Max Skshena',
      role: 'CEO Of XYZ Company',
      image: './img-01.png',
      feedback:
        'WanderWay exceeded all my expectations! From seamless planning to unforgettable experiences, every detail was handled with care. I’ve never felt more relaxed and excited during a trip. Truly the best travel company I’ve worked with.',
    },
    {
      name: 'Emily Carter',
      role: 'Travel Enthusiast',
      image: './img-02.png',
      feedback:
        'The team at WanderWay made everything so easy! The destinations were amazing, and the customer service was exceptional. I can’t wait for my next adventure!',
    },
    {
      name: 'John Patel',
      role: 'Business Traveler',
      image: './img-03.png',
      feedback:
        'WanderWay’s attention to detail and curated experiences have made my business trips feel like vacations. They really go above and beyond to meet your needs.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500); // Animation duration
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
        setIsAnimating(false);
      }, 500); // Animation duration
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h4 className="text-lg text-teal-500 font-semibold mb-2">What Our Clients Say</h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Client Testimonials</h2>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <div
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="rounded-lg shadow-lg w-[800px] h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`lg:w-1/2 bg-white shadow-lg rounded-lg p-6 border border-blue-300 relative transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800">{currentTestimonial.name}</h3>
            <p className="text-teal-500 font-medium">{currentTestimonial.role}</p>
            <p className="text-gray-600 mt-4 leading-relaxed">{currentTestimonial.feedback}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 flex items-center justify-center transition"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 flex items-center justify-center transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;