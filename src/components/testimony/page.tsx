import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Good app and driver is also in very safe and good service. Use this app; the drivers provide excellent service.",
    author: "Archana Sidhu",
    rating: 5,
  },
  {
    text: "Excellent service and great app experience! The drivers are professional, and the rides are always on time.",
    author: "Rahul Sharma",
    rating: 4,
  },
  {
    text: "Affordable and reliable rides. The app is user-friendly and provides a seamless booking experience.",
    author: "Priya Desai",
    rating: 5,
  },
  {
    text: "The ride booking experience is smooth, and the drivers are always courteous. Highly recommend this app.",
    author: "Ankit Mehta",
    rating: 4,
  },
  {
    text: "Efficient service and clean vehicles. A very dependable option for daily commutes.",
    author: "Sanjana Roy",
    rating: 5,
  },
  {
    text: "User-friendly app and great customer support. My go-to app for hassle-free rides.",
    author: "Vikas Patel",
    rating: 4,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <div className="bg-gray-50 py-48">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <ChevronLeft
            className="cursor-pointer"
            size={40}
            onClick={handlePrev}
          />
          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="max-w-sm bg-white p-12 rounded-lg shadow-lg text-center"
              >
                <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="text-xl font-semibold">{testimonial.author}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Next Button */}
          <ChevronRight
            className="cursor-pointer"
            size={40}
            onClick={handleNext}
          />
        </div>
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
