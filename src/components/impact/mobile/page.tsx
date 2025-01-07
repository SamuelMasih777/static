import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutoDriver from "@/public/images/autodriver.png";
import AboutSile from "@/public/images/aboutSlider.png";
import Carbon from "@/public/images/aboutsliderco2.png";
import RedAuto from "@/public/images/redauto.png";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const MobileImpactCarousel: React.FC = () => {
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
      overlayImage: RedAuto,
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
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left to go to the next slide
    onSwipedRight: handlePrev, // Swipe right to go to the previous slide
    preventScrollOnSwipe: true, // Prevent the page from scrolling while swiping
    trackMouse: true, // Enable mouse dragging as well
  });

  return (
    <div {...swipeHandlers} className="bg-gray-200 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Carousel content */}
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Carousel Item */}
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {/* Image Container */}
              <div
                className={`relative w-[10rem] h-[12rem] rounded-[20px] overflow-hidden py-5 ${items[currentIndex].backgroundColor}`}
              >
                <Image
                  src={items[currentIndex].imageSrc}
                  height={1000}
                  width={1000}
                  alt="carousel item"
                  className="object-cover w-full h-full"
                />
                {items[currentIndex].overlayImage && (
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[3rem] h-[3rem]">
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

              {/* Text Content */}
              <p className="text-xl sm:text-2xl font-semibold text-center px-4">
                {items[currentIndex].text}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
            <ChevronLeft
              size={40}
              className="hover:cursor-pointer"
              onClick={handlePrev}
            />

            <ChevronRight
              size={40}
              className="hover:cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileImpactCarousel;
