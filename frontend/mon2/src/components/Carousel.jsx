import React, { useEffect, useRef, useState } from "react";

const slides = [
  "https://www.oruphones.com/assets/Index/extra-banner/banner-2.svg",
  "https://www.oruphones.com/assets/Index/extra-banner/banner-1.svg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full h-[75vh] max-w-full mx-auto mt-0 flex items-center justify-center bg-gray-100">
      <div className="flex overflow-hidden rounded-lg shadow-lg w-full h-full">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide}
            alt={`Slide ${idx + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
              current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ transitionProperty: "opacity" }}
          />
        ))}
      </div>
      <button className="absolute bottom-8 right-12 bg-[#7747ff] text-white px-8 py-3 rounded shadow-lg font-semibold text-xl transition-transform transform hover:scale-105 hover:bg-[#5a32c7]">
        sell?
      </button>
    </div>
  );
};

export default Carousel;
