import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import MyRikLogo from "@/public/images/vectorNavigator.png";
import MoneyImage from "@/public/images/homeslider.png";
import HomeAuto from "@/public/images/homesilderauto.png";
import HomeEarth from "@/public/images/homesliderearth.png";
import HomeAutoMen from "@/public/images/homeautoimage.png";

const launchData = [
    {
      image: HomeAutoMen,
      text: "MyRik Launches in Banda - May 2024",
      description:
        "MyRik was officially launched in Banda, Uttar Pradesh, in May 2024 with the mission to revolutionize urban trsnportation by providing eco-friendly and affordable e-rickshaw services.",
      backgroundColor: "bg-customPinkBg",
      circleColor: "bg-customCircularPurple",
      imageStyles: { top: "-2rem", left: "-1.9rem" }, // Custom styles for this image
      width: "30rem", // Custom width in rem
    height: "30rem", // Custom height in rem
    },
    {
      image: MoneyImage,
      text: "30,000 Montly Users Milestone-September 2024",
      description:
        "By September 2024, MyRik proudly achieved a significant milestone, reaching 30,000 Montly Active Users, reflecting the platform's growing popularity and the trust of our expanding community.",
      backgroundColor: "bg-customBlueBg",
      circleColor: "bg-customCircularViolet",
      imageStyles: { top: "-0.2rem", left: "-0.2rem" }, // Custom styles for this image
      width: "25rem", // Custom width in rem
    height: "25rem", // Custom height in rem
    },
    {
      image: HomeAuto,
      text: "MyRik collaborates with local retailers - July 2024",
      description:
        "In November 2024, MyRik celebrated a major achievement of completing 200,000 rides, a testament to our commitment to seamless and reliable transportation for our users.",
      backgroundColor: "bg-customYellowBg",
      circleColor: "bg-customCircularGreen",
      imageStyles: { top: "-2rem", left: "-4rem" }, // Custom styles for this image
      width: "35rem", // Custom width in rem
    height: "25rem", // Custom height in rem
    },
    {
      image: HomeEarth,
      text: "MyRik goes Green - August 2024",
      description:
        "In December 2024, MyRik successfully launched in Kanpur, marking the next step in our expansion journey to offer convinient and reliable transportation services to more users.",
      backgroundColor: "bg-customGreenBg",
      circleColor: "bg-customCircularIndigo",
      imageStyles: { top: "-6rem", left: "-0.1rem" }, // Custom styles for this image
      width: "30rem", // Custom width in rem
    height: "30rem", // Custom height in rem
    },
  ];
  

const AboutPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? launchData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % launchData.length);
  };

  return (
    <div className={`py-40 ${launchData[currentIndex].backgroundColor}`}>
  <div className="max-w-6xl mx-auto relative">
    {/* Navigation Buttons */}
    <ChevronLeft
    size={48}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-900 hover:text-gray-800"
      onClick={handlePrev}
    />
    <ChevronRight
    size={48}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-900 hover:text-gray-800"
      onClick={handleNext}
    />

    {/* Content Section */}
    <div className="flex items-center justify-between">
      {/* Circular Background for Image */}
      <div
  className={`hidden lg:block md:block xl:block w-[24rem] h-[24rem] ml-24 rounded-full flex items-center justify-center shadow-lg relative ${launchData[currentIndex].circleColor}`}
>
  <Image
    src={launchData[currentIndex].image}
    alt="Myrik Launch"
    // width={1200} // Adjust width for larger size
    // height={1200} // Adjust height for larger size
    className="h-auto w-auto rounded-full" // Adjust position with `top` and `left`
    style={{
        position: "absolute",
        ...launchData[currentIndex].imageStyles, // Apply custom styles
        width: launchData[currentIndex].width,  // Apply custom width in rem
        height: launchData[currentIndex].height
      }}
  />
</div>


      {/* Text Section */}
      <div className="max-w-lg text-center p-12">
        <h2 className="text-3xl font-semibold mb-4 text-customText ">
          {launchData[currentIndex].text}
        </h2>
        <p className="text-gray-900 text-xl font-medium leading-relaxed">
          {launchData[currentIndex].description}
        </p>
      </div>
    </div>

    {/* Indicator Section */}
    <div className="mt-12 absolute -bottom-24 left-1/2 transform -translate-x-1/2 py-6 px-14 rounded-full bg-white">
      <div className="relative flex items-center">
        {/* Background Line */}
        <div className="relative p-2 w-56 sm:w-72 md:w-80 lg:w-80" >          
          {/* Static Dots */}
          <div className="bg-white absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
            {launchData.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-gray-200" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Moving MyRik Logo */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300"
            style={{
              left: `calc(${(currentIndex / (launchData.length - 1)) * 100}% - 40px)`,
            }}
          >
            <div className="w-20 h-12 bg-customIconBg rounded-full shadow-md flex items-center justify-center">
              <Image
                src={MyRikLogo.src}
                alt="Myrik Logo"
                width={25}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default AboutPageCarousel;
