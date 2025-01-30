import React, { useRef, useEffect } from "react";

const InfiniteCarousel = () => {
  const containerRef = useRef(null);
  let scrollDirection = 1; // 1 for right, -1 for left
  const speed = 100;

  useEffect(() => {
    const container = containerRef.current;

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += scrollDirection; // Scroll in the current direction

        // Reverse direction if the container reaches start or end
        if (
          container.scrollLeft >= container.scrollWidth - container.clientWidth ||
          container.scrollLeft <= 0
        ) {
          scrollDirection *= -1;
        }
      }

      requestAnimationFrame(autoScroll); // Continue animating
    };

    autoScroll(); // Start animation

    return () => cancelAnimationFrame(autoScroll); // Cleanup
  }, [speed]);

  const images = [
    "./img1.jpg",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg",
    "./img1.jpg",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg",
    "./img1.jpg",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg",
  ]; // Replace with your image paths

  return (
    <div className="w-full overflow-hidden relative bg-gray-100">
      <div
        ref={containerRef}
        className="flex space-x-4 py-4 overflow-x-scroll no-scrollbar"
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-40">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
