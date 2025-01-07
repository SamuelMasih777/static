"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MyRik from "@/public/images/myrik.png";
import { Menu } from "lucide-react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
const isActive = (path:any) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header
      className={`z-50 fixed w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      } hover:bg-white font-sans`}
    >
      <div className=" mx-auto px-12 py-8 font-sans p-4">
        {/* Main nav container */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo container */}
          <div className="flex items-center -ml-4 md:ml-0 md:mr-0">
            <Link href="/home" className="flex items-center" onClick={handleLinkClick}>
              <Image
                src={MyRik}
                alt="Myrik Logo"
                width={500}
                height={400}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Navigation links and Download Button */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/home"
              className={`px-6 py-2 font-medium text-2xl rounded-xl ${
                isActive("/home")
                  ? "border border-customText text-customText"
                  : "text-gray-900 hover:text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-6 py-2 font-medium text-2xl rounded-xl ${
                isActive("/about")
                  ? "border border-customText text-customText"
                  : "text-gray-900 hover:text-gray-700"
              }`}
              
            >
              About
            </Link>
            <Link
              href="/download"
              // className="px-4 py-2 font-medium text-2xl  rounded-lg hover:bg-customText"
              className={`px-6 py-2 font-medium text-2xl rounded-xl ${
                isActive("/download")
                  ? "bg-customText text-white"
                  : "text-customText bg-white"
              }`}
            >
              Download
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="text-customText md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={32} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-2 md:hidden ">
            <Link
              href="/home"
              className="block px-6 py-2 font-medium border border-customText text-2xl text-customText rounded-xl"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-6 py-2 text-gray-900 font-medium text-2xl"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/download"
              className="block px-4 py-2 font-medium text-2xl bg-customText text-white rounded-lg"
              onClick={handleLinkClick}
            >
              Download
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
