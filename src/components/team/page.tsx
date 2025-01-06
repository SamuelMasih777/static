import React from "react";
import Image, { StaticImageData } from "next/image";
// import { Github} from 'lucide-react';  // Import LinkedIn Icon
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link"; // Import Link component
import Mahesh from "@/public/images/mahesh.jpg";
import Anweshan from "@/public/images/anweshan.jpg";
import Yatish from "@/public/images/yatish.jpg";

interface TeamCardProps {
  image: string | StaticImageData;
  name: string;
  title: string;
  education: string;
  linkedinUrl: string; // LinkedIn URL added
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  title,
  education,
  linkedinUrl,
}) => {
  return (
    <div className="relative group w-[22rem] h-[36rem] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Sliding Card - Initially hidden below the image */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        {/* Semi-transparent overlay for smooth transition */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* White card with content */}
        <div className="absolute inset-0 bg-white shadow-lg p-6 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-customText mb-1">{name}</h3>
          <p className="text-black text-2xl  font-semibold mb-1">{title}</p>
          <p className="text-black text-lg text-center">{education}</p>

          {/* LinkedIn Icon with Link */}
          <Link href={linkedinUrl} passHref>
            <div
              onClick={() =>
                window.open(linkedinUrl, "_blank", "noopener noreferrer")
              }
              className="mt-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <FaLinkedin size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Anweshan Guha Roy",
      title: "Co-Founder & CEO",
      education: "University of Leeds (2010)",
      image: Anweshan,
      linkedinUrl: "https://www.linkedin.com/in/anweshan-r-5aa08514/", // Example LinkedIn URL
    },    
    {
      name: "Yatish Gupta",
      title: "Co-Founder & CPO",
      education: "B.Tech, M.Tech @ IIT Bombay 0'3",
      image: Yatish,
      linkedinUrl: "https://www.linkedin.com/in/yatishgupta/", // Example LinkedIn URL
    },
    {
      name: "Mahesh Sharma",
      title: "Co-Founder & CTO",
      education: "B.Tech @ IIT Bombay (2002-06)",
      image: Mahesh,
      linkedinUrl: "https://www.linkedin.com/in/mahesh-sharma-a277766/", // Example LinkedIn URL
    },
  ];

  return (
    <div className="overflow-hidden max-w-7xl  mx-auto py-16">
      <h2 className="text-5xl font-bold text-customText text-center mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 place-items-center">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            education={member.education}
            linkedinUrl={member.linkedinUrl} // Passing LinkedIn URL
          />
        ))}
      </div>
      <div className="text-center mt-24">
        <h3 className="text-5xl font-bold text-customText">
          Driving Impact, Sustainability, Growth
        </h3>
      </div>
    </div>
  );
};

export default TeamSection;
