import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoDriver from "@/public/images/autodriver.png";
import AboutSile from "@/public/images/aboutSlider.png";
import Carbon from "@/public/images/aboutsliderco2.png";
import RedAuto from "@/public/images/redauto.png"
import Image from "next/image";

const ImpactCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of items for the carousel
  const items = [
    {
      imageSrc: AutoDriver, // Replace with actual image paths
      text: "Over 400 drivers supported through our ecosystem",
      backgroundColor: "bg-customBg1",
    },
    {
      imageSrc: Carbon, // Replace with actual image paths
      text: "Sustainable transport solutions for a cleaner future",
      backgroundColor: "bg-customBg2",
      overlayImage:RedAuto
    },
    {
      imageSrc: AboutSile, // Replace with actual image paths
      text: "Improving efficiency and safety with technology",
      backgroundColor: "bg-customBg3",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="bg-gray-200 py-64 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Carousel content */}
          <div className="flex items-center justify-center gap-8">
            {/* Carousel Item */}
            <div className={`flex items-center justify-between gap-24 px-4 `}>
              <div className={`ml-12 relative hidden lg:block md:block xl:block w-[20rem] h-[26rem] rounded-[100px]  overflow-hidden py-16  ${items[currentIndex].backgroundColor}`}>
                <Image
                  src={items[currentIndex].imageSrc}
                  height={1000}
                  width={1000}
                  alt="carousel item"
                  className="object-cover w-full h-full"
                />
                {items[currentIndex].overlayImage && (
                  <div className="absolute top-40 left-28 w-[5rem] h-[5rem]">
                    <Image
                      src={items[currentIndex].overlayImage}
                      height={500} // Adjust size of the overlay image
                      width={500}
                      alt="Overlay"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
              <p className="text-3xl max-w-xl font-medium p-8 sm:text-center">
                {items[currentIndex].text}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
            <ChevronLeft
              size={40}
              className=" hover:cursor-pointer"
              onClick={handlePrev}
            />

            <ChevronRight
              size={40}
              className=" hover:cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCarousel;
