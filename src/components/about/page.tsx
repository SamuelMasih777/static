import React from "react";
import AboutPageCarousel from "../launchbanner/page";
import TeamSection from "../team/page";
import ImpactCarousel from "../impact/page";
import Image from "next/image";
import Environment from "@/public/images/environment.png";
import Social from "@/public/images/csrimage.png";

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
      <ImpactCarousel />

      {/* Beyond Business Section */}
      <div className="overflow-hidden max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl text-center font-bold text-customText mb-8">
          MyRik Beyond Business
        </h2>
        <p className="leading-loose text-gray-800 text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-normal mb-12 m-8 p-8 ml-2 w-full">
         We are building भारत stack for daily needs related to short distance riding
and delivery. While this is being built to handle the mammoth scale that
भारत presents, it will also be environment friendly and inclusive as it will
create many opportunities for the underprivileged.
        </p>

        {/* Environmental Impact Card */}
        <div className="bg-customText text-white rounded-xl p-20 mt-12 relative">
          <div className=" relative flex items-center gap-4 ">
            <div className="flex-1 pr-64 mr-24 flex-col xl:flex-row">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium mb-2">
                Environmentally conscious
              </h3>
              <p className="text-black text-xl  md:text-2xl lg:text-2xl xl:text-2xl font-normal">
                We have a 100% electric fleet, making all trips that we run
                emission free.
              </p>
            </div>
            <div className=" hidden md:block  w-[23rem] h-[26rem] absolute -right-12 top-36 top-1/2 transform -translate-y-1/2">
              <Image
                src={Environment.src}
                alt="carousel item"
                width={1200}
                height={1000}
                className="h-auto w-auto transform -scale-x-100"
              />
            </div>
          </div>
        </div>
        <div className="bg-customText text-white rounded-xl p-20 md:p-2 lg:p-2 xl:p-2 mt-36 relative">
  <div className="flex flex-col lg:flex-row items-center">
    {/* Image Section */}
    <div className="hidden md:block w-64 -right-12 -bottom-36 lg:order-1 absolute lg:relative lg:left-12 lg:transform lg:-translate-y-1/2">
      <Image
        src={Social.src}
        alt="carousel item"
        width={1000}
        height={800}
        className="h-auto w-auto"
      />
    </div>

    {/* Text Section */}
    <div className="flex-1 lg:order-2 lg:pl-64 lg:ml-24 ">
      <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium mb-2">
        Socially Responsible
      </h3>
      <p className="text-black text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-normal">
        We create predictable income opportunities for unprivileged and unskilled.
      </p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default AboutPage;
