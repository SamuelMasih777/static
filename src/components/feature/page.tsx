import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import MyRikImage from "@/public/images/rikshaw.png";
import MyStoreImage from "@/public/images/image.png";
import MyDeliveryImage from "@/public/images/delivery.png";

const FeaturesCarousel = () => {
  // Feature Array
  const features = [
    {
      title: "MyRik",
      description:
        "Ride Smart, Ride Green. Book rides with doorstep pickup for a convenient and affordable commute.",
      image: MyRikImage,
    },
    {
      title: "MyStore",
      description:
        "Shop top products from MyRik Store, enjoy free delivery, and earn MyRik reward coins with every order.",
      image: MyStoreImage,
    },
    {
      title: "MyDelivery",
      description:
        "Experience swift and seamless last-mile deliveries at unbeatable prices!",
      image: MyDeliveryImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex flex-col items-center py-24 px-12">
      {/* Carousel Wrapper - removed overflow-hidden from this div */}
      <div className="relative w-80 max-w-lg">
        {/* Cards Container - keep overflow-hidden here */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="min-w-full flex flex-col items-center bg-customCard rounded-2xl py-8 px-6 mt-20"
              >
                {/* Image Wrapper - positioned relative to the card */}
                <div className="absolute top-2 z-10 shadow-2xl bg-customGray h-60 w-72 rounded-xl flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="h-52 w-auto"
                  />
                </div>
                {/* Content */}
                <div className="mt-44">
                  <h3 className="text-4xl font-semibold text-white text-center">{feature.title}</h3>
                  <p className="text-gray-950 text-xl font-medium text-center p-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="p-2 "
          onClick={handlePrevious}
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="p-2 "
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  
  );
};

export default FeaturesCarousel;
