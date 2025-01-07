import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: `"Good app and driver is also very polite and helpful because I said him please drop me at bus stand and he help me to catch the bus"`,
    author: "Archana Sidhu",
    rating: 5,
  },
  {
    text: "Awesome 👍 Be leave me guys this app is wonderful This app you can provide the rickshaw in emergency 👍👍👍🥰",
    author: "Pankaj Fitness",
    rating: 5,
  },
  {
    text: `"Banda ke liye best hai"`,
    author: "Manish Kumar",
    rating: 4,
  },
  {
    text: `"Very good app satisfied payment rate and concept this app service But launch all India or up and please add pickup location dalne ka option this app work only local Banda city"`,
    author: "Pankaj Goswami",
    rating: 5,
  },
  {
    text: "Nice app",
    author: "Parul Dass",
    rating: 4,
  },
  {
    text: "It's a good and very useful app l were happy with this but one more thing on that one If add are soo.much then we will get extra more coins it's a good app I request all of you download this app thanks",
    author: "Anju Sonkar",
    rating: 4,
  },
  {
    text: "Very good service and affordable for every person",
    author: "Manoj Prajapati",
    rating: 5,
  },
  {
    text: "This is a helpful app, the concept is good, I think we should support this app",
    author: "John D",
    rating: 4,
  },
  {
    text: "Only opinion its very good because i get best facility in my city which even ola and uber will not be able to provide this service thanks Myrik ☺️☺️🙏🏻🙏🏻🙏🏻",
    author: "Abhishek Soni",
    rating: 4,
  },
  {
    text: "Good",
    author: "Amit Kumar Rana",
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
                <div className="flex justify-center mt-2 ">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} >
                      <Star size={20} className="text-yellow-400 fill-current"/>
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
