import React from "react";
import Image from "next/image";
import RedAuto from "@/public/images/redauto.png";
import MyRikImage from "@/public/images/rikshaw.png";
import MyStoreImage from "@/public/images/image.png";
import MyDeliveryImage from "@/public/images/delivery.png";
import VisionBg from "@/public/images/assetImage3.png";
import ManWithFlag from "@/public/images/assetimage.png";
import Road from "@/public/images/road.png";
import Sunset from "@/public/images/sunset.png";
import Digital from "@/public/images/digitalMarketing.png";
import ImageAsset from "@/public/images/imageAsset.png";
import TestimonialsCarousel from "../testimony/page";

const HomePage = () => {
  const features = [
    {
      title: "MyRik",
      description:
        "Ride Smart, Ride Green. Book rides with doorstep pickup for a convinient and affordable commute.",
      image: MyRikImage,
    },
    {
      title: "MyStore",
      description:
        "Shop top products from partners, enjoy free delivery, and earn MyRik reward coins with every order.",
      image: MyStoreImage,
    },
    {
      title: "MyDelivery",
      description:
        "Experience swift and seamless last-mile deliveries at unbeatable prices!",
      image: MyDeliveryImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="bg-customGray py-14 px-12 relative">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:min-h-[90vh]">
          <div className="w-full sm:w-4/5 lg:w-1/2 mt-24 lg:mt-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-medium text-gray-800 font-sans mb-8">
              Last Mile Mobility Platform for Bharat&apos;s 180 Million Daily
              Commuters
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl  font-normal font-sans text-gray-500 p-2">
              MyRik&apos;s proprietary multi-utilization platform and e-Rickshaw
              drivers exclusive network provides the complete suite of apps
              specifically built for भारत
            </p>
          </div>
          <div className="w-1/3 lg:w-1/2">
            <div className="relative">
              {/* Rectangle Container (with rotation) */}
              <div
                className="h-80 hidden lg:block -top-20 left-20 w-full bg-customRectangleBg relative"
                style={{
                  height: "35rem", // Increased height (you can adjust this as needed)
                  width: "120%",
                  borderRadius: "100px", // Apply rounded corners to the container
                  overflow: "visible", // Prevent overflow of content
                  transform: "rotate(-25deg)", // Rotate the container
                }}
              >
                {/* Add content here (if necessary) */}
              </div>

              {/* Image (without rotation) */}
              <div
                className="absolute hidden lg:block top-20 w-full md:h-80 lg:h-[30rem]"
                style={{
                  transform: "rotate(0deg)",
                }}
              >
                <Image
                  src={RedAuto}
                  alt="Myrik Logo"
                  width={1200}
                  height={1200}
                  className="h-auto w-auto transform -scale-x-100 "
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>                
      {/* Features Section */}
      <div className="flex justify-center mx-auto py-16 items-center flex-wrap mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 p-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="mb-16 bg-customCard h-auto w-auto sm:w-80 lg:w-80 text-xl font-medium text-gray-50 text-center rounded-2xl py-12 px-6"
            >
              {/* Image Wrapper */}
              <div className="-mt-4 shadow-2xl bg-customGray h-60 w-80 lg:w-[255px] ml-1 lg:ml-2 rounded-xl transform -translate-y-24 flex items-center justify-center">
                <Image
                  src={feature.image} // Dynamically set image from the imported array
                  alt={feature.title}
                  width={1200} // Adjust width as needed
                  height={1200} // Adjust height as needed
                  className="h-52 w-[50rem]"
                />
              </div>
              {/* Title */}
              <h3 className="text-4xl font-semibold -mt-16">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-950 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div
  className="py-32 sm:py-48 md:py-64 bg-cover bg-left relative mt-56"
  style={{
    backgroundImage: `url(${VisionBg.src})`, // Use imported image for background
    backgroundPosition: "-5px center", // Center align the background image
    backgroundSize: "80%", // Ensure the image scales to cover the container
    backgroundRepeat: "no-repeat", // Prevent repeating the background image
  }}
>
<div className="absolute bottom-16 sm:bottom-24 md:bottom-64 left-4 sm:left-8 md:right-6 py-8 px-4">
  <div className="ml-auto  sm:ml-12 md:ml-[200px] max-w-auto mb-48 xl:ml-[760px] xl:max-w-xl xl:mb-24">
    {/* Title */}
    <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 text-customText text-left">
      Vision
    </h2>
    {/* Description */}
    <p className="text-base text-lg sm:text-lg md:text-xl font-medium text-gray-900 leading-relaxed text-left">
      Transform last-mile mobility through a sustainable, efficient, and
      inclusive transportation ecosystem that empowers millions of daily
      commuters and fuels Bharat&apos;s economic growth.
    </p>
  </div>
</div>

  {/* Positioned Image */}
  <div
  className="absolute 
    left-20 bottom-36  // Default position for very small screens
    sm:left-16 sm:bottom-32 // Position for small screens
    md:left-[260px] md:bottom-[225px] // Position for medium screens
    lg:left-[300px] lg:bottom-[250px] // Position for large screens
    xl:left-[460px] xl:bottom-[378px] // Position for extra-large screens
    transform rotate-[7deg]"
>
  <Image
    src={ManWithFlag.src}
    alt="Overlay"
    width={2000}
    height={1200}
    className="
      w-24 h-auto // Smaller image size for very small screens
      sm:w-48 // Slightly larger image for small screens
      md:w-52 // Medium-sized image for medium screens
      lg:w-52 // Larger image for large screens
      xl:w-52 // Full size for extra-large screens
    "
  />
</div>

</div>


      {/* Stats Section */}
      <div className="bg-customBlue w-full px-4 mx-auto py-10 -mt-24">
        <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto py-20 min-h-96">
          {/* Left Column - Single Card */}
          <div className="bg-customPurple rounded-xl p-8 shadow-lg flex flex-col w-80 h-[32rem]">
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Downloads
            </h3>
            <p className="text-xl text-white">
              <strong>80,000+</strong> Downloads of MyRik App and Counting!
            </p>
            <div className="relative w-96 h-96 top-8 right-16 mt-auto items-center">
              <Image
                src={Digital.src}
                alt="Card 1"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Middle Column - Two Cards */}
          <div className="flex flex-col gap-12 w-80">
            {/* Card 1 in Middle Column */}
            <div className="bg-customRed rounded-xl p-6 shadow-lg flex flex-col h-[10rem]">
              <h3 className="text-3xl font-semibold mb-4 text-white">Trips</h3>
              <p className="text-xl text-white">
                <strong>200,000+</strong> Successful Trips and Growing
              </p>
            </div>

            {/* Card 2 in Middle Column */}
            <div className="bg-customYellow rounded-xl p-8 shadow-lg flex flex-col h-[19rem]">
              <h3 className="text-3xl font-semibold mb-4 text-white">
                Passengers
              </h3>
              <p className="text-xl text-white">
                <strong>220,000+</strong> Passengers Served with Pride
              </p>
              <div className="relative w-80 h-80 top-2 right-8 mt-auto">
                <Image
                  src={ImageAsset.src}
                  height={1000}
                  width={800}
                  alt="Card 3"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Single Card */}
          <div className="bg-customGreen relative rounded-xl p-8 shadow-lg flex flex-col w-80 h-[32rem]">
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Kilometers
            </h3>
            <p className="text-xl text-white">
              <strong>450,000+</strong> Kilometers Covered with Excellence
            </p>
            <div className="absolute w-96 h-96 top-32 -bottom-10 left-2  mt-auto">
              <Image
                src={Road.src}
                alt="Card 4"
                fill
                className="object-contain"
              />
            </div>

            {/* Second Image with absolute positioning */}
            <div className="absolute w-80 h-80 top-16 bottom-36 -right-0.5">
              <Image src={Sunset.src} alt="Overlay" width={600} height={800} />
            </div>
            <div className="absolute w-60 h-40 -bottom-2 left-16">
              <Image
                src={RedAuto.src}
                alt="Overlay"
                width={600}
                height={800}
                className="transform -scale-x-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsCarousel />
    </div>
  );
};

export default HomePage;
