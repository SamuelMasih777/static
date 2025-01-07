import React from "react";
import AboutPageCarousel from "../launchbanner/page";
import TeamSection from "../team/page";
import ImpactCarousel from "../impact/page";
import Image from "next/image";
import Environment from "@/public/images/environment.png";
import Social from "@/public/images/csrimage.png";
import MobileImpactCarousel from "../impact/mobile/page";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Launch Banner */}
      <AboutPageCarousel />

      {/* Team Section */}
      <div className="mx-auto py-16">
        {/* <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2> */}
        <TeamSection />
      </div>

      {/* Impact Stats */}
      <div>
        {/* MobileImpactCarousel for screens smaller than 'sm' */}
        <div className="block sm:hidden">
          <MobileImpactCarousel />
        </div>

        {/* ImpactCarousel for screens larger than or equal to 'sm' */}
        <div className="hidden sm:block">
          <ImpactCarousel />
        </div>
      </div>

      {/* Beyond Business Section */}
      <div className="overflow-hidden max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl text-center font-bold text-customText mb-8">
          MyRik Beyond Business
        </h2>
        <p style={{ lineHeight: '1.45' }} className="tracking-wide text-gray-800 text-xl pl-5 sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-normal mb-12  w-full">
          We are building भारत stack for daily needs related to short distance
          riding and delivery. While this is being built to handle the mammoth
          scale that भारत presents, it will also be environment friendly and
          inclusive as it will create many opportunities for the
          underprivileged.
        </p>

        {/* Environmental Impact Card */}
        <div className="bg-customText text-white rounded-3xl p-8 sm:p-20 mt-12 relative">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1 lg:pr-48">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium mb-2">
                Environmentally conscious
              </h3>
              <p className="text-black sm:pr-48 text-xl  md:text-2xl lg:text-2xl xl:text-2xl font-normal">
                We have a 100% electric fleet, making all trips that we do
                emission free.
              </p>
            </div>

            <div className="relative w-full lg:w-96 h-64 lg:absolute lg:-right-6 lg:top-1/2 lg:-translate-y-1/2">
              <Image
                src={Environment.src} // Replace with your actual image path
                alt="Environmental illustration showing electric vehicle and earth"
                width={800}
                height={800}
                className="w-full h-full object-contain transform -scale-x-100"
              />
            </div>
          </div>
        </div>

        <div className="bg-customText text-white rounded-3xl p-8 sm:p-2 mt-24 relative">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Left Section - Image */}
            <div className="relative w-full lg:w-96 h-64 lg:static order-2 lg:order-1">
              <Image
                src={Social.src} // Replace with your actual image path
                alt="Social responsibility illustration"
                width={800}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Section - Text */}
            <div className="flex-1 lg:pl-48 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium mb-2">
                Socially responsible
              </h3>
              <p className="text-black text-xl md:text-2xl lg:text-2xl xl:text-2xl font-normal">
                We create predictable income opportunities for underprivileged
                and unskilled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
